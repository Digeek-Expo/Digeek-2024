import { createClient } from '@supabase/supabase-js';
import dotenv from dotenv;

dotenv.config();

const DBURL = process.env.DBURL;
const APIKEY = process.env.APIKEY;

const supabaseClient = createClient(DBURL, APIKEY);

// Define la función de carga de imágenes
window.uploadImg = async function (file) {
    const { data, error } = await supabaseClient.storage
        .from('Digeek2024-comprobantes')
        .upload(file.name, file);

    if (error) {
        console.log(error);
        alert('Error uploading image');
    } else {
        console.log(data);
        alert('Image uploaded successfully');
    }
};

// Obtiene el elemento de entrada de archivo
const fileInput = document.getElementById('fileInput');

// Escucha el evento de cambio en el elemento de entrada de archivo
fileInput.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (file) {
        // Llama a la función de carga de imágenes
        uploadImg(file);
    }
});
