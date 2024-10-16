/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { openAddPotModal, openAddBudgetModal } from "./modalSlice";

function Header({ title, btn, text, budget, pot, transaction }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-6xl font-bold">{title}</h1>
      {btn && (
        <button
          onClick={() => {
            if (budget) {
              dispatch(openAddBudgetModal());
            } else if (pot) {
              dispatch(openAddPotModal());
            } else if (transaction) {
              dispatch();
            }
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
