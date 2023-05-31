import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.jpg'
function Navbar() {
  return (
    <div class="nav_bar">
    <nav class="navbar navbar-expand-xl bg-light ">
      <div class="container-fluid">
        <Link class="navbar-brand" to={"/"}><img src={logo} style={{width:"200px"}}/></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav text-center">
            <li class="nav-item">
              <a class="nav-link active" to="/Home">Home</a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Portfolio" target="_blank">portfolio</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Services" target="_blank">services</Link>
            </li>
          
            <li class="nav-item">
              <Link class="nav-link" to="/AboutUs" target="_blank">about</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar