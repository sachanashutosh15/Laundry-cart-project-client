import React, { useState } from 'react'
import Login from '../components/Login';
import Referral from '../components/Referral';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import Register from '../components/Register';



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
                <Login passData={passData}/>
                <Referral></Referral>
                <Disclaimer></Disclaimer>
                <Footer></Footer>
            </>
        )
    }

    return (
        <>
            <Register passData={passData} />
            <Referral></Referral>
            <Disclaimer></Disclaimer>
            <Footer></Footer>
        </>
    )


}

export default FrontPage;

