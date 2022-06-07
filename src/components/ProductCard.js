import React from 'react'
// import {Link} from 'react-router-dom'

function ProductCard(props){
    return(        
        <div className='max-w-sm'>
        {/* <Link to={`products/${props.product.id}`}> */}
            <div className='bg-red-400 border rounded-lg p-2 text-white mb-2 w-auto'>
                <h1>
                    {props.product.name}
                </h1>
                <div >
                    <img src={props.product.image} alt='img' className='w-full h-48 object-cover'/>
                </div>
                <div className='font-bold text-black pt-1'>
                    $ {props.product.price}
                </div>
                <div>
                    {props.product.description}￼
                </div>             
            </div>
        {/* </Link> */}
        </div>
    )
}

export default ProductCard