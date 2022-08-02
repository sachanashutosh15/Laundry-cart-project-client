import React from "react";

const LoginTest = () => {
  const [userData, setUserData] = React.useState({
    emailorphone: "",
    password: "",
  });

  function handleChange (e) {
    const {name, value} = e.target;
    setUserData(prevData => ({...prevData, [name]: value}))
  }

  async function handleSubmit (e) {
    const res = await fetch(
      "http://localhost:3001/login", {
        method: "post",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
      }
    )
    const data = await res.json();
    console.log(data);
  }

  return (
    <>
      <div>
        <input
          type="email"
          name="emailorphone"
          onChange={handleChange}
          value={userData.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
        <button
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default LoginTest;