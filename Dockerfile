# Etapa de construcción (build)
FROM node:18 AS build

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente al contenedor
COPY . .

# Construye la aplicación Angular
RUN npm run build --prod

# Etapa de producción
FROM nginx:alpine

# Copia los archivos de la construcción de Angular a la carpeta de nginx
COPY --from=build /app/dist/ /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
