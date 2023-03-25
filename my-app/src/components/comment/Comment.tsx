import { formatDistanceToNow } from "date-fns/esm";
import { read } from "fs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { commentActions } from "../../state";
import { RootState } from "../../state/reducers";

const Comment = ({ comment, created_at, post, creator, _id }: {comment: string, created_at:string, post: string, creator: string, _id: string}) => {
  let { firstName, lastName } = useSelector((state: RootState) => state.user)
  console.log('f',firstName,'l',lastName)
  const [readMore, setReadMore] = useState(false)
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch()
  const { deleteComments, updateComments } = bindActionCreators(commentActions, dispatch)
  const commentCreated = formatDistanceToNow(new Date(created_at))
  const [updatedComment, setComments] = useState(comment)
  
  const updateComment = () => {
    if (updatedComment){
      updateComments(_id, {updatedComment})
    } 
    setEdit(false)
  }

  return (
   <div className="flex m-2">
        <img src="/minte.jpg" className="w-10 h-10 rounded-full m-1" alt="" />
        <div className="m-1">
          <span className="text-sm font-semibold">{firstName} {lastName}</span> 
          <span className="text-gray-400 text-sm mx-1">{commentCreated}</span>
          {readMore ? 
                      <div>
                        <p className="bg-white my-1 text-sm">{ comment }</p> 
                        {comment.length > 180 && <button className="font-semibold text-sm text-blue-400" onClick={
                          () => setReadMore(readMore => !readMore)
                        }>Show less</button>}
                      </div>
                    :
                      <div>
                        <p className="bg-white my-1 text-sm">{ comment.substring(0,180) }</p>
                        {comment.length > 180 && <button className="font-semibold text-sm text-blue-400" onClick={
                          () => {setReadMore(readMore => !readMore); console.log('readMore', readMore)}
                        }>Read more</button>}
                      </div>
                      }
        </div>
        <div className="flex justify-around">
            {/* {!edit && <button onClick={() => setEdit(true)}>edit</button>}
            {!edit && <button onClick={() => deleteComments(_id)}>delete</button>}

            {edit &&
            <div>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="comment" placeholder="write comment" value={updatedComment} onChange={(e) => setComments(e.target.value)}/>
                <button className="border bg-blue-500 text-white p-2" onClick={ updateComment }>edit</button>
            </div>} */}
        </div>
   </div> 
  )
};

export default Comment;
