import React from "react";
import { NavLink } from "react-router-dom";
// import Navbar from ''

function loginpage(){
    function myFunction (){
        var navbar = document.getElementById('nnav');
        navbar.classList.toggle('show'); 
    }
    return(
        <>
        <nav>
        <div className="container">
            <div className="logo">
                <a href="index.html">R</a>
            </div>
           
           <ul id="nnav">
            <NavLink to="/">
            <li><a className="active">Home</a></li>
                </NavLink>
               <li><a href="#services">Services</a></li>
               <li><a href="#about">About us</a></li>
               <li><a href="#skills">Skills</a></li>
               <li><a href="#blog">Blog</a></li>
               <li><a href="#contact">Contact</a></li>
            <NavLink
            to="/loginpage"
          >
           <li><a className="login">Login</a></li>
          </NavLink>
           </ul>
           <button id="menu-btn"><span className="material-icons-sharp" onClick={myFunction} >menu</span></button>
           <button id="close-btn"><span className="material-icons-sharp">close</span></button>
        </div>
    </nav>
  <div id="container-login">
    <form id="form_login" method="post" name="form" className="overlay">
        <h2 style={{
            textAlign: "center",
             color: "#fff",
        }
        }>Login</h2>
        <div className="container"> 
            <label for="username" >Username or Email </label> 
            <input type="text" id="input_email" name="email" placeholder="Username or Email" />
            {/* <p style="color: red; visibility: hidden;">Try again please</p>  */}
            <div className="email_error"></div>
            <label for="password" >Password </label> 
            <input type="password" id="input_password" name="password" placeholder="Password"  />
            <div className="password_error"></div>
            <div className="form_error"></div>
            {/* <p style="color: red; visibility: hidden;">Try again please</p>  */}
           <button type="submit" className="button">Login</button>
            Forgot <a href="#" style={{
                color: "rgb(15, 117, 34)",
            }}> password? </a> <br /><br />
            <NavLink to="/signuppage">
            <a style={{
                color: "rgb(15, 117, 34);",
             }}> Sign up </a> 
            </NavLink>
        </div> 
    </form> 
    
  </div>


    <footer>
    
        
          <div className="copyright">
            copyright &copy; myself
            <span className="material-icons-sharp">
                email
                </span>
                remymugisha64@gmail.com
              
            
                <span className="material-icons-sharp">
                    call
                    </span>
                   +250788848185
                    
             
          </div>
          
    </footer>
    </>

    )
}

export default loginpage