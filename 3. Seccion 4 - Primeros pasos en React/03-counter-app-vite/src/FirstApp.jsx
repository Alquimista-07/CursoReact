// import { Fragment } from "react"

//* 37. Tarea - Crear un nuevo componente

// NOTA: Una recomendación es que si tenemos una variable que no es alterada en el functional component
//       y no tiene relación con ningún hook, no es recomendado crearlo dentro del functional component
//       y lo sacariamos de él, pero esto no indica que lo estemos creando en el scope golbal ni nada 
//       parecido ya que como tal pertenece solo a este componente y esta encapsulado.
//       Una ventaja de esto es que al no ser cambiado y estar fuera del functional component React no va 
//       a renderizarlo nuevamente, haciendo que los tiempos de carga y demás se centren únicamente en lo 
//       importante que es lo que unicamente cambie en el componente y necesite ser redibujado.
//       OJOOOOOO Algo importante es que nosotros no podemos mandar objetos directamente para que sean dibujados
//       ya que esto nos va a causar un error indicando que no es un React child. Por lo tanto para trabajar con el 
//       objeto deberíamos mandar la propiedad con notación de punto y trabajarlo como un arreglo.
//       Ahora si en verdad necesitaramos imprimir el objeto lo podemos hacer evaluando la expresión de React usando
//       el JSON.stringify...
const newMessage = {
    message: 'Hola Mundo',
    title: 'Ariadna',
};

// const getResult = async() => { // Esto da error ver comentario más abajo del ¿Por qué?
const getResult = (a, b) => {
    return a + b;
}

export const FirstApp = () => {

  return (
    // NOTA: Recordemos que en React siempre debe existir un nodo padre que contenga a los demás elementos, que puede ser un div o un Fragment
    //       y el cual se representa con <Fragment><Fragment/> y se debe de importar o también recordemos que podemos usar solo su sinónimo que es
    //       <></> y el cual si no es necesario importarlo y básicamente de la misma forma representa el Fragment.
    //       Ahora estos Fragment los usamos cuando queremos colocar un bloque de elementos JSX que tenga no tengan estilos o que solo algunos de esos
    //       elementos tengan estilos css y no todos.
   
    // <Fragment>
    <>
        <h1>{ newMessage.title }</h1>
        <code>{ JSON.stringify(newMessage) }</code>
        <p>Spy un subtitulo</p>

        {/* Acá lo que le estamos diciendo es que cuando llegue a renderizar esto, salta o ve a la función y renderiza el producto de la función
            el cual corresponde al valor de retorno que devuelve la función. OJO esto no quiere decir que renderice la función sino que renderice 
            el producto
            Otra cosa que debemos tener cuidado es que acá no podemos mandar una promesa (Async) ya que básicamente una promesa es un objeto y ese
            objeto es lo que se trataría de serializar o imprimir lo cual como vimos antes nos da un error e incluso podría cusar errores de dependecia
            cíclicas y por eso React no lo hace.
        */}
        <h1>{ getResult(4,3) }</h1>
    </>
    // </Fragment>
  )
}
