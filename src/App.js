import React from 'react'
import Navbar from './component/Navbar'

function myApp() {
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">

            <img src="img/Persija_Jakarta_logo.png" alt="Persija_Jakarta_logo" height="37px" width="30px">
            <a class="navbar-brand" href="#">Persija Jakarta </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-5 ">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">club</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Galeri</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default myApp;