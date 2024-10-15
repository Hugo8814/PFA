/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { openAddPotModal } from "./modalSlice";

function Header({ title, btn, text }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-6xl font-bold">{title}</h1>
      {btn && (
        <button
          onClick={() => {
            dispatch(openAddPotModal());
          }}
          className="bg-black text-white text-3xl font-semibold p-6 rounded-xl"
        >
          {text}
        </button>
      )}
    </div>
  );
}

export default Header;
