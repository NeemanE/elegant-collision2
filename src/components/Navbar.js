const Navbar = () => (
  <div className="navbar sticky top-0 z-50 bg-neutral text-white">
    <div className="flex-1">
      <a href="/" className="btn btn-ghost normal-case text-xl text-red-500">
        Elegant Collision
      </a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/repairs">Repairs</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
