import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './wrapper.jsx'
import Header from './header.jsx'
import Navbar from './navbar.jsx'
import Sections from './sectionsBuilder.jsx'

const contents = [<Header key='header' />, <Navbar key="navbar" />, <Sections key="sections" />]


ReactDOM.render(
  <Wrapper childs={ contents }/>,
  document.getElementById('mainPage')
)
