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
        <img src={logo} alt="logo" />
      </div>

      {/* Navigation Links */}
      <NavLink
        to="Overview"
        className={({ isActive }) =>
          `sideBar__btn ${isActive ? "sideBar__active" : ""}`
        }
      >
        {({ isActive }) => (
          <>
            <img
              src={houseLogo}
              alt="Overview icon"
              className={`sideBar__icon ${
                isActive ? "sideBar__icon-active" : ""
              }`}
            />
            Overview
          </>
        )}
      </NavLink>

      <NavLink
        to="Transactions"
        className={({ isActive }) =>
          `sideBar__btn ${isActive ? "sideBar__active" : ""}`
        }
      >
        {({ isActive }) => (
          <>
            <img
              src={transactionsLogo}
              alt="Transactions icon"
              className={`sideBar__icon ${
                isActive ? "sideBar__icon-active" : ""
              }`}
            />
            Transactions
          </>
        )}
      </NavLink>

      <NavLink
        to="Budgets"
        className={({ isActive }) =>
          `sideBar__btn ${isActive ? "sideBar__active" : ""}`
        }
      >
        {({ isActive }) => (
          <>
            <img
              src={budgetLogo}
              alt="Budgets icon"
              className={`sideBar__icon ${
                isActive ? "sideBar__icon-active" : ""
              }`}
            />
            Budgets
          </>
        )}
      </NavLink>

      <NavLink
        to="Pots"
        className={({ isActive }) =>
          `sideBar__btn ${isActive ? "sideBar__active" : ""}`
        }
      >
        {({ isActive }) => (
          <>
            <img
              src={potsLogo}
              alt="Pots icon"
              className={`sideBar__icon ${
                isActive ? "sideBar__icon-active" : ""
              }`}
            />
            Pots
          </>
        )}
      </NavLink>

      <NavLink
        to="RecurringBills"
        className={({ isActive }) =>
          `sideBar__btn ${isActive ? "sideBar__active" : ""}`
        }
      >
        {({ isActive }) => (
          <>
            <img
              src={recurringLogo}
              alt="Recurring Bills icon"
              className={`sideBar__icon ${
                isActive ? "sideBar__icon-active" : ""
              }`}
            />
            Recurring Bills
          </>
        )}
      </NavLink>
    </div>
  );
}

export default SideBar;
