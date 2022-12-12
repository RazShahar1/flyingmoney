import React from "react";

export default function Expens(props) {
  const deleteExpens = () => {
    fetch("/deletexpense", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: props.name,
        date: props.date,
        amount: props.amount,
        category: props.categore,
      }),
    })
      .then((respose) => respose.json())
      .then((json) => window.alert(json))
      .then(props.getdata());
  };
  return (
    <div id="oneExpensDiv">
      <div id="expensDitelsDiv">
        <h3 id="eh3">Name: {props.name} </h3>
        <h3 id="eh3">date: {props.date} </h3>
        <h3 id="eh3">Categore: {props.categore} </h3>
        <h3 id="eh3">Amount: {props.amount} $ </h3>
      </div>
      <div id="btnDiv">
        <button onClick={deleteExpens}>Delete</button>
      </div>
    </div>
  );
}
