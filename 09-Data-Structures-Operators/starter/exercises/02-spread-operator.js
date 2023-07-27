let pelicula = {
  titulo: 'El Padrino',
  director: 'Francis Ford Coppola',
  year: 1972,
  genero: 'Drama',
  actores: ['Marlon Brando', 'Al Pacino', 'James Caan'],
};



// 1. Crea un nuevo objeto con la misma información que el objeto pelicula utilizando el operador spread.
const pelicula1 = { ...pelicula };

//2. Agrega una nueva propiedad "duracion" con un valor de 175 al objeto pelicula utilizando el operador spread.
const pelicula2 = { ...pelicula, duracion: 175 };

//3. Crea una nueva variable llamada actoresExtra con los siguientes actores: "Robert Duvall" y "Diane Keaton". Crea un nuevo objeto que combine los actores de pelicula y actoresExtra utilizando el operador spread.
const actoresExtra = ["Robert Duvall", "Diane Keaton"];
const pelicula3 = {...pelicula,actores: [...pelicula.actores,...actoresExtra]}

//4. Crea una nueva variable llamada pelicula4 con la misma información que pelicula pero con el año actualizado al año actual utilizando el operador spread.
const pelicula4 = {...pelicula,year: new Date().getFullYear()};

//5.Crea una función llamada imprimirActores que tome como parámetro un objeto con una propiedad "actores" que sea un arreglo. La función debe imprimir en la consola cada actor en una línea separada. Utiliza el operador spread para pasar la propiedad "actores" del objeto pelicula como parámetro a la función imprimirActores.
function imprimirActores({actores}){
  actores.map(actor => console.log(actor))
}
// imprimirActores({...pelicula})

//6. Crea una nueva variable llamada pelicula6 que sea una copia del objeto pelicula pero sin la propiedad "genero". Utiliza el operador spread para crear este nuevo objeto.
const {genero,...pelicula6} = pelicula

//7. Crea una función llamada longitudActores que tome como parámetro un objeto con una propiedad "actores" que sea un arreglo. La función debe calcular la longitud del arreglo y retornarla. Utiliza el operador spread para pasar la propiedad "actores" del objeto pelicula como parámetro a la función longitudActores.

function longitudActores({actores = []}){
  return actores.length
}


