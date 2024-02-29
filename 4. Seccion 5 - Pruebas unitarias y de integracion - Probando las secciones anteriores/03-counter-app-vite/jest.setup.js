// Esto es código que se va a ejecutar tan pronto arrancan las pruebas

// Polyfills
// Instalacion e importación de un paquete para que en caso de que la versión de node previa a la 18 no tenga el fetchAPI
// por defecto y de error yarn add -D whatwg-fetch o en caso de usar npm usamos npm install -D whatwg-fetch
import 'whatwg-fetch';