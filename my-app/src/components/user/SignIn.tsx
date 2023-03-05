import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actions } from "../../state";
import { RootState } from "../../state/reducers";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let state = useSelector((state: RootState) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { logInUser } = bindActionCreators(actions, dispatch)
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        logInUser({email, password})

        if (state[1] === 200){
            localStorage.setItem('user', JSON.stringify(state[0]))
            state = []
            navigate('/')
        }
        else{
            setEmail('')
            setPassword('')
        }
    }

    console.log('s',state)
  return (
        <div className="w-full max-w-xs ">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>            
                
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
    )
};

export default SignIn;