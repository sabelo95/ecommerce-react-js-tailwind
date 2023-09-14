import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../OrderCard'
import { useEffect } from 'react'
import { totalPrice } from '../Utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const {isCheckoutOpen,closeCheckout,cartProducts,setCartProducts,setCount,order,setOrder}=useContext(ShoppingCartContext)
    const deleteProduct = (id)=> {
      const newArray=  cartProducts.filter((prod)=> prod.id !== id)
      setCartProducts(newArray)
    }
   

    const handleCheckout = ()=> {
        const orderToAdd = {
            date:'01.02.23',
            product:cartProducts,
            totalProducts: cartProducts.length,
            totalPrice:totalPrice(cartProducts)
        }
        setOrder([...order,orderToAdd])
         setCartProducts([])
        
    }

    
    

    useEffect(() => {
        setCount(cartProducts.length)
        
      }, [cartProducts]);
    
        return (
        <aside className={`checkout-side-menu  flex flex-col fixed bg-white right-0 border border-black rounded-lg ${isCheckoutOpen ? '' : 'hidden'}`}>

            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-lx'>My order</h2>
                <XMarkIcon  className='h-6 w-6 text-black hover:scale-90 transition-transform'
                onClick={()=> closeCheckout()}/>
            </div>
            <div className='overflow-y-auto max-h-637 flex-1'>
            {cartProducts.map((prod)=>(
                <OrderCard 
                deleteProduct={()=>deleteProduct(prod.id)}
                key={prod.id}
                title={prod.title}
                imageUrl={prod.images}
                price={prod.price}
                setCount={setCount}
            />
            ))}
            
            </div>
            <div className='px-6 mb-2'>
            <p className='flex justify-between items-center'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
            </p>
            <Link to={'/my-orders/last'}>
            <button className='w-full bg-black py-3 text-white rounded-lg' onClick={()=>handleCheckout()}>CheckOut</button>
            </Link>
            
            </div>
        </aside>
    )
}
export default CheckoutSideMenu