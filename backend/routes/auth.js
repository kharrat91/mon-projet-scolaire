const express = require('express');
const router = express.Router();

// Route pour l'inscription
router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  
  // Validation simple
  if (!email || !password) {
    return res.status(400).json({ error: 'Email et mot de passe requis' });
  }
  
  // TODO : Ajouter la logique Firebase
  res.json({ message: 'Inscription réussie' });
});

// Route pour la connexion
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Validation simple
  if (!email || !password) {
    return res.status(400).json({ error: 'Email et mot de passe requis' });
  }
  
  // TODO : Ajouter la logique Firebase
  res.json({ message: 'Connexion réussie', token: 'fake-token' });
});

module.exports = router;