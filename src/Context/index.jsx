import { createContext,useState,useEffect} from "react"

 export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

    // para el product detail
    const [isProductDetailOpen,setIsProductDetailOpen]=useState(false)
    const openProductDetail = ()=> setIsProductDetailOpen(true)
    const closeProductDetail = ()=> setIsProductDetailOpen(false)

    // para el checkout side menu
    
    const [isCheckoutOpen,setIsCheckoutOpen]=useState(false)
    const openCheckout = ()=> setIsCheckoutOpen(true)
    const closeCheckout = ()=> setIsCheckoutOpen(false)


    
    // mostrar caracteristicas de mi producto en product detail
    const [productDetail,setProductDetail]=useState({})

    // agregando productos al carrito de compras
    const [cartProducts,setCartProducts]=useState([])
    
    
    const incrementar = ()=> {
        setCount( prev => prev + 1)
    }
    //shoppin car
    const [order,setOrder]=useState([])

    // traer objetos de api

    const [items, setItems] = useState([]);
    
  useEffect(() => {
    
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        setItems(datos);
        console.log(datos)
      })
      .catch((error) => {
        
        console.error('Hubo un error:', error);
      });
     
  }, []);

    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            incrementar,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productDetail,
            setProductDetail,
            cartProducts,
            setCartProducts,
            isCheckoutOpen,
            setIsCheckoutOpen,
            openCheckout,
            closeCheckout,
            order,
            setOrder,
             items,
             setItems}}
           
        >
            {children}
        </ShoppingCartContext.Provider>
        
    )
}


   