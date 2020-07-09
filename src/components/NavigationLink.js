import React from 'react'
import {Link} from 'react-router-dom'

function NavigationLink(props){
    return (
        <div>
            <ul>
                <li>
                    <Link to='/' 
                        className='text-blue-500' 
                        onClick={props.closeMenu}
                        >
                        Home
                    </Link> 
                </li>                
                <li>
                    <Link to='/about' 
                        className='text-blue-500' 
                        onClick={props.closeMenu}
                        >
                        About
                    </Link>  
                </li>
            </ul>
        </div>
    )
}

export default NavigationLink