import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { commentActions } from "../../state";
import { RootState } from "../../state/reducers";
import Comment from "./Comment";

const Comments = ({ post, creator }:{post: String, creator: string}) => {
  
  const { comments } = useSelector((state: RootState) => state.comment)
  const postComments = comments.filter((comment) => comment.post === post)
  const dispatch = useDispatch();
  const { createComments, getAllComments } = bindActionCreators(commentActions, dispatch)
  const [comment, setComment] = useState('')
  const [commentClass, setCommentClass] = useState("bg-gray-100 text-gray-300 font-semibold p-2")
  
  const createComment = () => {
    if (comment){
      createComments({comment, post, creator})
    } 
  }

  const handleChange = (e:any) => {
    setComment(e.target.value)
    if (e.target.value){
      setCommentClass("bg-blue-400 text-white font-semibold p-2")
    }else{
      setCommentClass("bg-gray-100 text-gray-300 font-semibold p-2")
    }
  }
  console.log('comments',comments)
  useEffect(() => {
    getAllComments()
  },[])

  return (
    <div>
      <div className="mt-3">
        <label className="text-gray-500" htmlFor="comment">{postComments.length === 1 ? '1 Comment': `${postComments.length} Comments`}</label>
        <div className="flex">
          <input className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-b-1 focus:border-black" type="text" name="comment" placeholder="write comment" value={comment} onChange={(e) => handleChange(e)}/>
          <button className={commentClass} onClick={ createComment }>Comment</button>
        </div>
      </div>
      <div>
        {
          postComments.map((comment, index: number) =>  <Comment key={index} {...comment}/>)          
        }
      </div>

    </div>
  )
};

export default Comments;