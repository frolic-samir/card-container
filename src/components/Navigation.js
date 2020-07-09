import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import './NavigationLink'
import NavigationLink from './NavigationLink'

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)
    const masktransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menutransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform:'translateX(-100%)' },
        enter: { opacity: 1, transform:'translateX(0%)' },
        leave: { opacity: 0, transform:'translateX(-100%)' },
    })

    return(
        <div>
            <FontAwesomeIcon 
                icon={faBars}
                className='text-xl'
                onClick={()=>setShowMenu(!showMenu)}
            />
             {
                masktransitions.map(({ item, key, props }) =>
                item &&
                <animated.div 
                    key={key} 
                    style={props}
                    className='fixed right-0 top-0 bg-black h-full w-full z-50 opacity-25'
                    onClick={()=>setShowMenu(false)}
                    >
                    </animated.div>
                )
            }
            {
                menutransitions.map(({ item, key, props }) =>
                item &&
                <animated.div 
                    key={key} 
                    style={props}
                    className='fixed top-0 left-0 bg-white h-full w-4/5 z-50 p-3'
                    >
                        <NavigationLink closeMenu={()=>setShowMenu(false)}/>
                    </animated.div>
                )
            }
        </div>
    )
}

export default Navigation