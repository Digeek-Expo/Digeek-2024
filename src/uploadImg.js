import { createClient } from '@supabase/supabase-js';

const DBURL = import.meta.env.PUBLIC_DBURL;
const APIKEY = import.meta.env.PUBLIC_APIKEY;

export const supabaseClient = createClient(DBURL, APIKEY);

// Define la función de carga de imágenes
window.uploadImg = async function (file) {
    try {
      const { data, error } = await supabaseClient.storage
        .from('Digeek2024-comprobantes')
        .upload(file.name, file);
  
      if (error) {
        console.error(error);
        alert('Error uploading image');
      } else {
        // Almacenar la URL de la imagen en el campo comprobante
        values.comprobante = data[0].url;
        setImage(data[0].url);
        console.log('URL de la imagen:', data[0].url);
        alert('Image uploaded successfully');
      }
    } catch (error) {
      console.error('Error al cargar la imagen al bucket:', error);
    }
  };

document.addEventListener('DOMContentLoaded', function () {
    // Your existing code in uploadImg.js
    const fileInput = document.getElementById('fileInput');

    // Check if fileInput is not null before adding the event listener
    if (fileInput) {
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files?.[0];
            if (file) {
                // Call your uploadImg function or handle the file upload logic here
            }
        });
    }
});
