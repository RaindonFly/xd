const express = require('express');
const app = express();
const port = 3000;

// Definir la ruta que devolverá el JSON
app.get('/informacion', (req, res) => {
  const response = {
    usuario: "Juan Pérez",
    mensaje: "¡Hola! Gracias por visitar nuestro sitio.",
    ubicacion: "https://www.google.com/maps/place/40.730610,-73.935242", // Ejemplo de URL de Google Maps (ubicación de Nueva York)
    mensaje_cordial: "¡Que tengas un excelente día!"
  };

  res.json(response);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
