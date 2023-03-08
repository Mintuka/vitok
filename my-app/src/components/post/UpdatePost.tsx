import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actions } from "../../state";
import { RootState } from "../../state/reducers";

const UpdatePost = () => {
  const { posts } = useSelector((state: RootState) => state.post)
  const {id} = useParams()
  const oldPost: any = posts.find(post => post._id === id)
  const [post, setPost] = useState({title: oldPost.title, message:oldPost.message,tags: oldPost.tags,selectedFile:oldPost.selectedFile,creator:oldPost.creator, likeCount:oldPost.likeCount})
  const dispatch = useDispatch();
  const { update } = bindActionCreators(actions, dispatch)
  const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault()
      update(id || '', post)
  }
  return (
        <div className="m-1 flex">
          <div className="w-full max-w-xs">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                  
                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                          Title
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="title" onChange={(e) => setPost({...post, title:e.target.value})}/>
                  </div>

                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                          Message
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="message" onChange={(e) => setPost({...post, message:e.target.value})}/>
                  </div>

                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
                          Tags
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tags" type="text" placeholder="tags" onChange={(e) => setPost({...post, tags:e.target.value.split(',')})}/>
                  </div>

                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="media">
                          Media
                      </label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="media" type="file" placeholder="media"/>
                  </div>

                  <div className="flex items-center justify-between">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                          Update
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                          Clear
                      </button>
                  </div>
              </form>
              <p className="text-center text-gray-500 text-xs">
                  &copy;2020 Acme Corp. All rights reserved.
              </p>
          </div>

          <div className="m-3 border w-64">
            <div className="relative border" >
              <h4 className='p-2'>{post.creator}</h4>
              <h6 className='p-2'>2 hours ago</h6>
              <img className="p-2" src="/logo192.png" alt="img" />
            </div>
            <div>
              <h5 className='p-2'>{post.tags}</h5>
              <h3 className='p-2'>{post.title}</h3>
              <p className='p-2'>{post.message}</p>
            </div>
          </div>
        </div>
  )
}

export default UpdatePost;
