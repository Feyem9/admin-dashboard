import React, { useState } from 'react';
import axios from 'axios';  // Importation d'Axios
import { TextField, Button, Typography, Paper, CircularProgress } from '@mui/material';

function UserLogin() {
  const [username, setUsername] = useState('');  // État pour le nom d'utilisateur
  const [password, setPassword] = useState('');  // État pour le mot de passe
  const [loading, setLoading] = useState(false);  // Indicateur de chargement
  const [error, setError] = useState<string | null>(null);  // Gestion des erreurs
  const [userData, setUserData] = useState<any>(null);  // État pour stocker les données utilisateur après connexion

  const handleLogin = () => {
    setLoading(true);  // Début du chargement
    setError(null);  // Réinitialiser l'erreur
    axios
      .post('https://dummyjson.com/user/login', {
        username,
        password,
        expiresInMins: 30,  // Délai d'expiration de la session (en minutes)
      })
      .then((response) => {
        setUserData(response.data);  // Stocker les données de l'utilisateur après la connexion
        setLoading(false);  // Fin du chargement
      })
      .catch((err) => {
        setError(err.message);  // Gérer les erreurs
        setLoading(false);  // Fin du chargement
      });
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Connexion
      </Typography>
      
      {/* Formulaire de connexion */}
      <TextField
        label="Nom d'utilisateur"
        fullWidth
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Mot de passe"
        type="password"
        fullWidth
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      
      {/* Bouton de connexion */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        fullWidth
        disabled={loading}  // Désactiver le bouton pendant le chargement
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Se connecter'}
      </Button>

      {/* Affichage des erreurs */}
      {error && <Typography color="error" sx={{ marginTop: 2 }}>{error}</Typography>}

      {/* Affichage des données utilisateur après une connexion réussie */}
      {userData && (
        <Paper sx={{ padding: 2, marginTop: 3 }}>
          <Typography variant="h6">Bienvenue, {userData.username}!</Typography>
          <Typography>Email : {userData.email}</Typography>
          <Typography>Token : {userData.token}</Typography>
          {/* Affichez d'autres informations de l'utilisateur ici */}
        </Paper>
      )}
    </Paper>
  );
}

export default UserLogin;
