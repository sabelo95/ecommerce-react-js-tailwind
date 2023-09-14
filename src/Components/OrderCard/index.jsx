import { XMarkIcon } from '@heroicons/react/24/solid'


const OrderCard = ({id,title, imageUrl,price,deleteProduct}) => {
    let rennderXMarkIcon
    if (deleteProduct) {
        rennderXMarkIcon= <XMarkIcon onClick={()=> {deleteProduct()}}  className='h-6 w-6 text-black hover:scale-90 transition-transform'/>
    }
    return (
        <div className="flex justify-between items-center">
            
            <div className='flex items-center gap-2 m-1'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {rennderXMarkIcon}
            </div>
            
        </div>
    )
}

export default OrderCard