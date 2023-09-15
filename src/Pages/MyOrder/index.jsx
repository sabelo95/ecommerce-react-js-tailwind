import Layout from "../../Components/Layout"
import { useContext } from "react"
import { Link, useParams } from 'react-router-dom'
import OrderCard from '../../Components/OrderCard'
import { ShoppingCartContext } from "../../Context"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'



function MyOrder() {
  const {order}=useContext(ShoppingCartContext)
  const {index}=useParams()
  
  
  
 
    return (
      <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
          <Link to={'/my-orders'} className="absolute left-0">
          <ChevronLeftIcon   className='h-6 w-6 text-black hover:scale-90 transition-transform'/>
          </Link>
        
          <h1>My order </h1>
          
        </div>
      <div className='flex flex-col w-80'>
        {index ? (
        order[index].product.map((prod) => (
        <OrderCard
         key={prod.id}
        title={prod.title}
        imageUrl={prod.images}
        price={prod.price}
    />
  ))
) : (
        order?.slice(-1)[0]?.product.map((prod) => (
        <OrderCard
         key={prod.id}
        title={prod.title}
        imageUrl={prod.images}
        price={prod.price}
    />
  ))
) }

            
            </div>
    </Layout>
      
    )
  }
  
  export default MyOrder
  
