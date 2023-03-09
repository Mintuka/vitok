import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { postActions } from "../state";

export const useLike = (userId:string, _id:String, likeId: {userId: Array<any>} ) => {

    const [likeCount, setLikeCount] = useState(likeId && likeId?.userId ? likeId?.userId?.length : 0)
    const [like, setLike] = useState(likeId && likeId?.userId ? likeId?.userId?.filter((id:any) => id === userId).length > 0: false)
    const dispatch = useDispatch();
    const { likePosts } = bindActionCreators(postActions, dispatch)
    const navigate = useNavigate()

    if (!userId){
        navigate('/signin')
        return
      }
      likePosts(_id); 
      if (like){
        setLike(false); 
        setLikeCount((likeCount:number) => likeCount-1)
      }else{
        setLike(true); 
        setLikeCount((likeCount:number) => likeCount+1)
      }
    
    return {like, likeCount}
}
