import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import {useCallApi} from '../Hooks/ApiCall'

function Home(){
    const url ='https://5f02d03a9e41230016d4308a.mockapi.io/api/products'    
    let products = useCallApi(url)
    
    let content = null

    if(products.error){
        content = <p>
            Product not available
        </p>
    }
    
    if(products.loading){
        content = <Loader />
    }

    if(products.data){
        content=(
        products.data.map((product, key) =>
                <Link to={`products/${product.id}`}>
                    <ProductCard product={product}/>
                </Link>
        )
        )
    }
    return (
        <div className=''>
            {content}

        </div>
    )
}

export default Home