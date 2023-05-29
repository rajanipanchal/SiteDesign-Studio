import React from 'react'
import logo1 from '../Images/logo1.jpg'
import logo2 from '../Images/logo2.png'
import logo3 from '../Images/logo3.png'

function Contect() {
  return (
   <>
         <div class="contant8">
        <div class="container">
          <div class="heading2">
            <h1>Your dream space awaits.</h1><button type="button">talk to us today--</button>
          </div>
        </div>
      </div>
      <div id="contact">
        <div class="contant9">
          <div class="container">
            <div class="heading3">
              <h4>SIDEDESIGN + STUDIOS1300 22 44 55INFO@SDSTUDIOS.COM.AU</h4>
            </div>
          </div>
        </div>
        <div class="contant10">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="box1">
                  <p>SITEDESIGN + STUDIOS provides end-to-end residential and  commercial landscape architecture and construction  services. From design and planning through to construction and maintenance, our studios located throughout NSW manage your entire project.</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="box2">
                  <h5>Company </h5>
                  <ul class="list-item2">
                    <li class="nav-item">
                      <a class="nav-link" href="./portfolio.html" target="_blank">portfolio</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./services.html" target="_blank">services</a>
                    </li>



                    <li class="nav-item">
                      <a class="nav-link" href="./about.html" target="_blank">about</a>
                    </li>
                  </ul>

                  <h5>contact</h5>
                  <ul class="list-item2">
                    <li>call 1300 22 44 55</li>
                    <li>Obtain a Quote </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="box3">
                  <h1>Connect with us</h1>
                  <form>
                    <input type="text" placeholder="Email Address" /><button type="button" class="btn btn-secondary"> sign up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="line"></div>

        <div class="contant11">
          <h4>pround members of</h4>
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="logos">
                  <img src={logo1} alt="" width="200px" />
                </div>
              </div>

              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="logos">
                  <img src={logo2} alt="" width="200px" />
                </div>
              </div>

              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="logos">
                  <img src={logo3} alt="" width="200px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   </>
  )
}

export default Contect