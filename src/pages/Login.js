import React from 'react'
import "./Login.css";
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
        <article>article</article>
      </section>
    </>
  )
}

export default Login;