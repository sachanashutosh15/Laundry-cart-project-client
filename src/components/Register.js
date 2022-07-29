import React from 'react';
import "./Register.css";
import padlockLogo from "../Images/padlock.svg";


function Register({setToggle}) {
    return (
        <>
            <p>suraj</p>
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
                            <h6>Don't Have An Account</h6>
                        </div>
                        <div>
                            <button className='register' onClick={()=>setToggle(false)} >Register</button>
                        </div>
                    </div>
                </aside>

                <article>
                    <div className='sign-in-text-div'>
                        <h4>SIGN IN</h4>
                    </div>
                    <div className='side-border'>
                        <div className='form-div'>
                            <div style={{ marginBottom: "35px" }}>
                                <div className="mobile-email-text" style={{ marginBottom: "-24px", fontSize: "11px" }}>Mobile/Email</div>
                                <br />
                                <input
                                    type="text"
                                    placeholder='89 18 63 06 43'
                                    style={{ width: "400px" }}
                                />
                            </div>

                            <div>
                                <div className='padlock-text'>
                                    <div className="password-text" style={{ marginBottom: "-2px", fontSize: "11px" }}>Password</div>
                                    <div className='padlock-img'><img src={padlockLogo} alt="padlock" /></div>
                                </div>
                                <input
                                    type="text"
                                    placeholder='* * * *'
                                    style={{ width: "400px" }}
                                />
                                <br />
                                <h6 className='forget-password-text'>Forget Password?</h6>
                            </div>
                        </div>
                    </div>
                    <div className='sign-in-button-div' style={{ marginTop: "80px" }}>
                        <button>Sign In</button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Register