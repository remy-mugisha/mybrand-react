import logo from './logo.svg';
import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdCode } from 'react-icons/io';
import { MdDns } from 'react-icons/md';
import { GrLanguage } from 'react-icons/gr';
import {MdDevices } from 'react-icons/md'
import { MdIntegrationInstructions } from 'react-icons/md';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdDesignServices } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { NavLink } from "react-router-dom";

function App() {

function myFunction (){
  var navbar = document.getElementById('nnav');
        navbar.classList.toggle('show'); 
}

  return (
    <>
    <nav>
    <div className="container">
    <NavLink to="/">
             <div className="logo">
             <a href="index.html">R</a>
             </div>
             </NavLink>
        {/* <div className="logo">
            <a href="index.html">R</a>
        </div> */}
       <ul id="nnav">
            <li><a href="#index.html" className="active">Home</a></li>
        {/* <NavLink to="/"><li><a className="active">Home</a></li></NavLink> */}
           <li><a href="#services">Services</a></li>
           <li><a href="#about">About us</a></li>
           <li><a href="#skills">Skills</a></li>
           <li><a href="#blog">Blogs</a></li>
           <li><a href="#contact">Contact</a></li>
           <NavLink
            to="/loginpage"
          >
           <li><a className="login">Login</a></li>
          </NavLink>
       </ul>
       <button id="menu-btn"><span className="material-icons-sharp" onClick={myFunction} ><RxHamburgerMenu /></span></button>
       <button id="close-btn"><span className="material-icons-sharp">close</span></button>
    </div>
</nav>
<section className="landing">
    <div className="container ">
        <div className="socials">
        <a href="https://twitter.com/" target="_blank"><AiOutlineTwitter/></a>
        <a href="https://facebook.com/" target="_blank"><BsFacebook/></a>
        <a href="https://linkedin.com/" target="_blank"><AiFillLinkedin /></a>
        <a href="https://instagram.com/" target="_blank"><AiFillInstagram/></a>
        <a href="https://github.com/" target="_blank"><AiFillGithub/></a>
        </div>
        <div className="info">
            <h1>Web Designer & Developer </h1>
            <h3> I'm Remy Mugisha</h3>
            <p>am here to help you with all things you need that related to the web design.</p>
        <a href="#contact" className="btn btn-primary">Talking here</a>
    </div>
        <div className="profile-area">
            <div className="outer-circle">
                <span className="material-icons-sharp">
                <GrLanguage/>
                    </span>
                <span className="material-icons-sharp"><MdDns/></span>
                <span className="material-icons-sharp"><IoMdCode /></span>
                <span className="material-icons-sharp"><MdIntegrationInstructions/></span>
            </div>
            <div className="inner-circle">
                <img src={require('./assets/images/re1.jpg')} alt="re"/>
            </div>
    </div>
    </div>
</section>

<section className="services" id="services">
    <h1>Services</h1>
    <div className="container">
        <div className="service">
            <span className="material-icons-sharp"><MdDesignServices/></span>
            <h3>UI/UX Design</h3>
            <p>services help to create user-friendly interfaces that enable users to understand how to use complex technical products</p>
            
        </div>
        <div className="service">
            <span className="material-icons-sharp"><GrLanguage/></span>
            <h3>website & web app development</h3>
            <p>services help design, build, and evolve web-based software & web projects</p>
            
        </div>
        <div className="service">
            <span className="material-icons-sharp"><MdDevices/></span>
            <h3>mobile development</h3>
            <p>services help to creating software applications that run on a mobile device, </p>
            
        </div>
    </div>
</section>

<section className="about " id="about">
    <h1>About</h1>
    <div className="container">
         <div className="container-image1">
  <img src={require('./assets/images/212.jpg')} alt="2"/>
 </div>
 <div className="container-image">
  <img src={require('./assets/images/foto.jpg')} alt="foto"/>
</div>
        <div className="info">
            
<p> If you want to know more about me , you could download my CV  </p>      
<div className="read-more-content">
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quibusdam placeat error omnis eaque rem, ullam sit et hic sint minus, ipsum assumenda ducimus eius? Culpa excepturi nostrum tenetur repellendus, eligendi, delectus provident reiciendis possimus fuga maxime quod exercitationem ducimus quis quo quia libero vitae quisquam amet impedit dolor eaque consectetur voluptate tempora? Cupiditate dolorum quasi dignissimos quod doloribus quam non enim, libero dolore accusamus omnis quisquam beatae at. Optio blanditiis magni, modi velit officiis vel, perferendis illo aspernatur, est at amet quod sunt. Iure facere eaque amet accusantium voluptatem.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum neque consectetur atque sed, laudantium ad doloribus, sint alias quos soluta nisi libero ut ipsam id quod nihil. Similique dolorum tempora ratione dolor culpa laudantium neque totam ea quae corrupti!</p>

</div>
<a className="read-more">show more</a>
<a href="./image/cv.pdf" Download className="btn btn-primary"><i className="uil uil-download-alt"></i>Download cv</a>
  </div>
    </div>
</section>



<section className="skills" id="skills">
    <h1>Skills</h1>
    <div className="container">
        <div className="skill">
           <div className="head">
            <div className="left">
                <span className="material-icons-sharp">
                    language
                    </span>
                <h4>Web Design</h4>
            </div>
            <span className="material-icons-sharp">expand_more</span>
           </div>
           <div className="items">
             <div className="item">
                 <h5>html</h5>
                 <div className="progress-area">
                     <div className="progress-bar">
                         <div className="progress"></div>
                     </div>
                     <h5>95%</h5>
                 </div>
             </div>
             <div className="item">
                <h5>css</h5>
                <div className="progress-area">
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    <h5>75%</h5>
                </div>
            </div>
            <div className="item">
                <h5>js</h5>
                <div className="progress-area">
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    <h5>55%</h5>
                </div>
            </div>
           
           </div>
             </div>
             
    </div>
</section>


<section className="blog" id="blog">
    <h1>Blogs</h1>
    <div className="container">
        <div className="blogs">
            <img src={require("./assets/images/11.jpg")} alt="11" />
            <h3><a href="">Sharing idea in team is better</a></h3>
            <p>services help to create user-friendly interfaces that enable users to understand how to use complex technical products</p>
            
        </div>
        <div className="blogs">
            <img src={require('./assets/images/44.jpg')} alt="44"/>
            <h3><a href=""> Working in team is better</a></h3>
            <p>services help to create user-friendly interfaces that enable users to understand how to use complex technical products</p>
            
        </div>
        <div className="blogs">
            <img src={require('./assets/images/55.jpg')} alt="55"/>
            <h3><a href="">Be interested with coding</a></h3>
            <p>services help to create user-friendly interfaces that enable users to understand how to use complex technical products</p>
            
        </div>
    </div>
</section>

<section className="contact" id="contact">
        <div className="overlay">
            <div id="form" className="container">
                <h1>Contact Me</h1>
                <p>if you have anything to talk or aske for something you need such as to create your site, please type here</p>
               <form className="form-btn" >
                <label for="name"></label>
                   <input type="text" id="fullName" placeholder="Name" required/>
                
                <label for="email"></label>
                   <input type="email" id="email" placeholder="Email" required/>
               
                <label for="subject"></label>
                   <input type="text" id="subject" placeholder="Subject" required/>
                
                <label for="message"></label>
                   <textarea id="message" placeholder="Message" required></textarea>
                
                   <input type="submit" value="Submit" id="SubmitContact" className="btn btn-primary"/>
               </form>
            </div>
        </div>

    </section>

<footer>
      <div className="copyright">
         &copy; Developed By Mugisha Remy
        <span className="material-icons-sharp">
            email
            </span>
            mugisharemy2019@gmail.com
          <span className="material-icons-sharp">
                call
                </span>
               +250788848185
               <div className="socials">
               <a href="https://twitter.com/" target="_blank"><AiOutlineTwitter/></a>
               <a href="https://facebook.com/" target="_blank"><BsFacebook/></a>
               <a href="https://linkedin.com/" target="_blank"><AiFillLinkedin /></a>
               <a href="https://instagram.com/" target="_blank"><AiFillInstagram/></a>
               <a href="https://github.com/" target="_blank"><AiFillGithub/></a>
                </div>
      </div>
</footer>
      </>

  );
}

export default App;
