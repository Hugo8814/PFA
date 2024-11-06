function Pot({ data }) {
  return (
    data &&
    data
      .map((item, index) => (
        <div key={index} className=" w-[11rem] flex  max-500:w-fit">
          <span
            className={`h-full w-2 rounded-xl mr-6 max-500:mr-2 `}
            style={{ backgroundColor: item.theme }} // Apply dynamic hex color here
          ></span>
          <div>
            <p className="text-gray-400 text-xl">{item.category}</p>
            <p className="text-3xl font-bold">${item.maximum}</p>
          </div>
        </div>
      ))
      .slice(0, 4)
  );
}

export default Pot;
