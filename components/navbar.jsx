import React from 'react'
const Navbar = () => {
  return (
    <nav id="nav">
       <ul>
         <li><a href="#intro" className="active">Кто мы?</a></li>
         <li><a href="#first">Кого мы ищем?</a></li>
         <li><a href="#second">Наши проекты</a></li>
         <li><a href="#cta">Бит в Байте</a></li>
      </ul>
    </nav>
  )
}
export default Navbar
