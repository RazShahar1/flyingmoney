import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddExpence() {
  const [expense, setExpence] = useState({});
  const navigate = useNavigate();
  const err = "ERR";
  const validation = () => {
    if (expense.categore != "") {
      if (expense.name != undefined) {
        if (expense.amount != undefined) {
          if (expense.date != undefined) {
            addToExpenseAcount();
          } else {
            window.alert("please fild date");
          }
        } else {
          window.alert("amount");
        }
      } else {
        window.alert("name");
      }
    } else {
      window.alert("categore");
    }
  };

  const addToExpenseAcount = () => {
    fetch("/addtoex", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(expense),
    })
      .then((response) => response.json())
      .then((json) => window.alert(json));
  };

  return (
    <div>
      <h1>Hello</h1>
      <h1>add expence</h1>
      <h3>Hello Raz plece add your expence</h3>
      <br></br>
      <h4>Categore</h4>
      <select
        type={"text"}
        onChange={(e) => {
          setExpence({ ...expense, categore: e.target.value });
        }}
      >
        <option></option>
        <option>תרומה</option>
        <option>עמלות אשראי</option>
        <option>ביגוד</option>
        <option>כיף</option>
        <option>++ כיף</option>
        <option>ביטוחים</option>
        <option>לייף סטייל</option>
        <option>אוכל</option>
        <option>יציאות</option>
        <option>רכב</option>
        <option>דלק</option>
        <option>קורקינט</option>
        <option>סיגריות</option>
        <option>אירועים</option>
        <option>חנאן</option>
      </select>

      <br></br>
      <h4>Name:</h4>
      <br></br>
      <input
        type={"text"}
        onChange={(e) => {
          setExpence({ ...expense, name: e.target.value });
        }}
      />
      <br></br>
      <h4>Amount</h4>
      <input
        type={"number"}
        onChange={(e) => {
          setExpence({ ...expense, amount: e.target.value });
        }}
      />
      <br></br>
      <h4>Date</h4>
      <input
        type={"date"}
        onChange={(e) => {
          setExpence({ ...expense, date: e.target.value });
        }}
      />
      <br></br>
      <br></br>
      <button onClick={validation}>Save</button>
      <br></br>
      <br></br>
      <div>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
}
