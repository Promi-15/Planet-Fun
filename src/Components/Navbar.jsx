const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-5 py-5 text-white    backdrop-blur-[10px] bg-[rgba(149,86,86,0.5)] rounded-xl p-6 absolute top-2">
      <div className="">
        <p> Planet Fun</p>
      </div>
      <div className="">
        <ul className="flex flex-row justify-around gap-6">
          <li>Home</li>
          <li>Mysteries</li>
          <li>Comets</li>
          <li>Moon X</li>
          <li>Dark Orbit</li>
          <li>Rogue</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
