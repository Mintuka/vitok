import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Form from "./components/form/NewPost";
import NavBar from "./components/navbar/NavBar";
import NoPage from "./components/NoPage/NoPage";
import Posts from "./components/post/Posts";
import UpdatePost from "./components/post/UpdatePost";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Posts />} />
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