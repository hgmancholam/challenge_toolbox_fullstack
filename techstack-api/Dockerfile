# Establece la imagen base para Node.js (puedes cambiar esto según tu necesidad)
FROM node:20

WORKDIR /app

# Copia los archivos de la aplicación
COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]  # Cambia "app.js" al archivo principal de tu API
