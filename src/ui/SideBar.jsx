import LinkButton from "./LinkButton";
import logo from "../../Temp/assets/images/logo-large.svg";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBar__logo">
        <img src={logo} alt="logo" />
      </div>

      <LinkButton to="Overview" className={"sideBar__btn"}>
        Overview
      </LinkButton>

      <LinkButton to="Transactions" className={"sideBar__btn"}>
        Transactions
      </LinkButton>

      <LinkButton to="Budgets" className={"sideBar__btn"}>
        Budgets
      </LinkButton>

      <LinkButton to="Pots" className={"sideBar__btn"}>
        Pots
      </LinkButton>

      <LinkButton to="RecurringBills" className={"sideBar__btn"}>
        Recurring Bills
      </LinkButton>
    </div>
  );
}
export default SideBar;
