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
  
  const createComment = () => {
    if (comment){
      createComments({comment, post, creator})
    } 
  }

  useEffect(() => {
    getAllComments()
  },[])

  return (
    <div>
      <div>
        <label htmlFor="comment">Comment</label>
        <div className="flex">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="comment" placeholder="write comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
          {true ? <button className="border bg-blue-500 text-white p-2" onClick={createComment}>comment</button> : <button>edit</button>}
        </div>
      </div>
      <div>
        {
          postComments.map((comment, index: number) =>  <Comment key={index} comment={comment}/>)          
        }
      </div>

    </div>
  )
};

export default Comments;