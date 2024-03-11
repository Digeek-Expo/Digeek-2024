import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
// import { Autocomplete, Input, TextField } from "@mui/material";
import { createClient } from "@supabase/supabase-js";

const DBURL = import.meta.env.PUBLIC_DBURL;
const APIKEY = import.meta.env.PUBLIC_APIKEY;

export const supabaseClient = createClient(DBURL, APIKEY);

const RegistrationForm = () => {
  const [talleresOptions, setTalleresOptions] = useState([]);

  useEffect(() => {
    const fetchTalleresOptions = async () => {
      try {
        const { data: talleresData, error: talleresError } =
          await supabaseClient
            .from("workshops")
            .select("workshop_id, workshop_name, workshop_date, capacity");

        if (talleresError) {
          console.error(
            "Error al obtener la lista de talleres:",
            talleresError
          );
          return;
        }

        const talleresOptions = talleresData
          .filter((taller) => {
            return taller.capacity > 0;
          })
          .map((taller) => ({
            id: taller.workshop_id,
            label: `${taller.workshop_name} - ${taller.workshop_date}`,
            date: taller.workshop_date,
          }));

        setTalleresOptions(talleresOptions);
      } catch (error) {
        console.error("Error en la solicitud de talleres:", error);
      }
    };

    fetchTalleresOptions();
  }, []);

  const registroSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "Muy Corto")
      .max(50, "Muy Largo")
      .required("Obligatorio"),
    correo: Yup.string().email("Correo invalido").required("Obligatorio"),
    escuela: Yup.string()
      .min(2, "Muy Corto")
      .max(50, "Muy Largo")
      .required("Obligatorio"),
    terminos: Yup.boolean().oneOf([true], "Debes aceptar los términos"),
    taller: Yup.object()
      .required("Selecciona un taller")
      .shape({
        id: Yup.number().required("ID del taller es obligatorio"),
        label: Yup.string().required("Etiqueta del taller es obligatoria"),
        date: Yup.string().required("Fecha del taller es obligatoria"),
      }),
  });

  const insertarDatosEnBD = async (datos) => {
    try {
      const { data: tallerData, error: tallerError } = await supabaseClient
        .from("workshops")
        .select("capacity")
        .eq("workshop_id", datos.taller.id);
      if (tallerError) {
        alerta("Error al obtener talleres");
        return;
      }
      if (tallerData[0].capacity == 0) {
        alert("El taller seleccionado ya no tiene capacidad");
        return;
      }
      if (tallerData[0])
        if (!tallerError && tallerData[0].capacity > 0) {
          const { data, error } = await supabaseClient.from("users").insert([
            {
              nombre: datos.nombre,
              correo: datos.correo,
              escuela: datos.escuela,
              workshop_id: datos.taller.id,
            },
          ]);

          if (error) {
            console.error(error);
            return;
          }

          const capacidadActual = tallerData[0]?.capacity || 0;

          const nuevaCapacidad = Math.max(0, capacidadActual - 1);

          await supabaseClient
            .from("workshops")
            .update({ capacity: nuevaCapacidad })
            .eq("workshop_id", datos.taller.id);
          alert("Datos enviados correctamente");
        }
    } catch (error) {
      console.error("Error al insertar en la base de datos:", error);
    }
  };

  return (
    <div className="flex flex-col items-center md:items-end md:w-1/3 w-4/5">
      <h1 className="text-4xl text-[#7678FF] font-bold">Registro</h1>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          escuela: "",
          terminos: false,
          taller: null,
        }}
        validationSchema={registroSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            if (
              !(
                values.nombre &&
                values.correo &&
                values.escuela &&
                values.taller
              )
            ) {
              alert(
                "Por favor, completa todos los campos antes de enviar el formulario."
              );
              setSubmitting(false);
              return;
            }
            const { terminos, ...datosSinTerminos } = values;

            await insertarDatosEnBD(datosSinTerminos);

            setSubmitting(false);
            window.location.href = "/";
          } catch (error) {
            console.error("Error al enviar datos a la base de datos:", error);
            setSubmitting(false);
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, values, setFieldValue }) => (
          <Form className="flex flex-col gap-8 w-full items-end font-thin mt-10">
            <div className="w-full relative">
              <Field
                type="nombre"
                name="nombre"
                placeholder="Carlos Perez"
                component={InputComponent}
              />
              <ErrorMessage name="nombre" component={ErrorComponent} />
            </div>
            <div className="w-full relative">
              <Field
                name="correo"
                placeholder="carlosperez@gmail.com"
                component={InputComponent}
              />
              <ErrorMessage name="correo" component={ErrorComponent} />
            </div>
            <div className="w-full relative">
              <Field
                name="escuela"
                placeholder="CETYS Universidad Campus Ensenada"
                component={InputComponent}
              />
              <ErrorMessage name="escuela" component={ErrorComponent} />
            </div>

            <div className="w-full relative">
            <label className="text-[#7678FF] text-sm font-bold capitalize after:content-['*'] after:ml-0.5 after:text-[#FF42BA]">
                Taller
              </label>
              <select
                className="w-full border-2 border-[#7678FF] outline-none rounded-sm px-4 py-2"
                name="taller"
                value={values.taller ? values.taller.id : ""}
                onChange={(event) => {
                  const selectedTaller = talleresOptions.find(
                    (taller) => taller.id === parseInt(event.target.value)
                  );
                  setFieldValue("taller", selectedTaller);
                }}
              >
                <option value="" disabled>
                  Selecciona un taller
                </option>
                {talleresOptions.map((taller) => (
                  <option key={taller.id} value={taller.id}>
                    {taller.label}
                  </option>
                ))}
              </select>
              {/* <Autocomplete
                id="taller"
                className="w-full border-2 border-[#7678FF] outline-none rounded-sm"
                options={talleresOptions}
                getOptionLabel={(option) => option.label || ""}
                value={values.taller}
                onChange={(event, newValue) => {
                  setFieldValue("taller", newValue);
                }}
                disableClearable
                renderInput={(params) => <TextField {...params} />}
              /> */}

              <ErrorMessage name="taller" component={ErrorComponent} />
            </div>

            <div className="flex w-full items-center gap-2">
              <Field type="checkbox" name="terminos" className="w-4 h-4" />
              <label>
                He leído y acepto los{" "}
                <a href="#" className="text-[#7678FF] font-normal">
                  Términos y Condiciones
                </a>
                , Digeek’ 23
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting || Object.keys(errors).length > 0}
              className="md:w-[120px] w-full py-2 font-bold h-10 rounded-sm text-white bg-[#7678FF] disabled:opacity-60 flex justify-center items-center"
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 rounded-full text-white border-2 border-white border-b-slate-500"
                  viewBox="0 0 24 24"
                ></svg>
              ) : (
                "Enviar"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const InputComponent = (props) => {
  return (
    <>
      <label className="text-[#7678FF] text-sm font-bold capitalize after:content-['*'] after:ml-0.5 after:text-[#FF42BA]">
        {props.field.name}
      </label>
      <input
        className="border-2 border-[#7678FF] px-4 py-2 w-full outline-none rounded-sm"
        type="text"
        placeholder={props.placeholder}
        {...props.field}
      />
    </>
  );
};

const ErrorComponent = ({ children }) => {
  return (
    <label className="text-[#FF42BA] text-sm absolute bottom-[-1.2rem] left-0">
      {children}
    </label>
  );
};

export default RegistrationForm;
