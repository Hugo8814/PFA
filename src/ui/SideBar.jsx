import { NavLink } from "react-router-dom";
import logo from "../../Temp/assets/images/logo-large.svg";
import houseLogo from "../../Temp/assets/images/icon-nav-overview.svg";
import transactionsLogo from "../../Temp/assets/images/icon-nav-transactions.svg";
import budgetLogo from "../../Temp/assets/images/icon-nav-budgets.svg";
import recurringLogo from "../../Temp/assets/images/icon-nav-recurring-bills.svg";
import potsLogo from "../../Temp/assets/images/icon-nav-pots.svg";

function SideBar() {
  return (
    <div className="sideBar">
      {/* Logo Section */}
      <div className="sideBar__logo">
        <img src={logo} alt="logo" className="sideBar__logo-fill" />
      </div>

      {/* Navigation Links */}
      <NavLink
        to="Overview"
        className={({ isActive }) =>
          `sideBar__btn ${isActive ? "sideBar__active" : ""}`
        }
      >
        <img src={houseLogo} alt="Overview icon" className="sideBar__icon" />
        Overview
      </NavLink>

      <NavLink
        to="Transactions"
        className={({ isActive }) =>
          `sideBar__btn ${isActive ? "sideBar__active" : ""}`
        }
      >
        <img
          src={transactionsLogo}
          alt="Transactions icon"
          className="sideBar__icon"
        />
        Transactions
      </NavLink>

      <NavLink
        to="Budgets"
        className={({ isActive }) =>
          `sideBar__btn ${isActive ? "sideBar__active" : ""}`
        }
      >
        <img src={budgetLogo} alt="Budgets icon" className="sideBar__icon" />
        Budgets
      </NavLink>

      <NavLink
        to="Pots"
        className={({ isActive }) =>
          `sideBar__btn ${isActive ? "sideBar__active" : ""}`
        }
      >
        <img src={potsLogo} alt="Pots icon" className="sideBar__icon" />
        Pots
      </NavLink>

      <NavLink
        to="RecurringBills"
        className={({ isActive }) =>
          `sideBar__btn ${isActive ? "sideBar__active" : ""}`
        }
      >
        <img
          src={recurringLogo}
          alt="Recurring Bills icon"
          className="sideBar__icon"
        />
        Recurring Bills
      </NavLink>
    </div>
  );
}

export default SideBar;
