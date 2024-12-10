// Importar dependencias
const express = require('express');
const cors = require('cors');

// Inicializar la aplicación de Express
const app = express();

// Middleware
app.use(cors()); // Habilitar CORS para permitir solicitudes desde otros dominios
app.use(express.json()); // Permite manejar JSON en las solicitudes

// Rutas
app.get('/', (req, res) => {
  res.send('Hola desde el backend!');
});

// Ruta de ejemplo para obtener datos
app.get('/api/datos', (req, res) => {
  const datos = { mensaje: 'Esto es un ejemplo de datos del backend' };
  res.json(datos);
});

// Puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
