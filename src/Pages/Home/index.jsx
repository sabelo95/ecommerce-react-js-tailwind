import { useState, useEffect } from "react"; // Importa useEffect
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context"


function Home() {
  const {items,setItems}=useContext(ShoppingCartContext)
  const [searchByTitle,setSearchByTitle]=useState() 
      
  
  useEffect(() => {
    // Filtrar los productos solo si hay un valor en searchByTitle
    if (searchByTitle) {
      const filtered = items.filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
      setItems(filtered);
      

    } else {
      // Si searchByTitle está vacío, realizar la llamada a la API para obtener todos los productos
      fetch("https://api.escuelajs.co/api/v1/products")
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((datos) => {
          setItems(datos);
        })
        .catch((error) => {
          console.error('Hubo un error:', error);
        });
    }
  }, [searchByTitle]);
  

  

  
  
  return (
    <Layout>
       <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
        </div>
        <input
         type="text" 
         placeholder="Search a product"
         className="rounded-lg boder border-black w-80 p-4 mb-4 "
         onChange={(event)=> setSearchByTitle(event.target.value)} />
      <div className='grid gap-2 grid-cols-4 w-full max-w-screen-lg'>
      { 
      
      items?.map((item)=>(<Card key={item.id} data={item}/>))
      }
      </div>
      
      <ProductDetail/>
      
    </Layout>
  );
}

export default Home;
 

