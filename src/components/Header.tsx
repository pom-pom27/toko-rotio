import { Link, NavLink } from "react-router-dom";

interface IHeader {}

const Header = ({}: IHeader) => {
  return (
    <nav className=" w-full bg-white">
      <div className=" max-w-7xl mx-auto flex justify-between bg-white">
        <Link to={`/`}>
          <h1 className="py-5 font-bold text-2xl pl-2 xl:pl-0">Toko Rotio</h1>
        </Link>
        <div className="flex">
          <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : "flex justify-center items-center px-2 font-medium"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to={`pesanan-form`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : "flex justify-center items-center px-2 font-medium"
            }
          >
            Pesanan
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
