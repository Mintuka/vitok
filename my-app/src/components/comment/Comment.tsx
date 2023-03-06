import React, { Key } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
/*
1.input to write comment and post
2.let's edit comment and post
3.list of comments
4.delete comments
?mine comments -> to delete,to edit.... 3 dot 
*/
const Comment = () => {
  let {comments, errorMessage}:{comments: Array<any>, errorMessage: string} = useSelector((state: RootState) => state.comment)
  return (
    <div>
      {
        errorMessage && <div>{ errorMessage }</div>
      }
      
      <div>
        <label htmlFor="comment">Comment</label>
        <input type="text" name="comment" />
        {true ? <button>comment</button> : <button>edit</button>}
      </div>
      <div>
        {
          comments.map((comment:{comment: string}, index: number) =>  <div key={index}>{comment.comment}</div>)          
        }
      </div>

    </div>
  )
};

export default Comment;
