import { useState, useEffect } from "react"; // Importa useEffect
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context"


function Clothes() {
  const {items}=useContext(ShoppingCartContext)
  
  
  const filtered = items.filter((item) =>
  item.category.name==="Furniture");


return (
    <Layout>
       <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
        </div>
       
      <div className='grid gap-2 grid-cols-4 w-full max-w-screen-lg'>
      { 
      
      filtered.map((item)=>(<Card key={item.id} data={item}/>))
      }
      </div>
      
      <ProductDetail/>
      
    </Layout>
  );
}

export default Clothes;
 
  
  
    
    
   

   
  
  

  

  
  
  

