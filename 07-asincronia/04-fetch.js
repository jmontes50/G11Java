fetch("https://jsonplaceholder.typicode.com/posts") //GET
.then((rpta) => {
  console.log(rpta) //con cabeceras y más propiedades pero no data
  return rpta.json(); //encadenamiento de promesas ya que json() me retorna una nueva promesa
})
.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log(err)
});

const getPosts = async () => {
  try {
    const rpta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await rpta.json();
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}
getPosts();
