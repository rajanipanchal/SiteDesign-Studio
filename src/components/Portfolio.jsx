import React from 'react'
import portfolio1 from '../Images/portfolio1.jpeg'
import portfolio2 from '../Images/portfolio2.jpg'
import portfolio3 from '../Images/portfolio3.jpg'
import portfolio4 from '../Images/portfolio4.jpg'
import portfolio5 from '../Images/portfolio5.jpg'
import portfolio6 from '../Images/portfolio6.jpg'



function Portfolio() {
  return (
   <>
   <div class="portfolio_sitedesign">
      <div class="portfolio_contant">
          <div class="portfolio_heading">
             <h1>portfolio</h1>
          </div>
      </div>
    </div>

    <div class="portfolio_images">
      <div class="container">
        <div class="row">
        
           <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="portfolio1">
                <img src={portfolio1} />
                <h1>Residential</h1>
              </div>
           </div>

           <div class="col-lg-4 col-md-12 col-sm-12">
             <div class="portfolio2">
              <img src={portfolio2} />
              <h1>Pools and Cabanas</h1>
             </div>
           </div>

           <div class="col-lg-4 col-md-12 col-sm-12">
             <div class="portfolio3">
                <img src={portfolio3} />
                <h1>Units and Townhouses</h1>
             </div>
            </div>

            <div class="col-lg-4 col-md-12 col-sm-12">
               <div class="poerfolio4">
                <img src={portfolio4} />
                <h1>Commercial and Public Space</h1>
               </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="portfolio5">
                 <img src={portfolio5}/>
                 <h1>Hospitality and Tourism</h1>
                </div>
             </div>
             <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="portfolio6">
                 <img src={portfolio6} />
                 <h1>Health and Education</h1>
                </div>
             </div>
             
             
        </div>
     </div>
    </div></>
  )
}

export default Portfolio