# Étape 1 : Image de base
FROM node:18

# Étape 2 : Répertoire de travail
WORKDIR /app

# Étape 3 : Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install


# Copier le code source
COPY . .

# Étape 5 : Exposer le port
EXPOSE 3000

# Étape 6 : Commande de démarrage
CMD ["node", "index.js"]
