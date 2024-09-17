import { Link } from "react-router-dom";
import iconCaretRight from "../../../Temp/assets/images/icon-caret-right.svg";

function SubTitle({ children }) {
  return (
    <div className="flex justify-between p-6 w-full">
      <div className="text-3xl font-bold">{children}</div>
      <Link to="/pots" className="text-gray-500 text-2xl flex ">
        See Details{" "}
        <img src={iconCaretRight} alt="Right arrow" className="w-2 ml-4" />
      </Link>
    </div>
  );
}

export default SubTitle;
