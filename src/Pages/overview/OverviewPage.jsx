function OverviewPage() {
  return (
    <div>
      <div className="main">
        <h1 className="title">Overview</h1>
        <div className="main2">
          <div className="box1">
            <h3 className="subtitle">Current balance</h3>
            <div className="box1__bal">$4,836.00</div>
          </div>
          <div className="box2 ">
            <h3 className="subtitle">Income</h3>
            <div className="box1__bal">$3,814.25</div>
          </div>
          <div className="box2">
            <h3 className="subtitle">Expense</h3>
            <div className="box1__bal">$1,700.50</div>
          </div>
        </div>
        <div className="main3"></div>
      </div>
    </div>
  );
}
export default OverviewPage;
