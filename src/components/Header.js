import React from 'react'
import Navigation from './Navigation'

function Header(){
    return (
        <div className='p-3 flex justify-between border-b'>
            <span className='font-bold'>Bloge</span>
            <Navigation />
        </div>
    )
}

export default Header