import React from 'react'
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
import image4 from '../Images/image5.jpg'
import image5 from '../Images/image4.jpeg'
import image6 from '../Images/image6.jpg'


function Service() {
  return (
    <>
      <div id="services">
        <div class="contant4">
          <div class="container">
            <div class="services">
              <h1>our services</h1>
            </div>
          </div>
          <div class="box1">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="images">
                    <div class="image1">
                      <img src={image1} alt="" width="90%" />
                      <a href=""target="_blank
                          "> landscape Architecture </a><br />
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="images">
                    <div class="image2">
                      <img src={image2} alt="" width="90%" />
                      <a href="" target="_blank">Landscape Construction </a><br />
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="images">
                    <div class="image3">
                      <img src={image3} alt="" width="90%" />
                      <a href="" target="_blank ">Pool construction</a><br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div id="portfolio">
        <div class="contant5">
          <div class="container">
            <div class="latest projects">
              <h1>latest projects</h1>
            </div>
          </div>
          <div class="box2">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="images">
                    <div class="image4">
                      <img src={image4} alt="" width="90%" />
                      <a href="" target="_blank ">Gardens and Surrounds</a>
                      <br />
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="images">
                    <div class="image5">
                      <img src={image5} alt="" width="90%" />
                      <a href="" target="_blank ">Orange Regional Museum</a>
                      <br />
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="images">
                    <div class="image6">
                      <img src={image6} alt="" width="90%" />
                      <a href="" target="_blank ">Entertainment Area</a>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div></>
  )
}

export default Service