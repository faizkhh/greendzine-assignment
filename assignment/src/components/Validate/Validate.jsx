import React, { useEffect, useState } from "react";
import Styles from "./Validate.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Countdown from "../Countdown/Countdown";

const Validate = () => {
  const [enterdOtp, setEnterdOtp] = useState("");
  const [timeOut, setTimeOut] = useState(false);
  const [localData, setLocalData] = useState({
    email: "",
    otp: 0,
  });

  const navigate = useNavigate();

  const otp = JSON.parse(localStorage.getItem("data"));
  useEffect(() => {
    if (otp.otp === 0 || otp.otp === null || otp.otp === undefined) {
      alert("Please Signin");
      navigate("/");
    }
  }, [otp]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData) {
      setLocalData((prev) => ({
        ...prev,
        email: storedData.email,
        otp: Number(storedData.otp),
      }));
    }
  }, []);

  const validateOtp = (localData) => {
    if (localData.otp === null || localData.otp === undefined) {
      alert("Otp Expired");
      return;
    }

    if (localData.otp === Number(enterdOtp)) {
      navigate("/dashboard");
    } else {
      alert("Incorrect Otp");
      navigate("/");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    validateOtp(localData);
  };

  const resendOtp = () => {
    navigate("/");
  };

  useEffect(() => {
    if (timeOut) {
      const storedData = JSON.parse(localStorage.getItem("data"));
      const { email } = storedData;
      const updatedData = { email: email, otp: null };
      localStorage.setItem("data", JSON.stringify(updatedData));
      setLocalData(updatedData);
    }
  }, [timeOut]);
  return (
    <div>
      <Navbar />
      <div className={Styles.signinWrapper}>
        <div className={Styles.scrOne}>
          <p>Enter Otp sent to Email</p>
          <form onSubmit={handleClick}>
            <input
              type="text"
              placeholder="OTP"
              value={enterdOtp}
              onChange={(e) => setEnterdOtp(e.target.value)}
              required
            />
            <div className={Styles.resend}>
              {timeOut ? (
                <p className={Styles.resendActive} onClick={resendOtp}>
                  resend otp
                </p>
              ) : (
                <p className={Styles.resendInactive}>resend otp</p>
              )}
              <div className={Styles.countdown}>
                <Countdown setTimeOut={setTimeOut} />
              </div>
            </div>
            <br />
            <button type="submit" className={Styles.validateBtn}>
              Validate
            </button>
          </form>
        </div>
        <div className={Styles.scrTwo}>
          <p>Web Application with Analytics Dashboard</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Validate;
