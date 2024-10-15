/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { openDeleteModal, openEditPotModal } from "./modalSlice"; // Import the closeModal action

function EditModal({ item }) {
  const { isEditOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  // Function to handle backdrop clicks
  //   const handleClose = () => {
  //     dispatch(closeModal());
  //   };

  if (!isEditOpen) return null;

  return (
    <div className="bg-[#ffffff] shadow-xl  right-6 w-content rounded-xl absolute text-3xl flex flex-col gap-6 items-start p-6 top-2 ">
      <button
        onClick={() => {
          dispatch(openEditPotModal({ item }));
        }}
      >
        Edit Pot
      </button>
      <button
        onClick={() => {
          dispatch(openDeleteModal({ item }));
        }}
        className=" text-red-500 "
      >
        Delete Pot
      </button>
    </div>
  );
}

export default EditModal;
