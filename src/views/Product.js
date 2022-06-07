import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import {useCallApi} from '../Hooks/ApiCall'

function Product(){
    const {id} = useParams()
    const url =`https://5f02d03a9e41230016d4308a.mockapi.io/api/products/${id}`
    let product = useCallApi(url)
    
    let content = null

    if(product.error){
        content = <p>
            Product not available
        </p>
    }

    
    if(product.data){
        content=
        <ProductCard product={product.data}/>
        // <div className='bg-red-400 border rounded-lg p-2 text-white mb-2 max-w-md'>
        //     <h1>
        //         {product.data.name}
        //     </h1>
        //     <div >
        //         <img src={`${product.data.image}`} alt='img' className='w-full h-48 object-cover'/>
        //     </div>
        //     <div className='font-bold text-black pt-1'>
        //         $ {product.data.price}
        //     </div>
        //     <div>
        //         {product.data.description}
        //     </div>             
        // </div> 
    }

    if(product.loading){
        content = <Loader />
    }
    
    return (
        <div>
            {content}
        </div>
    )
}

export default Product
