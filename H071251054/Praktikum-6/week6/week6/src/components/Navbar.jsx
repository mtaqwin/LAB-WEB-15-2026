function Navbar() {
  const menu = ["Home", "About", "Skills", "Gallery"];

  return (
    <nav className="bg-blue-950 text-white p-4">
      <h1 className="text-xl font-bold text-yellow-400">
        My Portfolio Gueh
      </h1>

      <div className="flex flex-wrap gap-4 mt-3">
        {menu.map((item, index) => (
          <button
            key={index} 
            onClick={() => console.log(item)}
            className="hover:text-yellow-400"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

