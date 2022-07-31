import React, { useState } from 'react'
import Login from '../components/Login';
import Referral from '../components/Referral';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import Register from '../components/Register';
import NavBar from '../components/NavBar';


function FrontPage() {
    const [childData, setChildData] = useState(true);

    const passData = (data) => {
        console.log("suraj")
        setChildData(data);

    };
    // console.log(toggle)

    if (childData === true) {
        return (
            <>
                <NavBar/>
                <Login passData={passData}/>
                <Referral></Referral>
                <Disclaimer></Disclaimer>
                <Footer></Footer>
            </>
        )
    }

    return (
        <>
            <NavBar/>
            <Register passData={passData} />
            <Referral></Referral>
            <Disclaimer></Disclaimer>
            <Footer></Footer>
        </>
    )


}

export default FrontPage;