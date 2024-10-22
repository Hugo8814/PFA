/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./modalSlice";
import { deletePot } from "../Pages/pots/potSlice";
import { deleteBudget } from "../Pages/budgets/budgetSlice";

function DeleteModal({ item, budget, pot }) {
  const { isDeleteOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (!isDeleteOpen) return null;
  const id = item.id;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-16 rounded-[2rem] w-[28%] h-content flex flex-col gap-14">
        <div className=" flex justify-between items-center">
          <div className="text-5xl font-bold">
            Delete &quot;{item.name || item.category}&quot;
          </div>
          <div onClick={() => dispatch(closeModal())} className="text-6xl ">
            &times;
          </div>
        </div>
        <div className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          nesciunt voluptates. Mollitia similique eos pariatur quae rerum
          facere.
        </div>
        <button
          onClick={() => {
            if (pot) dispatch(deletePot({ id }));
            if (budget) dispatch(deleteBudget({ id }));
          }}
          className="flex justify-center items-center bg-[#BE6C49] text-white text-3xl font-semibold p-6 rounded-xl"
        >
          Yes, Confirm
        </button>
        <button
          onClick={() => dispatch(closeModal())}
          className="flex justify-center items-center  text-gray-500 text-3xl  px-6 rounded-xl"
        >
          No , Go Back
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
