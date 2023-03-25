import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { bindActionCreators } from "redux";
import Form from "./components/form/NewPost";
import NoPage from "./components/NoPage/NoPage";
import Details from "./components/post/Details";
import Posts from "./components/post/Posts";
import UpdatePost from "./components/post/UpdatePost";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import { postActions } from "./state";
import { ActionType } from "./state/action_types/types";
import { RootState } from "./state/reducers";
import jwt_decode from "jwt-decode";

const App = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state: RootState) => state.post)
  const { email } = useSelector((state: RootState) => state.user)
  if (!email && localStorage.getItem('user') !== null){
    const userData = JSON.parse(localStorage.getItem('user') || '')
    if (userData.email){
        const decoded = jwt_decode(userData.token)
        dispatch({
            type: ActionType.LOGIN_USER,
            payload: {...userData, decoded}
        })
    }
  }
  const { getAllPosts } = bindActionCreators(postActions, dispatch)
  useEffect(() => {
    email && getAllPosts()
  },[])
  
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Posts posts={ posts || [] } />} />
        <Route path="/form" element={<Form />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/update/:id" element={<UpdatePost />} />
        <Route path="/post/:id" element={<Details/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>

    </BrowserRouter>
    )
};

export default App;