import React,{useState} from 'react'
import Login from '../components/Login';
import Referral from '../components/Referral';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import Register from '../components/Register';
import NavBar from '../components/NavBar';


function FrontPage({val}) {
    const [toggle,setToggle]=useState(true);
    console.log(toggle);
    return (
        <>
            <NavBar />
            {toggle === true?<Login setToggle={setToggle} />:<Register setToggle={setToggle} />}
            <Referral></Referral>
            <Disclaimer></Disclaimer>
            <Footer></Footer>
        </>
    )
}

export default FrontPage;