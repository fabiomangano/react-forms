import React from "react";

export default function ControlledForm() {
  const [state, setState] = React.useState({
    name: "",
    surname: "",
    age: 18,
    incensurato: true,
    disabile: false,
  });

  let ageOpts = [];

  for (let i = 1; i < 100; i++) {
    ageOpts[i] = i;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("inviato");
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    console.log(name);
    console.log(value);

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", maxWidth: "20%" }}
      onSubmit={onSubmit}
    >
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        name="name"
        placeholder="Mario"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="surname">Cognome:</label>
      <input
        type="text"
        name="surname"
        placeholder="Rossi"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="age">Età:</label>
      <select name="Age" onChange={handleInputChange} value={state.age}>
        {ageOpts.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
      <br />
      <div>
        <input
          name="incensurato"
          type="checkbox"
          checked={state.incensurato}
          onChange={handleInputChange}
        />
        <label htmlFor="incensurato"> Incensurato</label>
      </div>
      <br />
      <div>
        <input
          name="legge"
          type="checkbox"
          checked={state.legge}
          onChange={handleInputChange}
        />
        <label htmlFor="legge"> Lg. 09/93</label>
      </div>
      <br />
      <input type="submit" value="invia" />
    </form>
  );
}
