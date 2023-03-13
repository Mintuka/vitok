import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { postActions } from "../../state"
import { BiCommentDetail, BiDotsVertical } from 'react-icons/bi'
import { FaShare } from 'react-icons/fa'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import Comments from "../comment/Comments";
import { RootState } from "../../state/reducers";
export interface postProps {_id: String,creator:String, tags:String[], title:String, selectedFile:String, message:String,likeId:any}

const handleBiDot = (setChange:any, setBiDot:any) => {
  setChange('visible absolute right-1 border cursor-pointer')
  setBiDot('invisible m-0')
}

const Post = ({_id, creator, tags, title, message,likeId}:postProps) => {
  const { userId } = useSelector((state: RootState) => state.user)
  const [likeCount, setLikeCount] = useState(likeId && likeId?.userId ? likeId?.userId?.length : 0)
  const [like, setLike] = useState(likeId && likeId?.userId ? likeId?.userId?.filter((id:any) => id === userId).length > 0: false)

  const dispatch = useDispatch();
  const { deletePosts, likePosts } = bindActionCreators(postActions, dispatch)

  const [commentClass, setCommentClass] = useState('invisible')
  const [BiDotsClass, setBiDotsClas] = useState('absolute right-1 m-1 pointer cursor-pointer')
  const [change, setChange] = useState('invisible')
  const navigate = useNavigate()

  return (
        <div className="m-3 border">
            <div className="relative border" >
              <BiDotsVertical className={ BiDotsClass } size={20} onClick={() => handleBiDot(setChange,setBiDotsClas)}/>
              <div className={change}>
                <Link to={`/update/${_id}`} className='text-green-300 border'>update</Link>
                <div onClick={() => deletePosts(_id)} className='text-red-400 border'>delete</div>
              </div>
              <h4 className='p-2'>{creator}</h4>
              <h6 className='p-2'>2 hours ago</h6>
              <img className="p-2" src="/people.png" alt="img" />
            </div>
            <div>
              <h5 className='p-2'>{tags}</h5>
              <h3 className='p-2'>{title}</h3>
              <p className='p-2'>{message}</p>
              <div className='p-2 flex items-center justify-around'>
                <div className='p-2 flex items-center'>
                  {
                    like ? <AiFillLike onClick={() => {
                                if (!userId){
                                  navigate('/signin')
                                  return
                                }
                                likePosts(_id); 
                                setLike(false); 
                                setLikeCount((likeCount:number) => likeCount-1)
                              }}/> : 
                           <AiOutlineLike onClick={() => { 
                                if (!userId){
                                  navigate('/signin')
                                  return
                                }
                                likePosts(_id); 
                                setLike(true); 
                                setLikeCount((likeCount:number) => likeCount+1)}}/>
                  }
                  <h6 className='mx-2'>{ likeCount }</h6>
                </div>
                <BiCommentDetail onClick={() => setCommentClass('visible border')}/>
                <FaShare/>
              </div>
              <div className={commentClass}>
                {
                    <Comments post={ _id } creator={ userId }/>
                }
              </div>
            </div>
        </div>
    )
};

export default Post;
