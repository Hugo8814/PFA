import { useSelector } from "react-redux";

function AddModal() {
  const { isOpen, content } = useSelector((state) => state.addModal);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 ">
      <div className="bg-white p-16 rounded-[2rem] w-[30%] h-[50%] flex flex-col gap-12">
        <div className=" flex justify-between items-center">
          <div className="text-5xl font-bold">Add to &quot;Temp-data&quot;</div>
          <div className="text-6xl "> &times; </div>
        </div>
        <div className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          nesciunt voluptates. Mollitia similique eos pariatur quae rerum
          facere.
        </div>
        <div className="flex justify-between items-center ">
          <div className="text-gray-500 text-2xl">New Amount</div>
          <div className="font-bold text-6xl"> $559.00</div>
        </div>
        <span className="flex justify-start items-center rounded-full h-8  bg-[#F8F4F0]">
          <span className="w-40 bg-black h-full border-r-[#F8F4F0] border-r-2 rounded-l-full"></span>
          <span className="w-72 bg-green-700 h-full rounded-r-full"></span>
        </span>
      </div>
    </div>
  );
}

export default AddModal;
