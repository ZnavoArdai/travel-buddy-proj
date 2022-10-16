import React from 'react'

const About = () => {
  return (
    <div className='showCase '>
<div class="card bg-dark text-white mb-5">
   <img  class="card-img " src="images/homeImage/about.jpg" alt="Example"/>
   <div class="card-img-overlay d-flex">
     <div class="abouttitile align-self-center mx-auto"  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
      <h1 className=''>About us</h1>
      <p>TravelBUDDY is the community of travelers that like to discover new places and meet new people.</p>
     </div>  
   </div>
</div>
<div class="text-center">

  <div class="card-body mt-5 mb-5 ">
    <h5 class="card-title">TravelBUDDY</h5>
    <p class="card-text">
    JoinMyTrip is here to empower and connect both sides to share their travel interests, costs and unforgettable memories. We inspire travelers to live the experience of their lives and they inspire others to do the same. We invite them to join our community and they invite others to join their unique trips.

We invite you to join us on our mission and come back with new friends from around the world. Join our trip!
    </p>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>

<div class="row container-fluid ">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
    </div>
  )
}

export default About