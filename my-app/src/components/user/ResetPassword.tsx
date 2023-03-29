import React, { useState } from "react";
import { IoLogoTiktok } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { resetPassword } from "../../api/api";
import { userActions } from "../../state";

type Props = {};

const ResetPassword = (props: Props) => {
    const [user, setUser] = useState({email:'',password:''})
    const [confirmPass, setConfirmPass] = useState('')
    const { token, id} = useParams()
    const dispatch = useDispatch();
    const { resetUserPassword } = bindActionCreators(userActions, dispatch)
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        localStorage.setItem('user', JSON.stringify({email: user.email, token}))
        resetUserPassword({...user})
    }

    return(
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <IoLogoTiktok/>
                        <h5 className="mx-1">Vitok</h5> 
                    </a>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Change Password
                    </h2>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required value={user.email} onChange={(e) => setUser({...user, email:e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={user.password} onChange={(e) => setUser({...user, password:e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="newsletter" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
                    </form>
                </div>
            </div>
        </section>
        )
    };

    export default ResetPassword;
