import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-rose-500">
        Cinebuddy
      </Link>

      <div className="flex items-center space-x-6">
        <Link
          to="/watch"
          className="hover:text-yellow-400 transition-colors font-medium"
        >
          Watch Parties
        </Link>

        <Link
          to="/reviews"
          className="hover:text-yellow-400 transition-colors font-medium"
        >
          Reviews
        </Link>

        <Link
          to="/account"
          className="hover:text-yellow-400 transition-colors"
        >
          <UserIcon className="h-6 w-6 text-white hover:text-yellow-400" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
