import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../state";

const Comment = ({ comment }:{comment: {comment: string, post: string, creator: string, _id: string}}) => {

  const dispatch = useDispatch()
  const { deletePosts, likePosts } = bindActionCreators(actions, dispatch)
  
  return (
   <div className="border border-black">
        <p className="background bg-slate-300">{ comment.comment }</p>
        <div className="flex justify-around">
          <button>select</button>
          <button>edit</button>
          <button>delete</button>
        </div>
   </div> 
  )
};

export default Comment;
