## Proyecto de Aprendizaje: Backend con Express.js
Este es un proyecto de aprendizaje desarrollado con Express.js y PostgreSQL como parte de un ejercicio para profundizar en la creación de APIs, manejo de autenticación con JWT, y configuración de un entorno de desarrollo profesional con ESLint y Prettier. El proyecto incluye un sistema básico de autenticación de usuarios con registro y login.

## Características
Autenticación de Usuarios: Implementada usando JWT (JSON Web Tokens).
Base de Datos: Se utiliza PostgreSQL para la persistencia de datos, con el ORM Sequelize para la gestión de modelos.
Estructura de Proyecto: Proyecto modular y organizado en controladores, rutas y modelos.
Pruebas Unitarias: Se incluyeron pruebas básicas con Mocha y Chai.
Herramientas de Desarrollo: Configuración de ESLint y Prettier para mantener un código limpio y consistente.

## Requisitos Previos
Node.js (versión 14 o superior)
npm (versión 6 o superior)
PostgreSQL (instalado y corriendo)

##  Configuración Inicial
Clonar el repositorio:
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio

Instalar dependencias:
npm install

Configurar variables de entorno:
Crea un archivo .env en la raíz del proyecto y define las siguientes variables:
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nombre_de_tu_base_de_datos
DB_USER=tu_usuario_de_postgres
DB_PASSWORD=tu_contraseña_de_postgres
JWT_SECRET=tu_secreto_jwt
Configurar la base de datos:

Ejecuta las migraciones para configurar la base de datos:
npx sequelize-cli db:migrate

## Ejecución del Proyecto
Modo de Desarrollo:
npm run dev
Esto levantará el servidor en modo de desarrollo usando nodemon.

Modo de Producción:
npm start

## Estructura del Proyecto
models/: Contiene los modelos de datos definidos con Sequelize.
routes/: Define las rutas de la API, como /api/v1/users.
controllers/: Contiene la lógica de negocio asociada a cada ruta.
middlewares/: Middlewares como la autenticación de JWT.
config/: Configuración de la base de datos.

## Funcionalidades Clave
Registro de Usuarios: Ruta /api/v1/users/register para registrar nuevos usuarios.
Login de Usuarios: Ruta /api/v1/users/login para autenticar usuarios y generar un token JWT.
Protección de Rutas: Uso de middleware para proteger rutas con JWT.

## Pruebas
Para ejecutar las pruebas, usa:
npm test

## Notas
Este proyecto fue creado como un ejercicio de aprendizaje y experimentación con Express.js. No está diseñado para ser utilizado en producción sin realizar ajustes de seguridad y optimización.
