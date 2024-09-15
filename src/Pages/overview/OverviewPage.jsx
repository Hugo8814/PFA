function OverviewPage() {
  return (
    <div>
      <div className="main">
        <h1 className="title">Overview</h1>
        <div className="main2">
          <div className="current">
            <h3>Current balance</h3>
            <div>$4,836.00</div>
          </div>

          <div className="income">
            <h3>Income</h3>
            <div>$3,814.25</div>
          </div>

          <div className="expense">
            <h3>Expense</h3>
            <div>$1,700.50</div>
          </div>
        </div>
        <div className="main3"></div>
      </div>
    </div>
  );
}

export default OverviewPage;
