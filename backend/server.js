const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route de test pour la racine
app.get('/', (req, res) => {
  res.json({ message: 'Serveur fonctionne !' });
});

// Route de test
app.get('/api/test', (req, res) => {
  res.json({ message: 'API fonctionne !' });
});

// Routes d'authentification 
// app.use('/api/auth', authRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
