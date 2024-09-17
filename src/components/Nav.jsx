import React from 'react'
import {navigation} from '../data'
import {Link} from 'react-scroll'; 



const Nav = () => {
  return (
   <nav>
    <ul className='flex space-x-8 capitalize text-[15px]'>
      {navigation.map((item,index)=> {
        return(
          <li className='text-white hover:text-accent cursor-pointer'
          >
            <Link
            to={item.href}
            activeClass='active' 
            spy={true}
            smooth={true} 
            duration={500}
             offset={-70}
            className='transtion-all duration-300'
            >
            {item.name}
              </Link>
          </li>
        )
      })}
    </ul>
   </nav>
  )
}

export default Nav
