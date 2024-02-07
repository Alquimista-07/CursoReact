// NOTA: La documentación para crear el proyecto de react esta en:
//       https://create-react-app.dev/

// Fetch API
// Enlace documentación: https://developer.mozilla.org/es/docs/Web/API/Fetch_API
const api_key = 'UtrMMcJU8DlQXJPAyGqsTb9vyHX5JePS';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

// NOTA: A esto se le conoce como una promesa encadenada
peticion.then(resp => resp.json()
    .then(({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    })
)
.catch( console.warn );