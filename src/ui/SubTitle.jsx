/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import iconCaretRight from "../../assets/images/icon-caret-right.svg";

function SubTitle({ children, to }) {
  return (
    <div className="flex justify-between p-5 w-full">
      <div className="text-4xl font-bold">{children}</div>
      <Link to={to} className="text-gray-500 text-2xl flex ">
        View All{" "}
        <img src={iconCaretRight} alt="Right arrow" className="w-2 ml-4" />
      </Link>
    </div>
  );
}

export default SubTitle;
