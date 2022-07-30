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

    const asideStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        width: "28vw",
        height: "84vh"
    }
    const articleStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "80vw",
        height: "84vh"
    }
    return (
        <>

            <section>
                <aside style={asideStyle}>
                    <div className='combined-1'>
                        <div className='laundry-service-heading-div'>
                            <h1 className='laundry-service-heading-text' style={{ fontSize: "60px" }}>Laundry</h1>
                            <h1 className='laundry-service-heading-text' style={{ fontSize: "60px", marginTop: "-80px" }}>Services</h1>
                        </div>
                        <div className='doorstep-heading'>
                            <h5>Doorstep Wash <span>&#38;</span></h5>
                            <h5 style={{ marginTop: "-4px" }}>DryClean Service</h5>
                        </div>
                    </div>

                    <div className='combined-2'>
                        <div style={{ width: "200px" }}>
                            <h6 style={{ marginLeft: "-92px", fontSize: "14px" }}>Already Have Account</h6>
                        </div>
                        <div style={{ width: "100px" }}>
                            <button style={{ marginLeft: "-92px" }} className='register' onClick={buttonClickHandler} >Sign In</button>
                        </div>
                    </div>
                </aside>

                <article style={articleStyle}>
                    <div className='sign-in-text-div'>
                        <h4>REGISTER</h4>
                    </div>
                    <div className='side-border'>
                        <div className='form-div' style={{margin:"0 auto"}}>

                            <div style={{ marginBottom: "20px",marginLeft:"80px" }}>
                                <div className="name-text" style={{ marginBottom: "-24px", fontSize: "11px" }}>Name</div>
                                <br />
                                <input
                                    type="text"
                                    placeholder='sample name'
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    style={{ width: "400px" }}
                                />
                            </div>

                            <div style={{ marginBottom: "20px", marginLeft: "120px" }}>
                                <div className="email-text" style={{ marginBottom: "-24px", fontSize: "11px" }}>Email</div>
                                <br />
                                <input
                                    type="text"
                                    placeholder='suraj10@gmail.com'
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    style={{ width: "400px" }}
                                />
                            </div>
                            <div style={{ marginBottom: "20px",marginLeft:"80px" }}>
                                <div className="phone-text" style={{ marginBottom: "-24px", fontSize: "11px" }}>Phone</div>
                                <br />
                                <input
                                    type="text"
                                    placeholder='89 18 63 06 43'
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                    style={{ width: "400px" }}
                                />
                            </div>
                            <div style={{ marginBottom: "20px", marginLeft: "120px" }}>
                                <div className="state-text" style={{ marginBottom: "-24px", fontSize: "11px" }}>State</div>
                                <br />
                                <input
                                    type="text"
                                    placeholder='West Bengal'
                                    value={state}
                                    onChange={(event) => setState(event.target.value)}
                                    style={{ width: "400px" }}
                                />
                            </div>
                            <div style={{ marginBottom: "20px" ,marginLeft:"80px"}}>
                                <div className="district-text" style={{ marginBottom: "-24px", fontSize: "11px" }}>District</div>
                                <br />
                                <input
                                    type="text"
                                    placeholder='Burdwan'
                                    value={district}
                                    onChange={(event) => setDistrict(event.target.value)}
                                    style={{ width: "400px" }}
                                />
                            </div>
                            <div style={{ marginBottom: "20px", marginLeft: "120px" }}>
                                <div className="address-text" style={{ marginBottom: "-24px", fontSize: "11px" }}>Address</div>
                                <br />
                                <input
                                    type="text"
                                    placeholder='Near Kali Bari'
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)}
                                    style={{ width: "400px" }}
                                />
                            </div>
                            <div  style={{ marginBottom: "20px" ,marginLeft:"80px"}}>
                                <div className="pincode-text" style={{ marginBottom: "-24px", fontSize: "11px" }}>Pincode</div>
                                <br />
                                <input
                                    type="text"
                                    placeholder='713032'
                                    value={pincode}
                                    onChange={(event) => setPincode(event.target.value)}
                                    style={{ width: "400px" }}
                                />
                            </div>
                            <div style={{ marginBottom: "20px", marginLeft: "120px" }}>

                                <TogglePassword password={password} setPassword={setPassword} />
                            </div>
                        </div>
                    </div>

                    <div className='sign-in-button-div' style={{ marginTop: "80px", marginLeft: "500px" }}>
                        <button onClick={() => { register() }}>Register</button>
                    </div>
                </article>
            </section>

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
            <div className="password-text" style={{ marginBottom: "-24px", fontSize: "11px" }}>Password</div>
            <img onClick={ToggleHandler} src={padlockLogo} alt="" className="padlock-img" style={{ marginLeft: "25rem", width: "20px" }} />
            <br />
            <input
                type={toggle === false ? "password" : "text"}
                placeholder='* * * *'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                style={{ width: "400px" }}
            />

        </>
    );
}


export default Register