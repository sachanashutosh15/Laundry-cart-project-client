import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
function Login(props) {
    const value = false;
    const [errorMsg, setErrorMsg] = useState(false);
    const [dataError1, setDataError1] = useState("");
    const [dataError2, setDataError2] = useState(false);
    const [colorChanger, setColorChanger] = useState(null);
    const navigate = useNavigate();
    const [emailormobile, setEmailOrMobile] = useState("");
    const [data, setData] = useState([]);
    const [password, setPassword] = useState("");
    const buttonClickHandler = () => {
        props.passData(value);
    }
    const login = (e) => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailormobile)) {
            if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(emailormobile)) {
                console.log("hello suraj");
                setErrorMsg(true);
                return;
            }
        }
        fetch("https://laundrycart--server.herokuapp.com/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailormobile: emailormobile,
                password: password,
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.accessToken)
                setData("thisis the" + data);
                if (data.error) {
                    setDataError1(data.error);
                    setColorChanger(0);
                    setDataError2(true);
                    setTimeout(() => {
                        setDataError2(false);
                    }, 3000)
                }
                else {
                    localStorage.setItem("token", data.accessToken)
                    localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
                    setColorChanger(1);
                    setDataError1(data.result);
                    setDataError2(true);
                    setTimeout(() => {
                        setDataError2(false);
                        navigate("/user/orders");
                    }, 3000)
                    console.log("navigate to login page");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <div className='main-section-1'>
                <div className='section-div-1'>
                    <div className='inner-div-1'>
                        <div className='laundry-text-1'>
                            <h1 >Laundry <br />
                                Services</h1>
                        </div>
                        <div className='door-step-text-1'><h5>Doorstep Wash <span>&#38;</span> DryClean Service</h5></div>
                        <div className='do-not-account-text'><h6>Don't Have An Account</h6></div>
                        <div >
                            <button className='register-btn-1' onClick={buttonClickHandler}>Register</button>
                        </div>
                    </div>
                </div>
                <div className='section-div-2'>
                    <div>
                        <div className='inner-div-2'>
                            <div className='backend-msg'>
                                <div style={{ color: colorChanger === 0 ? "red" : "green" }}>{dataError2 === false ? "" : dataError1}</div>
                            </div>
                            <div className='sign-heading-text-2-div'>
                                <h4 className='sign-heading-text-2'>SIGN IN</h4>
                            </div>
                            <div className='form-div-2'>
                                <div className='form-div-2-flex'>
                                    <div>
                                        <span className='mini-mobile-email-text'>Mobile/Email</span>
                                        <br />
                                        <br />
                                        <input
                                            style={{ color: errorMsg === true ? "#EF1A1A" : "black", borderColor: errorMsg === true ? "#EF1A1A" : "#989898" }}
                                            className='box-input-field-2'
                                            type="text"
                                            placeholder='89 18 63 06 43'
                                            value={emailormobile}
                                            onChange={(event) => {
                                                setEmailOrMobile(event.target.value);
                                                setErrorMsg(false);
                                            }}
                                        />
                                    </div>
                                    {errorMsg && <div className='error-correction-page-1-div'><div className='error-correction-page-1-text'>Please enter a valid email/phone</div></div>}
                                    <TogglePassword password={password} setPassword={setPassword} />
                                </div>
                            </div>
                            <div className='sign-in-div'>
                                <button className='sign-in-btn-1' onClick={() => { login() }}>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const TogglePassword = ({ password, setPassword }) => {
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
            <div className="lock-input-container">
                <div>
                    <span className='mini-password-text'>Password</span>
                    <br />
                    <br />
                    <input
                        className='box-input-field-2'
                        type={toggle === false ? "password" : "text"}
                        placeholder='* * * *'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className="padlock-img" onClick={ToggleHandler}>
                    {toggle === false ? <i class="fa-solid fa-lock"></i> : <i class="fa-solid fa-lock-open"></i>}
                </span>
            </div>
            <div className='forget-password-text-1'><div>Forget Password?</div></div>
        </>
    );
}
export default Login;
