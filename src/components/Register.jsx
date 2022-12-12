import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setuser] = useState("");
  const navigate = useNavigate();
  let emailcounter = 0;
  const usersubmit = () => {
    if (user.name.length >= 7) {
      window.alert("User Name to Long , Max 7 chars");
    }
    for (let i = 0; i <= user.useremail.length - 1; i++) {
      if (user.useremail.charAt(i) == "@") {
        emailcounter = 1;
      }
    }
    if (emailcounter != 1) {
      window.alert("this is not a Email");
    } else if (user.password.length <= 5) {
      window.alert("password to short");
    } else {
      fetch("/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ user: user }),
      })
        .then((response) => response.json())
        .then((json) => window.alert(json))
        .then(navigate("/userlogin"));
    }
  };
  return (
    <div>
      <div>
        <h1>Wellcom user</h1>
        <br></br>
        <br></br>
        <h2>User name:</h2>
        <input
          type={"text"}
          onChange={(e) => setuser({ ...user, name: e.target.value })}
        />
        <h2>User Email:</h2>
        <input
          type={"email"}
          onChange={(e) => setuser({ ...user, useremail: e.target.value })}
        />
        <h2>Password:</h2>
        <input
          type={"password"}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
        />
        <br></br>
        <button onClick={usersubmit}>Submit</button>
      </div>
    </div>
  );
}
