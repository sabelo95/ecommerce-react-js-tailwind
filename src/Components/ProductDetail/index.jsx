import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"


import './styles.css'

const ProductDetail = () => {
    const {incrementar,openProductDetail,closeProductDetail,isProductDetailOpen,productDetail}=useContext(ShoppingCartContext)
    
        return (
        <aside className={`product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg ${isProductDetailOpen ? '' : 'hidden'}`}>

            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-lx'>Detail</h2>
                <XMarkIcon  className='h-6 w-6 text-black hover:scale-90 transition-transform'
                onClick={()=> closeProductDetail()}/>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' 
                src={productDetail.images} 
                alt={productDetail.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${productDetail.price}</span>
                <span className='font-medium text-md'>{productDetail.title}</span>
                <span className='font-light text-md'>{productDetail.description}</span>
            </p>
        </aside>
    )
}
export default ProductDetail