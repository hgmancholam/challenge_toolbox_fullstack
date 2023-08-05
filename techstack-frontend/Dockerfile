# Establece la imagen base para React (puedes cambiar esto según tu necesidad)
FROM node:20 as build

WORKDIR /app

# Copia los archivos de la aplicación
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Construye la aplicación React
RUN npm run build

# Etapa final: Servir la aplicación construida
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
