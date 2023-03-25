import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ActionType } from "../../state/action_types/types";
import { RootState } from "../../state/reducers";

const NavBar = () => {
    const dispatch = useDispatch()
    let { email } = useSelector((state: RootState) => state.user)
    
    const logout = () => {
        if (localStorage.getItem('user'))
            localStorage.removeItem('user')
        dispatch({
            type: ActionType.LOG_OUT,
            payload: ''
        })
  }


  return (
        <nav className="w-full flex items-center justify-between">
            <div className="flex items-center text-black mr-6">
                <img src="/tiktokLogo.png" className="w-20 h-15 " alt="logo" />
                <span className="font-bold text-2xl">Vitok</span>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm mx-auto">
                    <button className="font-semibold text-black-200 hover:text-orange m-3">
                        <Link to={"/"}>Home</Link>
                    </button>
                    <button className="font-semibold text-black-200 hover:text-orange m-3">
                        <Link to={"/form"}>Post</Link>
                    </button>
                    <button className="font-semibold text-black-200 hover:text-orange m-3">
                        Products
                    </button>
                    <button className="font-semibold text-black-200 hover:text-orange m-3">
                        Resources
                    </button>
                    <button className="font-semibold text-black-200 hover:text-orange m-3">
                        Credit
                    </button>
                </div>
                <div className="mx-2">
                    {!email && <button className="text-sm font-bold m-2">
                        <Link to={"/signin"}>Log in</Link>
                    </button>}
                </div>
                <div className="mx-2">
                    {!email && <button className="px-4 py-2 bg-black text-sm font-semibold text-white rounded-full">
                        <Link to={"/signup"}>Sign up</Link>
                    </button>}
                </div>
            {email && <div className="m-2">{email}</div> }
            {email && <div className="mx-4"><Link to={'/'} onClick={logout}>Log Out</Link></div>}
            </div>
        </nav>
    )
};

export default NavBar;
