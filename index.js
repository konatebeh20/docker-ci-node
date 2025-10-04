const express = require("express");
const app = express();

app.get('/', (req, res) => {
//   res.send('Hello Docker + CI/CD!');
  res.send('Hello Docker + ');
});

// N'écoutez sur un port que si le fichier est exécuté directement
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
  });
}

// IMPORTANT : Exportez l'app pour les tests
module.exports = app;