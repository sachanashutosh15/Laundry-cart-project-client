import React, { useState } from 'react';
import "./Register.css";
function Register(props) {
    const [emailErrorMsg, setEmailErrorMsg] = useState(false);
    const [PhoneErrorMsg, setPhoneErrorMsg] = useState(false);
    const [dataError1, setDataError1] = useState("");
    const [dataError2, setDataError2] = useState(false);
    const [colorChanger, setColorChanger] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [checkValue, setCheckValue] = useState(null);
    const value = true;
    const buttonClickHandler = () => {
        props.passData(value);
    }
    function ClickHandler(e) {
        if (e.target.checked == true) {
            console.log("hi");
            setCheckValue(true);
            return;
        }
        console.log("ho");
        setCheckValue(false);
    }
    const register = (e) => {
        if (checkValue === true) {
            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
                console.log("hello suraj email");
                setEmailErrorMsg(true);
                return;
            }
            if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone)) {
                console.log("hello suraj");
                setPhoneErrorMsg(true);
                return;
            }
            fetch("https://laundrycart--server.herokuapp.com/register", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    state: state,
                    address: address,
                    pincode: pincode,
                    district: district
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    console.log("suraj");
                    console.log(data.error);
                    if (data.error) {
                        console.log("singh");
                        setDataError1(data.error);
                        setColorChanger(0);
                        setDataError2(true);
                        setTimeout(() => {
                            setDataError2(false);
                        }, 3000)
                    }
                    else {
                        setColorChanger(1);
                        setDataError1(data.result);
                        setDataError2(true);
                        setTimeout(() => {
                            setDataError2(false);
                            buttonClickHandler();
                        }, 3000)
                        console.log("navigate to login page");
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        else {
            alert("kindly accept the terms and conditions");
        }
    }
    return (
        <>
            <div className='main-section-3'>
                <div className='section-div-3'>
                    <div className='inner-div-3'>
                        <div className='laundry-text-3'>
                            <h1 >Laundry <br />
                                Services</h1>
                        </div>
                        <div className='door-step-text-3'><h5>Doorstep Wash <span>&#38;</span> <br />DryClean Service</h5></div>
                        <div className='already-account-text'><h6>Already Have Account</h6></div>
                        <br />
                        <div >
                            <button className='sign-in-btn-3' onClick={buttonClickHandler}>Sign In</button>
                        </div>
                    </div>
                </div>
                <div className='section-div-4'>
                    <div className='backend-msg2'>
                        <div style={{ color: colorChanger === 0 ? "#EF1A1A" : "green" }}>
                            {dataError2 === false ? "" : dataError1}
                        </div>
                    </div>
                    <div className='register-text-div'>
                        <div>REGISTER</div>
                    </div>
                    <div className='form-parent-container'>
                        <div className='form-parent'>
                            <div className='form-child-1' >
                                <div>
                                    <input
                                        className='register-input-field'
                                        type="text"
                                        placeholder='Name'
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        className='register-input-field'
                                        type="text"
                                        placeholder='Phone'
                                        value={phone}
                                        onChange={(event) => {
                                            setPhone(event.target.value);
                                            setPhoneErrorMsg(false);
                                        }}
                                    />
                                    {PhoneErrorMsg && <div className='error-correction-page-2-div'><div className='error-correction-page-2-text'>Enter a valid phone number</div></div>}
                                </div>
                                <div >
                                    <input
                                        className='register-input-field'
                                        type="text"
                                        placeholder='District'
                                        value={district}
                                        onChange={(event) => setDistrict(event.target.value)}
                                    />
                                </div>
                                <div >
                                    <input
                                        className='register-input-field'
                                        type="text"
                                        placeholder='Pincode'
                                        value={pincode}
                                        onChange={(event) => setPincode(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='form-child-2'>
                                <div >
                                    <input
                                        className='register-input-field'
                                        type="text"
                                        placeholder='Email'
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                            setEmailErrorMsg(false);
                                        }}
                                    />
                                    {emailErrorMsg && <div className='error-correction-page-2-div'><div className='error-correction-page-2-text'>Enter a valid email</div></div>}
                                </div>
                                <div >
                                    <TogglePassword password={password} setPassword={setPassword} />
                                </div>
                                <div >
                                    <input
                                        className='register-input-field'
                                        type="text"
                                        placeholder='State'
                                        value={state}
                                        onChange={(event) => setState(event.target.value)}
                                    />
                                </div>
                                <div >
                                    <input
                                        className='register-input-field'
                                        type="text"
                                        placeholder='Address'
                                        value={address}
                                        onChange={(event) => setAddress(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='terms-condition-div'>
                        <label>
                            <input className="register-checkbox" id="checkbox" type="checkbox" onClick={(e) => ClickHandler(e)} />
                            <span className="terms-conditions-text">I agree to Terms & Condition receiving marketing and promotional materials</span>
                        </label>
                    </div>
                    <div className='register-div' >
                        <button className='register-div-button' onClick={() => { register() }}>Register</button>
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
            <div className='lock-input-container2'>
                <input
                    className='register-input-field'
                    type={toggle === false ? "password" : "text"}
                    placeholder='Password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <span className="padlock-img2" onClick={ToggleHandler}>
                    {toggle === false ? <i class="fa-solid fa-lock"></i> : <i class="fa-solid fa-lock-open"></i>}
                </span>
            </div>
        </>
    );
}
export default Register