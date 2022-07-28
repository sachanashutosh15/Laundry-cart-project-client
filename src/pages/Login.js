import React from 'react'
import "./Login.css";
import facebookLogo from "../Images/facebook.svg";
import instagramLogo from "../Images/instagram.svg";
import linkedinLogo from "../Images/linkedin.svg";
import padlockLogo from "../Images/padlock.svg";
function Login() {
  return (
    <>
      <section>
        <aside>
          <div className='combined-1'>
            <div className='laundry-service-heading-div'>
              <h1 className='laundry-service-heading-text'>Laundry <br />
                Services</h1>
            </div>
            <div className='doorstep-heading'>
              <h5>Doorstep Wash <span>&#38;</span> DryClean Service</h5>
            </div>
          </div>

          <div className='combined-2'>
            <div>
              <h8>Don't Have An Account</h8>
            </div>
            <div>
              <button className='register'>Register</button>
            </div>
          </div>
        </aside>

        <article>
          <div className='sign-in-text-div'>
            <h4>SIGN IN</h4>
          </div>
          <div className='side-border'>
            <div className='form-div'>
                  <div style={{marginBottom:"35px"}}>
                  <div className="mobile-email-text" style={{marginBottom:"-24px",fontSize:"11px"}}>Mobile/Email</div>
                  <br/>
                  <input
                    type="text"
                    placeholder='89 18 63 06 43'
                    style={{width:"400px"}}
                  />
                  </div>
                  
                  <div>
                    <div className='padlock-text'>
                      <div className="password-text" style={{marginBottom:"-2px",fontSize:"11px"}}>Password</div>  
                      {/* <div className='padlock-img'><img src={padlockLogo} alt="padlock" /></div> */}
                    </div>
                  <input
                    type="text"
                    placeholder='* * * *'
                    style={{width:"400px"}}
                  />
                  <br/>
                  <h6 className='forget-password-text'>Forget Password?</h6>
                  </div>
            </div>
          </div>
          <div className='sign-in-button-div' style={{marginTop:"80px"}}>
            <button>Sign In</button>
          </div>
        </article>
      </section>

  
      <div className='referral-div'>
        <h1 className='referral-msg-1'>Now Refer <span>&#38;</span> Earn <span>&#8377;</span>500 for every referral<span>&#42;</span></h1>
        <h6 className='referral-msg-2'><span>&#42;</span>Terms and conditions will be applied</h6>
      </div>

      
      <div className='disclaimer-div'>
        <div className="inside-disclaimer-div">
          <h4>ABOUT US</h4>
          <h6>Doorstep Wash <span>&#38;</span> DryClean Service</h6>
        </div>

        <div className="inside-disclaimer-div">
          <h4>HOME</h4>
          <h6>Sign In</h6>
          <h6>Register</h6>
        </div>

        <div className="inside-disclaimer-div">
          <h4>Pricing</h4>
        </div>

        <div className="inside-disclaimer-div">
          <h4>Career</h4>
          <h6>Blogs</h6>
          <h6>Create</h6>
        </div>

        <div className="inside-disclaimer-div">
          <h4>Contact</h4>
          <h6></h6>
        </div>

        <div className="inside-disclaimer-div">
          <h4>SOCIAL MEDIA</h4>
          <div className="inside-disclaimer-div-images" style={{display:"flex",justifyContent:"space-evenly"}}>
            <div className='logo-div'><img src={facebookLogo} alt="facebook"/></div>
            <div className='logo-div'><img src={instagramLogo} alt="instagram" /></div>
            <div className='logo-div'><img src={linkedinLogo} alt="linkedin" /></div>
          </div>
        </div>
      </div>


      <div className='footer'>
        <p style={{fontSize:"12px"}}>2021 <span>&#169;</span> Laundry</p>
      </div>
    </>
  )
}

export default Login;