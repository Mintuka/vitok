import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actions } from "../../state"

import {BiDotsVertical} from 'react-icons/bi'
import {AiOutlineLike} from 'react-icons/ai'
import { Link } from 'react-router-dom'
export interface postProps {_id: String,creator:String, tags:String[], title:String, selectedFile:String, message:String,likeCount:String}

interface Props{
  like: React.ElementType
}

const handleBiDot = (setChange:any, setBiDot:any) => {
  setChange('visible absolute right-1 border cursor-pointer')
  setBiDot('invisible m-0')
}

const Post = ({_id, creator, tags, title, message,likeCount}:postProps) => {
  const dispatch = useDispatch();
  const { deletePosts } = bindActionCreators(actions, dispatch)
  const [BiDotsClass, setBiDotsClas] = useState('absolute right-1 m-1 pointer cursor-pointer')
  const [change, setChange] = useState('invisible')
  return (
        <div className="m-3 border w-64">
            <div className="relative border" >
              <BiDotsVertical className={BiDotsClass} size={20} onClick={() => handleBiDot(setChange,setBiDotsClas)}/>
              <div className={change}>
                <Link to={`/update/${_id}`} className='text-green-300 border'>update</Link>
                <div onClick={() => deletePosts(_id)} className='text-red-400 border'>delete</div>
              </div>
              <h4 className='p-2'>{creator}</h4>
              <h6 className='p-2'>2 hours ago</h6>
              <img className="p-2" src="/logo192.png" alt="img" />
            </div>
            <div>
              <h5 className='p-2'>{tags}</h5>
              <h3 className='p-2'>{title}</h3>
              <p className='p-2'>{message}</p>
              <div className='p-2 flex items-center'>
                <AiOutlineLike className='' size={20}/>
                <h6 className='mx-2'>{likeCount}</h6>
              </div>
            </div>
        </div>
    )
};

export default Post;
