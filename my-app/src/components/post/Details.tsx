import React, { useState } from "react";
import {formatDistanceToNow} from 'date-fns'
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { postActions } from "../../state";
import { RootState } from "../../state/reducers";
import { TypesDetail } from "../../types/details";
import Comments from "../comment/Comments";
import Baselayout from "../common/Baselayout";

const Details = () => {

    const { id } = useParams()
    const { posts } = useSelector((state: RootState) => state.post)
    const post:any = posts.filter(post => post._id === id)
    const otherPosts = posts.filter(post => post._id !== id)
    const { _id, likeId, title, message, tags, selectedFile, creator }:TypesDetail = post && post[0]
    const { userId } = useSelector((state: RootState) => state.user)
    const [likeCount, setLikeCount] = useState(likeId && likeId?.userId ? likeId?.userId?.length : 0)
    const [like, setLike] = useState(likeId && likeId?.userId ? likeId?.userId?.filter((id:any) => id === userId).length > 0: false)
    const [readMore, setReadMore] = useState(false)
    const time = formatDistanceToNow((new Date(post[0].createdAt)))

    const dispatch = useDispatch();
    const { likePosts } = bindActionCreators(postActions, dispatch)
    const navigate = useNavigate()

    return (
            <Baselayout>
            {
                posts && 
                <div className="flex ">
                    <div className="w-3/5 m-3 mt-6">
                        <div className="flex justify-start items-center border border-gray rounded-tl-lg rounded-tr-lg py-1">
                            <img className="rounded-full w-8 h-8 p-1 hover:w-10 hover:h-10 shadow-lg m-1" src="/logo192.png" alt="logo" />
                            <p className="text-gray-900 text-sm m-1">Mintesnot Alemayehu</p>
                            <div className="text-gray-400 text-sm m-1">{time}</div>
                        </div>
                        <img className="w-full" src="/minte.jpg" alt="img" />
                        <div className="px-8 py-6 relative">
                            <h3 className='font-semibold text-lg'>{title}</h3>
                            
                            {readMore ? 
                                    <div>
                                        <p className="bg-white my-1 text-sm">{ message }</p> 
                                        {message.length > 180 && <button className="font-semibold text-sm text-blue-400" onClick={
                                        () => setReadMore(readMore => !readMore)
                                        }>Show less</button>}
                                    </div>
                                    :
                                    <div>
                                        <p className="bg-white my-1 text-sm">{ message.substring(0,180) }</p>
                                        {message.length > 180 && <button className="font-semibold text-sm text-blue-400 bg-white" onClick={
                                        () => {setReadMore(readMore => !readMore)}
                                        }>Read more</button>}
                                    </div>
                                    }
                            
                            <div className='flex items-center justify-between mt-2'>
                                <p className="text-gray-400 text-sm">1.2M Subscribers</p>
                                <div className='flex items-center py-2 px-5 bg-gray-100 rounded-full'>
                                    {
                                        like ? <AiFillLike color="#6699ff" onClick={() => {
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

                                    <h6 className='text-sm border-l border-gray-400 border-solid mx-1 pl-1'>{ likeCount }</h6>
                                </div>
                                <div className="flex items-center py-2 px-3 bg-gray-100 rounded-full">
                                    <FaShare color="#6699ff"/>
                                    <span className="text-sm text-gray-700 mx-1">Share</span>    
                                </div>
                            </div>
                            <div className="">
                                {
                                    <Comments post={ `${id}` } creator={ userId }/>
                                }
                            </div>

                        </div>
                    </div>

                    <div className="w-2/5 m-3">
                        {
                            otherPosts.map((post, index) => {
                                return (
                                    <Link to={`/post/${post._id}`} key={index} className="m-3 flex bg-white border rounded-lg overflow-hidden">
                                        <img className="w-1/2 object-cover object-center" src="/minte.jpg" alt="img" />
                                        <div className="p-2 pt-0">
                                            <h3 className='font-semibold text-lg'>{post.title}</h3>
                                            <p className="text-gray-700 text-sm">Mintesnot Alemayehu</p>
                                            <div className="text-gray-500 text-sm">20 views . 3 hours ago</div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>

                </div>
            }
            </Baselayout>
        )
    };

export default Details;
