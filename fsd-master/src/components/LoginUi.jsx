import './main.css';
import profile from "./../image/cricklogo.jpg";
import email from "./../image/maillogo.png";
import pass from "./../image/passlogo.png";
function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;