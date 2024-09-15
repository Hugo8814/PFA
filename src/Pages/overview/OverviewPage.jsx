import { Link } from "react-router-dom";

function OverviewPage() {
  return (
    <div className="main">
      <h1 className="title">Overview</h1>
      <div className="main2">
        <div className="box1">
          <h3 className="subtitle">Current balance</h3>
          <div className="box__bal">$4,836.00</div>
        </div>
        <div className="box2">
          <h3 className="subtitle">Income</h3>
          <div className="box__bal">$3,814.25</div>
        </div>
        <div className="box2">
          <h3 className="subtitle">Expense</h3>
          <div className="box__bal">$1,700.50</div>
        </div>
      </div>
      <div className="main3">
        <div className="box4">
          <div className="potsWidget">
            <div className="potsWidget__titleBox">
              <div className="potsWidget__title">Pots</div>
              <Link to="/pots" className="linkBtn">
                View all
              </Link>
            </div>
          </div>
          <div className="transactionsWidget"></div>
        </div>
        <div className="box5">
          <div className="budgetsWidget"></div>
          <div className="RecurringWidget"></div>
        </div>
      </div>
    </div>
  );
}
export default OverviewPage;
