import React, { useState } from "react";
const { REACT_APP_BASE_URL: url } = process.env;

export const Body = () => {
  const [state, setState] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    roleIdSet: [1],
  });

  const onRegister = () => {
    fetch(`${url}/public/auth/register`, {
      method: "POST",
      headers: {},
      body: JSON.stringify(state),
    });
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        name="firstname"
        value={state.firstname}
        type="text"
        placeholder="first name"
        onChange={onChange}
      />
      <input
        name="lastname"
        value={state.lastname}
        type="text"
        placeholder="last name"
        onChange={onChange}
      />
      <br />
      <input
        name="email"
        value={state.email}
        type="email"
        placeholder="email"
        onChange={onChange}
      />
      <input
        name="password"
        value={state.password}
        type="password"
        placeholder="password"
        onChange={onChange}
      />
      <br />
      <button onClick={onRegister}>register</button>
    </div>
  );
};

export default Body;
