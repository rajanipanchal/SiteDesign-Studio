import React from 'react'
import abt1 from './Images/about1.jpeg'
import abt2 from './Images/about2.jpg'
import abt3 from './Images/about3.jpg'
import abt4 from './Images/about4.jpg'
import abt5 from './Images/about5.jpeg'


function AboutUs() {
  return (
    <>
      <div class="about">
            <div class="container text-center">
                <div class="about_heading">
                   <h1 className='pt-5'>About Us</h1>
                </div>
            </div>    
                <div class="container">
                   <div class="about1">
                    <p>SITEDESIGN + STUDIOS was established in 1997 in a university classroom.  The concept was to create a difference in the landscape industry.  To create a difference in the way we design, in the way that we build and most importantly to create a unique business model to benefit the client and the community.</p>
                    <img src={abt1} width="100%"/>
                   </div>

                   <div class="about2">
                    <p>SITEDESIGN is unique.  We are designers, we are landscape architects, we are skilled in construction and we are talented landscape care specialists.  But we are more than this.  We are a community of designers, of construction and care teams.  We share our knowledge and skills by collaborating together on a daily basis.  We are building a brand and a system that will allow us to be very competitive for all the varied landscape works we complete.</p>
                    <img src={abt2} width="100%"/>
                   </div>

                   <div class="about3">
                    <h2>Innovative & Inspiring Designers</h2>
                    <img src={abt3} width="100%"/>
                    <p>Our design philosophy is ‘to create places to live in and enjoy’. We believe places should be aesthetic, functional and sustainable. Our approach to design is process-orientated where the site  context and client requirements are analysed to reveal unique project characteristics that are reflected  in a creative design solution. Our ideas are thought-provoking and results focused so each and every client brief is delivered professionally and to the highest quality standards. We are passionate about design and work closely with our construction teams to deliver inspiring results.</p>
                   </div>

                   <div class="about4">
                    <h2>Our Business Model</h2>
                    <p>We pride ourselves on our very unique business model.  We are the pioneers in the landscape industry due to our business form, our business plan and our vision for the future.<br/> <br/>

                        In brief our model is based on local.  Local designer, local construction teams and local care teams. It is important to keep our business local as it means reduced overheads and reduce footprint.  Reducing overheads means we can be very competitive even though our design studios are run by the most experienced, knowledgable and skilful designers. By having local teams we are therefore reducing our carbon footprint and consequently, more accessible to our clients providing a better more personal service.</p>
                        <img src={abt4} width="100%"/>
                   </div>
                   <div class="about5">
                    <p>Our model is community.  It is based on a community of like minded designers and construction teams working in selected areas.  They know their area and understand the design and structural parameters of that area.  They have connections with council, developers and of course their community Members.</p>
                    <img src={abt5} width="100%"/>
                    <p>Currently SITEDESIGN + STUDIOS has six studios (Sydney East, Sydney South, Central Coast, Sydney North, South Coast and Denpasar) and will soon be expanding to have many more. Our ultimate goal is to entice the best designers and construction teams around Australia and NZ to work and push boundaries together.  To collaborate and share knowledge and skills under one brand.</p>
                   </div>
                 </div>
        </div></>
  )
}

export default AboutUs