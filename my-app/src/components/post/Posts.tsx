import Baselayout from "../common/Baselayout";
import Post,{postProps} from "./SinglePost";


const Posts = ({ posts }:{posts: Array<any>}) => {
  
  return (
    <Baselayout>
      <div className="mx-2">
        <div className="flex justify-between w-full my-4">
            <div className="font-bold text-6xl">Catalyst Blog</div>
            <div className="w-1/5 font-semibold text-gray text-sm text-right">New product features, the latest in technology, solutions and updates</div>
          </div>
          <div className="w-2/5 my-4">
            <input type="text" className="w-3/5 h-9 border rounded-full mt-6 text-center pr-10" placeholder="enter your email"/>
            <button className="h-9 px-5 ml-3 text-white bg-black font-semibold text-sm border rounded-full mt-6">Subscribe</button>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full">
        {
          posts.map((post: postProps, index:number) => <Post key={index} _id={post._id} creator={post.creator} tags={post.tags} title={post.title} message={post.message} likeId={post.likeId} selectedFile={post.selectedFile}></Post>)
        }
      </div>
      </Baselayout>
    )
};

export default Posts;