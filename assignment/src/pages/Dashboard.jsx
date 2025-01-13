import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Styles from "./Dashboard.module.css";
import home from "../assets/home.svg";
import settings from "../assets/settings.svg";
import Sidebar from "../components/Sidebar/Sidebar";
import AreaChartOne from "../components/AreachartOne/AreachartOne";
import Piechart from "../components/Piechart/Piechart";
import AreachartTwo from "../components/AreachartTwo/AreachartTwo";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const storedData = JSON.parse(localStorage.getItem("data"));
  const { otp } = storedData;
  useEffect(() => {
    if (otp === 0 || otp === null || otp === undefined) {
      alert("Please Signin");
      navigate("/");
    }
  }, [storedData]);

  return (
    <div>
      <Navbar hasAuthTrue={true} />
      <div className={Styles.container}>
        <div className={Styles.sidebar}>
          <Sidebar icon={home} active={true} alt={"home icon"} />
          <Sidebar icon={settings} active={false} alt={"settings icon"} />
        </div>
        <div className={Styles.innerContainer}>
          <div className={Styles.screenOne}>
            <div className={Styles.areaChartOne}>
              <AreaChartOne
                title={"Inventory"}
                percentage={"93%"}
                theme={"#FFBE0A"}
                dataSet={[2, 1, 4, 3, 5, 4]}
              />
            </div>
            <div className={Styles.areaChartOne}>
              <AreaChartOne
                title={"Orders"}
                percentage={"65%"}
                theme={"#FF4F79"}
                dataSet={[1, 3, 2, 5, 3, 4, 2]}
              />
            </div>
          </div>
          <div className={Styles.screenTwo}>
            <Piechart remaining={65} consumed={35} />
            <AreachartTwo dataSet={[50,30,80,60,100,70]}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
