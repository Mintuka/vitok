import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { bindActionCreators } from "redux";
import Footer from "./components/footer/footer";
import Form from "./components/form/NewPost";
import NavBar from "./components/navbar/NavBar";
import NoPage from "./components/NoPage/NoPage";
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

  useEffect(() => {
    getAllPosts()
  },[])
  
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Posts posts={ posts || [] } />} />
        <Route path="/form" element={<Form />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/update/:id" element={<UpdatePost />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
    )
};

export default App;