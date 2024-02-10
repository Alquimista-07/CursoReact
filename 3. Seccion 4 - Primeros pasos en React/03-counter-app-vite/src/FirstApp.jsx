// import { Fragment } from "react"

//* 37. Tarea - Crear un nuevo componente
export const FirstApp = () => {
  return (
    // NOTA: Recordemos que en React siempre debe existir un nodo padre que contenga a los demás elementos, que puede ser un div o un Fragment
    //       y el cual se representa con <Fragment><Fragment/> y se debe de importar o también recordemos que podemos usar solo su sinónimo que es
    //       <></> y el cual si no es necesario importarlo y básicamente de la misma forma representa el Fragment.
    //       Ahora estos Fragment los usamos cuando queremos colocar un bloque de elementos JSX que tenga no tengan estilos o que solo algunos de esos
    //       elementos tengan estilos css y no todos.
   
    // <Fragment>
    <>
        <h1>Ariadna</h1>
        <p>Spy un subtitulo</p>
    </>
    // </Fragment>
  )
}
