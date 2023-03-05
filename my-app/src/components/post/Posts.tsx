import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actions } from "../../state"
import { RootState } from "../../state/reducers"
import Post,{postProps} from "./SinglePost";


const Posts = () => {

  const posts = useSelector((state: RootState) => state.post)
  const comments: object[] = useSelector((state: RootState) => state.comment)
  const dispatch = useDispatch();
  const { getAll, getAllComments } = bindActionCreators(actions, dispatch)
  useEffect(() => {
    getAll()
    getAllComments()
  },[])
  console.log(posts)
  return (
      <div className="flex flex-wrap justify-evenly">
        {
          posts.map((post: postProps, index:number) => <Post key={index} _id={post._id} comments={comments} creator={post.creator} tags={post.tags} title={post.title} message={post.message} likeCount={post.likeCount} selectedFile={post.selectedFile}></Post>)
        }
      </div>
    )
};

export default Posts;