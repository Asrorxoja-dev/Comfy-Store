import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/fireBaseConfig";
import { useSelector } from "react-redux";
function Header() {
  const {user} = useSelector((state)=>state.userState)
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-content flex justify-center sm:justify-end">
        
          <div className="flex gap-x-6 justify-center items-center pr-4 sm:justify-end">
           {!user && <>
            <Link to="/login" className="link link-hover text-xs sm:textsm">
              sign in / Guest user
            </Link>
            <Link to="/register" className="link link-hover  text-xs sm:textsm">
              Create an account
            </Link>
           </>}
           {user && <>
            <p>Hello, {user.displayName}</p>
            <button onClick={() => signOut(auth)} className="btn btn-sm">Logout</button>
           </>}
          </div>
       
      </div>
    </header>
  );
}

export default Header;
