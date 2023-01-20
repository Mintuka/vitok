import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actions } from "../../state"
import { RootState } from "../../state/reducers"
import Post,{postProps} from "./SinglePost";


const Posts = () => {

  const posts = useSelector((state: RootState) => state.post)
  const dispatch = useDispatch();
  const { getAll } = bindActionCreators(actions, dispatch)
  useEffect(() => {
    getAll()
  },[])
  return (
      <div className="flex flex-wrap justify-evenly">
        {
          posts.map((post: postProps, index:number) => <Post key={index} creater={post.creater} tags={post.tags} title={post.title} message={post.message} like={post.like}></Post>)
        }
      </div>
    )
};

export default Posts;