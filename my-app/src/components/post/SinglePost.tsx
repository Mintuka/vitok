import React from 'react'
import {BiDotsVertical} from 'react-icons/bi'
import {AiOutlineLike} from 'react-icons/ai'
export interface postProps {creator:String, tags:String[], title:String, message:String,likeCount:String}

interface Props{
  like: React.ElementType
}
const Post = ({creator, tags, title, message,likeCount}:postProps) => {
  return (
        <div className="m-3 border w-64">
            <div className="relative border" >
              <BiDotsVertical className='absolute right-1 m-1' size={20}/>
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
