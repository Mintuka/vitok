import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { userActions } from "../../state";
import { RootState } from "../../state/reducers";
import { Navigate } from 'react-router-dom'

const SignUp = () => {
  const [user, setUser] = useState({email:'',password:'',firstName:'',lastName:''})
  let { errorMessage, email } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch();
  const { createUser } = bindActionCreators(userActions, dispatch)
  const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault()
      createUser({...user})
  }
  
  return (
    <div>
        {
            email && <Navigate to={'/'}/>
        }
        {
            errorMessage && <div>{errorMessage}</div>
        }

        <form className="w-full max-w-sm m-20" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                    firstName
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 required border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jane Doe" value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})}/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                    lastName
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 required appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jane Doe" value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})}/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                    Email
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none required border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jane Doe" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                    Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 required border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="*********" value={user.password} onChange={(e) => setUser({...user, password:e.target.value})}/>
                </div>
            </div>

            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Sign Up
                    </button>
                </div>
            </div>
        </form>
    </div>

    )
};

export default SignUp;