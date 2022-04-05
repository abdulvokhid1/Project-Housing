import React, { useEffect, useState } from "react";
const { REACT_APP_BASE_URL: url } = process.env;
export const Propertylist = () => {
  // console.log(process.env);
  const [state, setState] = useState();

  useEffect(() => {
    fetch(`${url}/v1//houses`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res?.data);
      });
  }, []);
  return (
    <div>
      <h1>Propertylist</h1>
    </div>
  );
};

export default Propertylist;

// body malumot jonatganda back end ga 'Content Type':'application/json'
