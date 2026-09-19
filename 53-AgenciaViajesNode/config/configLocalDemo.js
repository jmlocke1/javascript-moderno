// Crea un fichero llamado configLocal.js, copia el objeto completo y sustituye los valores de prueba por los reales

const config = {
    databaseUser: 'Usuario MYSQL',
    databasePassword: 'password',
    databaseName: 'Nombre BD',
    host: '127.0.0.1',
    port: '3307', 
    portDB: '3306' // El puerto de la base de datos debe ser distinto que el del servidor
}


export default config;