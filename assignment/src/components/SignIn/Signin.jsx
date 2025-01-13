import React, { useEffect, useState } from "react";
import Styles from "./Signin.module.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    otp: 0,
  });
  const navigate = useNavigate();
  const max = 999999;
  const min = 100000;
  const random = Math.floor(Math.random() * (max - min) + min);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev)=>({...prev, otp:random}));
    alert(random);
    navigate("/validate");
  };

  useEffect(()=>{
    localStorage.setItem("data", JSON.stringify(data));
  },[data]);

  return (
    <div className={Styles.signinWrapper}>
      <div className={Styles.scrOne}>
        <p>Sign In</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit" className={Styles.signinBtn}>Send Otp</button>
        </form>
      </div>
      <div className={Styles.scrTwo}>
        <p>Web Application with Analytics Dashboard</p>
      </div>
    </div>
  );
};

export default Signin;
