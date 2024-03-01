import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const RegistrationForm = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (event, values) => {
    if (event.target.files && event.target.files[0]) {
      values.imagen = URL.createObjectURL(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
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
    imagen: Yup.mixed().required("Obligatorio"),
  });

  return (
    <div className="flex flex-col items-center md:items-end md:w-1/3 w-4/5">
      <h1 className="text-4xl text-[#7678FF] font-bold">Registro</h1>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          escuela: "",
          terminos: false,
          imagen: null,
        }}
        validationSchema={registroSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify({ ...values }, null, 2));
            setSubmitting(false);
          }, 400);
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
            <div className="border-2 border-[#7678FF] relative rounded-sm gap-4 w-full h-[140px] border-dashed flex flex-col justify-center items-center">
              {image != null ? (
                <div className="bg-[#7678FF] rounded-full h-28 w-28">
                  <img src={image} className="w-28 h-28" />
                </div>
              ) : (
                <>
                  <img src="/uploadImage.png" className="w-10 h-10" />
                  <h1 className="font-bold text-[#7678FF] text-center">
                    Sube tu recibo de pago en este apartado
                  </h1>
                </>
              )}
              <input
                type="file"
                className="w-full h-full opacity-0 absolute hover:cursor-pointer"
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => onImageChange(e, values)}
              />
              <ErrorMessage name="image" component={ErrorComponent} />
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
