import { useState } from "react";
import Cards from "./Cards";
import Services from "./Services";
import Header from './Header'
const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };
  return (
    <>
      <Header/>
      <Cards toggleBalance={toggleBalance} showBalance={showBalance} />
      <Services />
      <button className="btn">
        Transaction History &nbsp; <i className="fa-solid fa-clock-rotate-left"></i>
      </button>
    </>
  );
};

export default Dashboard;

