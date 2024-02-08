// NOTA: La documentación para crear el proyecto de react esta en:
//       https://create-react-app.dev/

// Async - Await

//----------------------------------
// Ejemplo sin usar async
//----------------------------------
// const getImagenPromesa = () => new Promise( resolve => resolve('https://kjksndbfkjsbdf.com'));
// getImagenPromesa().then( console.log );

//------------------------------
// Ejemplo usando async
// NOTA: Al colocar el async se transforma en una promesa, y no es necesario definirla como habíamos realizado antes
//------------------------------
const getImagen = async() => {
    // NOTA: El await nos ayuda a trabajar el cpodigo como si fuera síncrono y por lo tanto espera a que se resuelva y luego continue la ejecución
    //       ya que recordemos que primero se va a ejecutar todo el código síncrono y luego se ejecutaría el código asíncrono que son las promesas.
    //       Por lo tanto con el await obligamos a que se ejecute la promesa o mejor dicho a que espere que la promesa tenga un resultado para poder
    //       continuar.
    // OJO: Otra cosa es que para poder trabajar con el await tiene que estar dentro de una función async 
    try {
        const api_key = 'UtrMMcJU8DlQXJPAyGqsTb9vyHX5JePS';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const { data } = await respuesta.json();
    
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch(error) {
        // Manejo del error
        console.error(error);
    }

}

// Por lo tanto acá ya podemos usar el then, catch y finally como lo haríamos en una promesa definida como el anterior ejemplo
getImagen();