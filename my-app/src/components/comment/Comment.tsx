import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { commentActions } from "../../state";

const Comment = ({ comment, post, creator, _id }: {comment: string, post: string, creator: string, _id: string}) => {

  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const { deleteComments, updateComments } = bindActionCreators(commentActions, dispatch)
  
  const [updatedComment, setComments] = useState(comment)
  
  const updateComment = () => {
    if (updatedComment){
      console.log('Comment-Component-Update',updatedComment)
      updateComments(_id, {updatedComment})
    } 
    setEdit(false)
  }

  return (
   <div className="border border-black">
        {!edit && <div>{ creator }</div>}
        {!edit && <p className="background bg-slate-300">{ comment }</p>}
        <div className="flex justify-around">
            {!edit && <button className="border" onClick={() => setEdit(true)}>edit</button>}
            {!edit && <button className="border" onClick={() => deleteComments(_id)}>delete</button>}

            {edit &&
            <div>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="comment" placeholder="write comment" value={updatedComment} onChange={(e) => setComments(e.target.value)}/>
                <button className="border bg-blue-500 text-white p-2" onClick={ updateComment }>edit</button>
            </div>}
        </div>
   </div> 
  )
};

export default Comment;
