import {  PlusIcon } from '@heroicons/react/24/solid'
import {  CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { useState } from 'react'
import { useEffect } from 'react'


const Card = ({data})=> {
    const {incrementar,openProductDetail,isProductDetailOpen,setProductDetail,setCartProducts,cartProducts}=useContext(ShoppingCartContext)
    const addProductDetail = ()=> setProductDetail(data)
    const [added,setAddded]=useState(false)

    const productAdded = (id) => {
      return cartProducts.some((prod) => prod.id === id);
      
    };
    
    useEffect(() => {
        setAddded(productAdded(data.id))
        
      }, [, cartProducts]); 
    
    
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        onClick={()=> {
            isProductDetailOpen? null : openProductDetail();
            addProductDetail()} }>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px3 py-0.5'>{data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.images[0]} alt="headphones" />
                <div className={`absolute top-0 right-0 flex justify-center items-center ${added ? 'bg-black' : 'bg-white'}  w-7 h-7 rounded-full m-2 p-2`}>
                    <PlusIcon onClick={ ()=> {/* incrementar() */; setCartProducts([...cartProducts , data]);setAddded(true)}} className={`h-6 w-6 text-black ${added ? 'hidden' : ''}`}/>
                    <CheckIcon className={`h-6 w-6  text-white  ${added ? '' : 'hidden'}`}/>
                    </div>
                    
            </figure>
            <p className='flex justify-between'>
            
                <span className='text-sm font-light'>{data.title}</span>
                <span className='text-lg font-medium'>{data.price}$</span>
            </p>
        </div>
    )
}

export default Card

