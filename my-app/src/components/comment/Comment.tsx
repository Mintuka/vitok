import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { commentActions } from "../../state";
import {   } from "../../state/action_creators/comment_actions/actions";

const Comment = ({ comment }:{comment: {comment: string, post: string, creator: string, _id: string}}) => {

  const dispatch = useDispatch()
  const { } = bindActionCreators(commentActions, dispatch)
  
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
