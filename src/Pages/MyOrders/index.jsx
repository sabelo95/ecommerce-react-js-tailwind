import Layout from "../../Components/Layout"
import { Link } from 'react-router-dom'
import { useContext } from "react"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"




function MyOrders() {
  const {order}=useContext(ShoppingCartContext)
    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">My orders</h1>
        </div>
      
      {order.map((order, index)=> {
        return(
        <Link key={index} to={`/my-order/${index}`} >
        <OrdersCard 
        totalPrice={order.totalPrice}  
        totalProducts={order.totalProducts}/>
        </Link>
      )
      })}
      
      
    </Layout>
      
    )
  }
  
  export default MyOrders
