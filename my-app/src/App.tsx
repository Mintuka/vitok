import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { bindActionCreators } from "redux";
import Footer from "./components/footer/footer";
import Form from "./components/form/NewPost";
import NavBar from "./components/navbar/NavBar";
import NoPage from "./components/NoPage/NoPage";
import Details from "./components/post/Details";
import Posts from "./components/post/Posts";
import UpdatePost from "./components/post/UpdatePost";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import { postActions } from "./state";
import { RootState } from "./state/reducers";

const App = () => {
  const { posts, isLoading } = useSelector((state: RootState) => state.post)
  const dispatch = useDispatch();
  const { getAllPosts } = bindActionCreators(postActions, dispatch)
  console.log('posts-App',posts)
  useEffect(() => {
    getAllPosts()
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