import React, { useEffect } from "react";

// const { REACT_APP_BASE_URL: url } = process.env;

export const Myhome = () => {
  // useEffect(async () => {
  //   await fetch(`${url}/v1/house_details`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   });
  // }, [])
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));

  return (
    <div>
      <h1>Myhome</h1>
    </div>
  );
};
export default Myhome;
