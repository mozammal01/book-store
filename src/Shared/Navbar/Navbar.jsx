import { Link } from 'react-router-dom';
import navImg from '../../assets/Navbar/navber.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.error(err);
      })
  }
  const navLinks = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/addBooks'>Add Book</Link></li>
    <li><Link to='/allBooks'>All Books</Link></li>
    <li><Link to='/borrowedBooks'>Borrowed Books</Link></li>
  </>

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <img src={navImg} width={70} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-base">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <button onClick={handleLogOut} className="btn bg-orange text-white border-2 border-orange font-bold transition ease-in-out delay-150 duration-300 hover:scale-110 hover:text-orange hover:border-orange hover:bg-white">LogOut</button> :
            <Link to='/login' className="btn btn-outline text-orange border-2 font-bold transition ease-in-out delay-150 duration-300 hover:scale-110 hover:text-white hover:border-orange hover:bg-orange">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;