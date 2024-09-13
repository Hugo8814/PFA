import { useState } from "react";
import logo from "../../Temp/assets/images/logo-large.svg";
import { Link } from "react-router-dom";

function SideBar() {
  const [isActive, setIsActive] = useState("");
  function handleActive() {
    setIsActive("sideBar__active");
  }
  return (
    <div className="sideBar">
      <div className="sideBar__logo">
        <img src={logo} alt="logo" />
      </div>

      <Link
        onClick={handleActive}
        to="Overview"
        className={`sideBar__btn ${isActive}`}
      >
        Overview
      </Link>

      <Link to="Transactions" className={"sideBar__btn"}>
        Transactions
      </Link>

      <Link to="Budgets" className={"sideBar__btn"}>
        Budgets
      </Link>

      <Link to="Pots" className={"sideBar__btn"}>
        Pots
      </Link>

      <Link to="RecurringBills" className={"sideBar__btn"}>
        Recurring Bills
      </Link>
    </div>
  );
}
export default SideBar;
