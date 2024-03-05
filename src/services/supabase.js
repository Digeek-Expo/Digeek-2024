import { createClient } from "@supabase/supabase-js";

const DBURL = import.meta.env.PUBLIC_DBURL;
const APIKEY = import.meta.env.PUBLIC_APIKEY;

const supabaseClient = createClient(DBURL, APIKEY);

export const uploadImgToStogare = async (file) => {
  try {
    const { data, error } = await supabaseClient.storage
      .from("Digeek2024-comprobantes")
      .upload(generateUniqueId(), file);
    if (error) {
      alert("Error uploading image");
    } else {
      console.log(data);
      const comprabanteImgUrl =
        "https://kizjkvmgovpopsykducc.supabase.co/storage/v1/object/public/" +
        data.fullPath;
      alert("Image uploaded successfully");
      return comprabanteImgUrl;
    }
  } catch (error) {
    console.error("Error al cargar la imagen al bucket:", error);
  }
};

const uploadRowToDB = async (datos) => {
  const newUrl = await uploadImgToStogare(datos.comprobante);
  datos.comprobante = newUrl;
  try {
    const { data, error } = await supabaseClient.from("users").insert([datos]);
    if (error) {
      console.error(error);
    } else {
      console.log("Datos enviados correctamente:", data);
    }
  } catch (error) {
    console.error("Error al insertar en la base de datos:", error);
  }
};

const generateUniqueId = () => {
  const currentDate = new Date();
  const uniqueId = currentDate.getTime().toString();
  return uniqueId;
};

export default uploadRowToDB;
