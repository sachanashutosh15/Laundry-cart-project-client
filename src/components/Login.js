import React,{useState} from 'react';
import "./Login.css";


import { Link,useNavigate } from 'react-router-dom';
import padlockLogo from "../Images/padlock.svg";
import M from "materialize-css";


function Login(props) {
    const value = false;
    const navigate = useNavigate();
    let check="1";
    const [emailormobile, setEmailOrMobile] = useState("");
    const [password, setPassword] = useState("");
    const buttonClickHandler = () => {
        props.passData(value);
    }
    const login = (e) => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailormobile)) {
            
            if(!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(emailormobile)){
                M.toast({ html: "enter valid email/mobile", classes: "#ff1744 red accent-3" })
                return;
            }
            check="0";
        }
        fetch("http://localhost:3001/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailormobile: emailormobile,
                password:password,
                check:check,
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log("suraj");
                console.log(data.error);
                if (data.error) {
                    console.log("singh");
                    M.toast({ html: data.error, classes: "#ff1744 red accent-3" })
                }
                else {
                    M.toast({ html: "Login Successfully", classes: "#2e7d32 green darken-3" })
                    navigate("/user/orders");
                    console.log("navigate to home page");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (

        <>
            <section>
                <aside style={{ height: "84vh" }}>
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
                            <button className='register' onClick={buttonClickHandler}>Register</button>
                        </div>
                    </div>
                </aside>

                <article style={{ height: "84vh" }}>
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
                                    value={emailormobile}
                                    onChange={(event) => setEmailOrMobile(event.target.value)}
                                    style={{ width: "400px" }}
                                />
                            </div>
                                <TogglePassword password={password} setPassword={setPassword}/>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='sign-in-button-div' style={{ marginTop: "80px" }}>
                        <button onClick={() => { login() }}>Sign In</button>
                    </div>
                </article>
            </section>
        </>

    )
}

const TogglePassword = ({password,setPassword}) => {
    const [toggle, setToggle] = useState(false);
    const ToggleHandler = () => {
        if (toggle === false) {
            setToggle(true);
            return;
        }
        setToggle(false);
    }
    return (
        <>
            <div className='padlock-text'>
                <div className="password-text" style={{ marginBottom: "-2px", fontSize: "11px" }}>Password</div>
                <div className='padlock-img-div' onClick={ToggleHandler}><img className="padlock-img" src={padlockLogo} alt="padlock" /></div>
            </div>
            <input
                type={toggle===false?"password":"text"}
                placeholder='* * * *'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                style={{ width: "400px" }}
            />
            <br />
            <h6 className='forget-password-text'>Forget Password?</h6>
        </>
    );
}





export default Login;