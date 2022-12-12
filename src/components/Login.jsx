import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [userdi, setuserdi] = useState("");
  const gohome = (q) => {
    if ((q = "Loged in")) {
      navigate("/");
    }
  };
  const logincheck = () => {
    console.log(userdi);
    let checkdcount = 0;
    let emailcount = 0;
    for (let i = 0; i <= userdi.useremail.length - 1; i++) {
      if (userdi.useremail.charAt(i) == "@") {
        console.log(userdi.useremail.charAt(i));
        emailcount++;
      }
    }
    console.log("@chack");
    console.log(emailcount);
    if (emailcount != 1) {
      window.alert("email not valid");
    } else if (userdi.password.length <= 5) {
      window.alert("password need to be 6 chars or more");
    } else {
      checkdcount++;
    }
    if (checkdcount != 1) {
      window.alert("error");
    } else {
      fetch("/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ user: userdi }),
      })
        .then((response) => response.json())
        .then((json) => window.alert(json))
        .then((json) => gohome(json));
    }
  };
  return (
    <div>
      <div id="loginDiv">
        <h1>Wellcom User Pls Login</h1>
        <br></br>
        <br></br>
        <h2>User email</h2>
        <br></br>
        <input
          type={"email"}
          onChange={(e) => setuserdi({ ...userdi, useremail: e.target.value })}
        />
        <h2>Password </h2>
        <input
          type={"password"}
          onChange={(e) => setuserdi({ ...userdi, password: e.target.value })}
        />
        <br></br>
        <br></br>
        <button onClick={logincheck}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
}
