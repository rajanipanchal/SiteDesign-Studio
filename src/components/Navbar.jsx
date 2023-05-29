import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.jpg'
function Navbar() {
  return (
    <div class="nav_bar">
    <nav class="navbar navbar-expand-xl bg-light ">
      <div class="container">
        <a class="navbar-brand" href="/Home"><img src={logo} style={{width:"200px"}}/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav text-center">
            <li class="nav-item">
              <a class="nav-link active" href="/Home">Home</a>
            </li>
            <li class="nav-item">
              <a  class="nav-link" href="/Portfolio" target="_blank">portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Services" target="_blank">services</a>
            </li>
          
            <li class="nav-item">
              <a class="nav-link" href="/AboutUs" target="_blank">about</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar