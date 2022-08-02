import React, { useState } from 'react';
import "./Register.css";
import M from "materialize-css";
import padlockLogo from "../Images/padlock.svg";



function Register(props) {
    // const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");

    const value = true;
    const buttonClickHandler = () => {
        props.passData(value);
    }

    const register = (e) => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "enter valid email", classes: "#ff1744 red accent-3" })
            return;
        }
        fetch("http://localhost:3001/register", {
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
                    M.toast({ html: data.error, classes: "#ff1744 red accent-3" })
                }
                else {
                    M.toast({ html: data.result, classes: "#2e7d32 green darken-3" })
                    buttonClickHandler();
                    console.log("navigate to login page");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <>

            <div className='main-section-3'>
                <div style={{ backgroundColor: "white" }}>
                    <div className='section-div-3'>
                        <div className='inner-div-3'>
                            <div className='laundry-text-3'>
                                <h1 >Laundry <br />
                                    Services</h1>
                            </div>
                            <div className='door-step-text-3'><h5>Doorstep Wash <span>&#38;</span> DryClean Service</h5></div>
                            <div className='already-account-text'><h6>Already Have Account</h6></div>
                            <div >
                                <button className='sign-in-btn-3' onClick={buttonClickHandler}>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='section-div-4'>
                    <div className='register-text-div'>
                        <div>REGISTER</div>
                    </div>
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

                            <div >
                                <input
                                    className='register-input-field'
                                    type="text"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}

                                />
                            </div>
                            <div>
                                <input
                                    className='register-input-field'
                                    type="text"
                                    placeholder='Phone number'
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}

                                />
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
                        </div>
                        <div className='form-child-2'>
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
                                    placeholder='Address'
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)}

                                />
                            </div>
                            <div >

                                <input
                                    className='register-input-field'
                                    type="text"
                                    placeholder='Pin Code'
                                    value={pincode}
                                    onChange={(event) => setPincode(event.target.value)}

                                />
                            </div>
                            <div >

                                <TogglePassword password={password} setPassword={setPassword} />
                            </div>
                        </div>
                    </div>
                    <div className='terms-condition-div'>
                        <label>
                            <input className="register-checkbox" id="indeterminate-checkbox" type="checkbox" />
                            <span className="terms-conditions-text">I agree to Terms & Condition receiving marketing and promotional materials</span>
                        </label>
                    </div>
                    <div className='register-div' >
                        <button onClick={() => { register() }}>Register</button>
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
                placeholder='* * * *'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
             <span className="padlock-img2" onClick={ToggleHandler}>
                {toggle === false?<i class="fa-solid fa-lock"></i>:<i class="fa-solid fa-lock-open"></i>}
            </span>
            </div>

        </>
    );
}




export default Register