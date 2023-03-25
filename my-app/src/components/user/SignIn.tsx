import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userActions } from "../../state";
import { FcGoogle } from "react-icons/fc"
import { IoLogoTiktok } from "react-icons/io5"
import { Link } from "react-router-dom";

const SignIn = () => {
    const [user, setUser] = useState({email:'',password:''})
    const dispatch = useDispatch();
    const { logInUser } = bindActionCreators(userActions, dispatch)
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        logInUser({...user})
    }

  return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <IoLogoTiktok/>
                    <h5 className="mx-1">Vitok</h5> 
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                                <input type="email" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 outline-none focus:border-blue-500" placeholder="mintuka2015@gmail.com" required value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 outline-none focus:border-blue-500" required value={user.password} onChange={e => setUser({...user, password: e.target.value})}/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <Link to={'/forgot-password'} className="text-sm font-medium text-blue-400 hover:underline dark:text-primary-500 cursor-pointer">Forgot password?</Link>
                            </div>
                            <button className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <div className="flex justify-around items-center">
                                <div className="h-1 w-1/2 border-b border-gray-300"></div>
                                <h5 className="text-gray-400 mx-2">or</h5>
                                <div className="h-1 w-1/2 border-b border-gray-300"></div>
                            </div>
                            <div className="flex w-full justify-center border border-gray-200 rounded-lg py-2">
                                <FcGoogle size={20}/>
                                <button className="text-black text-sm mx-1"> Sign in with Google</button>
                            </div>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? 
                                <a className="font-medium text-blue-400 hover:underline dark:text-primary-500">
                                    <Link to={"/signup"}> Sign Up</Link>
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
};

export default SignIn;