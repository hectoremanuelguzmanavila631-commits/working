const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Ejemplo de optimización: Simulación de caché para mejorar rendimiento
let inventoryCache = [];

app.get('/api/inventory', (req, res) => {
    // Si el caché tiene datos, los enviamos (Optimización)
    if (inventoryCache.length > 0) {
        return res.status(200).json(inventoryCache);
    }
    // Lógica para consultar base de datos...
});

app.post('/api/inventory', (req, res) => {
    const { name, stock, price } = req.body;
    
    // Depuración: Manejo de errores sugerido por Copilot
    if (!name || stock < 0) {
        return res.status(400).json({ error: "Datos de inventario inválidos" });
    }

    const newItem = { id: Date.now(), name, stock, price };
    inventoryCache.push(newItem);
    res.status(201).json(newItem);
});

app.listen(5000, () => console.log("Servidor en puerto 5000"));
