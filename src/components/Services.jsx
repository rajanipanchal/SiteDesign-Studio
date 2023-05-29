import React from 'react'
import img1 from '../Images/image1.jpg'
import img2 from '../Images/image2.jpg'
import img3 from '../Images/image3.jpg'

function Services() {
    return (
        <>

            <div class="services_sitedesign">
                <div class="services_contant">
                    <div class="services_heading">
                        <h1>Services</h1>
                    </div>
                </div>
            </div>
            <div class="services_heading1">
                <h3>More than just design</h3>
                <p>SITE<strong>DESIGN</strong> + STUDIOS offers full end-to-end landscape services from<br /> planning and design, through to construction and maintenance. We work<br /> with contractors and council planning to ensure your project is well<br />-managed and a success.</p>
            </div>
            <div class="services_sitedesign1">
                <div class="box1">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="images">
                                    <div class="image1">
                                        <img src={img1} width="90%" />
                                        <a href="./landscape architecture.html" target="_blank
                      "> landscape Architecture  </a><br />
                                        <p>Our award-winning Landscape Architects are skilled in residential and commercial projects of all types. We do all approval plans, design plans, consultation, and construction.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="images">
                                    <div class="image2">
                                        <img src={img2} width="90%" />
                                        <a href="./Landscape Construction.html" target="_blank">Landscape Construction </a><br/>
                                            <p>Our SD Construction teams are fully licensed and highly skilled craftsman with extensive construction experience. Our clients are kept fully informed on the progress throughout the construction.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="images">
                                    <div class="image3">
                                        <img src={img3} width="90%" />
                                        <a href="./Pool construction.html" target="_blank ">Pool construction</a><br />
                                        <p>SITE<b />DESIGN <b />+ STUDIOS are Sydney’s most innovative pool designers and consultants. We have been designing and building pools for over 15 years.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services