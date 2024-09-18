function Header({ title, btn, text }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-6xl font-bold">{title}</h1>
      {btn && (
        <button className="bg-black text-white text-3xl font-semibold p-6 rounded-xl">
          {text}
        </button>
      )}
    </div>
  );
}

export default Header;
