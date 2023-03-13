import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { postActions } from "../../state"
import { BiCommentDetail } from 'react-icons/bi'
import { FaShare } from 'react-icons/fa'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Comments from "../comment/Comments";
import { RootState } from "../../state/reducers";
export interface postProps {_id: String,creator:String, tags:String[], title:String, selectedFile:String, message:String,likeId:any}

const Post = ({_id, creator, tags, title, message,likeId}:postProps) => {
  const { userId } = useSelector((state: RootState) => state.user)
  const [likeCount, setLikeCount] = useState(likeId && likeId?.userId ? likeId?.userId?.length : 0)
  const [like, setLike] = useState(likeId && likeId?.userId ? likeId?.userId?.filter((id:any) => id === userId).length > 0: false)

  const dispatch = useDispatch();
  const { likePosts } = bindActionCreators(postActions, dispatch)

  const [commentClass, setCommentClass] = useState('invisible')
  const navigate = useNavigate()

  return (
        <div className="m-3 bg-white border rounded-lg overflow-hidden">
            <img className="w-full" src="/minte.jpg" alt="img" />
            <div className="px-8 py-6 relative">
              <h3 className='font-semibold text-lg'>{title}</h3>
              <p className='text-sm text-gray-600 break-words lowercase mt-1'>{message.substring(0,100)} <span className="font-bold">...</span></p>
              <div className='flex items-center justify-between mt-2'>
                {/* <div className='flex items-center'>
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
                  <h6 className='text-sm'>{ likeCount }</h6>
                </div>
                <BiCommentDetail onClick={() => setCommentClass('visible border')}/>
                <FaShare/> */}
              </div>
              {/* <div className={commentClass}>
                {
                    <Comments post={ _id } creator={ userId }/>
                }
              </div> */}
              <div className="absolute top-7 right-8 font-thin text-sm">20 Jan 2023</div>
              <div className="flex justify-start items-center">
                <img className="rounded-full w-8 h-8 p-1 hover:w-10 hover:h-10 shadow-lg border" src="logo192.png" alt="logo" />
                <p className="text-gray-500 text-sm m-1">Mintesnot Alemayehu</p>
              </div>
            </div>
        </div>
    )
};

export default Post;
