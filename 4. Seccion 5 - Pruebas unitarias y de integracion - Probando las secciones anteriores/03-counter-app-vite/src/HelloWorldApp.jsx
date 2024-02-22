// NOTA: EL snippet para crear el functional component de forma rápida es rafc
//       este nos lo crea con la importación de react pero esta ya no es necsaria
//       por lo tanto la podemos eliminar

// NOTA: Usualmente todo en react comienza con un componente o un functional componenet
//       y es el punto de entrada de la aplicación y esos componentes no son más que una 
//       función.
//       Otra cosa es que podemos trabajar con clases pero estas ya no es muy recomendado usarlas
//       aunque aún se pueda trabajar con ellas, lo recomendado es trabar con functional components
export const HelloWorldApp = () => {
    // Este return en pocas palabras es como si realizaramos en JS lo siguiente: 
    // document.createElement... pero de una forma más sencilla y eleganta
    return (
        <h1>Hello World App</h1>
    );
}

// NOTA: Otra cosa es que podemos hace la exportación por defecto
//       y al importarlo lo podríamos importar incliso con otro nombre
//       pero eso ya es tema de gustos y en lo personal prefiero hacer
//       exportaciones individuales
/*
function App(){
    return (<h1>Hola Mundo!</h1>);
}

export default App;
*/