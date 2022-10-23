import React, { useContext } from "react";
import Signup from "../../features/signUp/Signup";
import Login from "../../features/Login/Login";
import { FaPeopleArrows } from 'react-icons/fa';
import { FaHiking} from 'react-icons/fa';
import { FaGlobeAfrica } from 'react-icons/fa';



const Home = () => {
  return (
    <div className="showCase container ">
      <img
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        className="shadow-4  "
        alt="..."
      />
      <div className=" ">
        <div class=" card-img-overlay text-center p-5 ">
          <div class="card-body  ">
            <h1 class="card-title text-bg-light bg-opacity-50  mb-4">
              Where People Meet
            </h1>
            <Login />
            <Signup />{" "}
          </div>
        </div>
      </div>



      
  <section className="page-section mt-5" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Why our service is so authentic !
</h2>
          <h3 className="section-subheading text-muted">We are here to make travel possible & fun for everyone.And we have your back till your trip ends!
</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary">
            <FaHiking size={150}/>

            </i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Become a TripLeader</h4>
          <p className="text-muted">Do you love planning the trip as much as traveling? Post your trip & let others request to be your travel buddy!</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary">
            <FaGlobeAfrica size={150}/>
            </i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Discover Places</h4>
          <p className="text-muted">Find new locations, learn about new cultures and get valuable tips for your journey.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary">
              <FaPeopleArrows size={150}/>
            </i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Real & Verified Travelers

</h4>
          <p className="text-muted">The trips are hosted by travelers just like you. They are as excited as you are to explore new places!</p>
        </div>
      </div>
    </div>
  </section>

    </div>

    
  );
};

export default Home;
