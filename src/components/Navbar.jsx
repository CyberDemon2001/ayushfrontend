const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">
          Ayush Rawat
        </h1>
        <ul className="flex gap-6 font-medium">
          <li><a href="#services">Services</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#contact" className="text-green-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
