import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Expens from "./Expens";

export default function ExpenseAccount() {
  const [expenseAcount, setExAc] = useState([]);

  useEffect(() => {
    fetch("/first", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((json) => setExAc(json));
  }, []);

  const getdata = () => {
    fetch("/first", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((json) => setExAc(json));
  };

  let sumAccount = 0;
  const navigate = useNavigate();
  const [from, setFdate] = useState("");
  const [to, setTdate] = useState("");
  const [datefilter, setDF] = useState("DataFilterOff");

  const sum = () => {
    for (let i = 0; i < expenseAcount.length; i++) {
      let expns = parseInt(expenseAcount[i].amount);
      sumAccount = sumAccount + expns;
    }
    return sumAccount;
  };

  const dateFilterView = () => {
    switch (datefilter) {
      case "DataFilterOn":
        setDF("DataFilterOff");
        break;
      case "DataFilterOff":
        setDF("DataFilterOn");
        break;
    }
  };

  const dateFilter = () => {
    console.log("check");
    fetch("/datefilter", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fromdate: from, todate: to }),
    })
      .then((response) => response.json())
      .then((json) => setExAc(json));
  };

  const cleanExpens = () => {
    fetch("/deleteallexpense", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(getdata());
  };

  const amountFilter = () => {
    console.log("check");
    fetch("/amountfilter", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fromamount: from, toamount: to }),
    })
      .then((response) => response.json())
      .then((json) => setExAc(json));
  };

  return (
    <div id="accountDiv">
      <h1>Wellcom to your Expense Account </h1>
      <br></br>
      <button id="btn" onClick={() => navigate("/userlogin")}>
        Go to Loging
      </button>

      <Link to="/userlogin">Go to Loging</Link>
      <br></br>
      <div id="addExpens">
        <Link style={{ textDecorationLine: "none" }} to="/addexpens">
          Add Expense
        </Link>
      </div>
      <br></br>

      <br></br>
      <button id="btn" onClick={dateFilterView}>
        Filters
      </button>
      <br></br>

      <div id={datefilter}>
        <div id="datefilterdiv">
          <input
            type={"date"}
            onChange={(e) => {
              setFdate(e.target.value);
            }}
          />
          <h3>to :</h3>
          <input
            type={"date"}
            onChange={(e) => {
              setTdate(e.target.value);
            }}
          />
          <button onClick={dateFilter}>Search</button>
        </div>
        <br></br>
        <div id="amountFilterDiv">
          <h3>amount:</h3>
          <input
            type={"number"}
            onChange={(e) => {
              setFdate(e.target.value);
            }}
          />
          Between:
          <input
            type={"number"}
            onChange={(e) => {
              setTdate(e.target.value);
            }}
          />
          <button onClick={amountFilter}>Search</button>
        </div>
        <div></div>
        <button onClick={getdata}> Clear Search</button>
      </div>
      <br></br>

      <button id="btn" onClick={cleanExpens}>
        Clear
      </button>
      <div id="sumDiv">
        <h2>Sum: {sum()}</h2>
      </div>

      <div id="expensesDiv">
        {expenseAcount.map((e) => {
          return (
            <div id="expensDiv">
              <Expens
                name={e.name}
                date={e.date}
                amount={e.amount}
                categore={e.categore}
                getdata={getdata}
              />
            </div>
          );
        })}{" "}
      </div>
      <button onClick={() => navigate("/charts")}>Go TO CHarts</button>
    </div>
  );
}
