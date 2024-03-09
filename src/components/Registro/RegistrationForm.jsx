import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { supabaseClient } from "../../uploadImg";

const RegistrationForm = () => {
  const [image, setImage] = useState(null);

  const onImageChange = async (event, values) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      try {
        // Cargar la imagen al bucket de Supabase
        const { data, error } = await supabaseClient.storage
          .from("Digeek2024-comprobantes")
          .upload(file.name, file);

        console.log("Respuesta de carga de imágenes:", data);

        if (error) {
          console.error("Error en la carga de imágenes:", error);
        } else if (data && data.path) {
          // Obtener la URL pública utilizando getPublicUrl
          const { data: publicUrlData, error: publicUrlError } =
            await supabaseClient.storage
              .from("Digeek2024-comprobantes")
              .getPublicUrl(data.path);

          console.log("Respuesta de getPublicUrl:", publicUrlData);

          if (publicUrlError) {
            console.error("Error al obtener la URL pública:", publicUrlError);
          } else if (publicUrlData && publicUrlData.publicUrl) {
            // Almacenar la URL de la imagen en el campo comprobante
            values.comprobante = publicUrlData.publicUrl;
            setImage(publicUrlData.publicUrl);
          } else {
            console.error(
              "La respuesta de getPublicUrl no contiene una propiedad válida para la URL pública:",
              publicUrlData
            );
          }
        } else {
          console.error(
            "La respuesta de carga de imagen no contiene la propiedad path:",
            data
          );
        }
      } catch (error) {
        console.error("Error al cargar la imagen al bucket:", error);
      }
    }
  };

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
    comprobante: Yup.mixed().required("Obligatorio"),
  });

  const insertarDatosEnBD = async (datos) => {
    try {
      const { data, error } = await supabaseClient
        .from("users")
        .insert([datos]);
      if (error) {
        console.error(error);
      } else {
        console.log("Datos enviados correctamente:", data);
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
          comprobante: null,
        }}
        validationSchema={registroSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (
            values.nombre &&
            values.correo &&
            values.escuela &&
            values.comprobante
          ) {
            const { terminos, ...datosSinTerminos } = values;
            insertarDatosEnBD(datosSinTerminos);
            setTimeout(() => {
              alert(JSON.stringify({ ...values }, null, 2));
              setSubmitting(false);
            }, 400);
          } else {
            alert(
              "Por favor, completa todos los campos antes de enviar el formulario."
            );
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, values }) => (
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
            <Field
              type="text"
              id="autocomplete"
              list="options"
              name="Taller"
              placeholder="Escribe aquí"
              component={InputComponent}
            />
            <datalist id="options">
              <option value="Elementos Básicos de Composición Fotográfica"></option>
              <option value="UI/UX: Design Thinking"></option>
              <option value="Tamagotchi Battle"></option>
            </datalist>
            <ErrorMessage name="Taller" component={ErrorComponent} />
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
