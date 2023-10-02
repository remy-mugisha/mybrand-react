import React from "react";
import { NavLink } from "react-router-dom";
// import Navbar from ''

function signuppage() {
    function myFunction (){
        var navbar = document.getElementById('nnav');
        navbar.classList.toggle('show'); 
    }
  return (
    <div>
      <nav>
        <div className="container">
             <NavLink to="/">
             <div className="logo">
             <a href="index.html">R</a>
             </div>
             </NavLink>
            {/* <a href="index.html">R</a> */}
          

          <ul id="nnav">
          <NavLink to="/">
            <li><a className="active">Home</a></li>
                </NavLink>
                <NavLink to="/">
                <li><a>Services</a></li>
                </NavLink>
                <NavLink to="/">
                <li><a>About us</a></li>
                </NavLink>
                <NavLink to="/">
                <li><a>Skills</a></li>
                </NavLink><NavLink to="/">
                <li><a>Blog</a></li>
                </NavLink>
                <NavLink to="/">
                <li><a>Contact</a></li>
                </NavLink>
            {/* <li>
              <a href="index.html" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li> */}
            <NavLink to="/loginpage">
              <li>
                <a className="login">Login</a>
              </li>
            </NavLink>
          </ul>
          <button id="menu-btn">
            <span className="material-icons-sharp" onClick={myFunction}>
              menu
            </span>
          </button>
          <button id="close-btn">
            <span className="material-icons-sharp">close</span>
          </button>
        </div>
      </nav>
      <div id="container-login">
        <div className="form">
          <form action="" className="signup-form">
            <h2 style={{color: "white", textAlign: "center",}}>Create Account</h2>
            <div className="container">
              <label for="username">User Name</label>
              <input
                type="text"
                placeholder="Enter User Name"
                id="username"
                name="username"
              />
              <span className="signName-error"></span>
              <br />
              <label for="email">Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                id="email"
                name="email"
              />
              {/*  <input type="email" placeholder="Enter Email" name="email" /> */}
              <span className="signEmail-error"></span>
              <br />
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                name="password"
              />
              <span className="signPassword-error"></span>

              <button id="submitRegister">Signup</button>
              <p>
                {" "}
                if you are registed{" "}
                <NavLink to="/loginpage">
                  <a style={{ color: "green" }}>Login</a>
                </NavLink>
              </p>
            </div>
          </form>
        </div>

        <footer>
          <div className="copyright">
            copyright &copy; myself
            <span className="material-icons-sharp">email</span>
            remymugisha64@gmail.com
            <span className="material-icons-sharp">call</span>
            +250788848185
          </div>
        </footer>
      </div>
    </div>
  );
}

export default signuppage;
