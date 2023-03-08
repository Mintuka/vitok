import Post,{postProps} from "./SinglePost";


const Posts = ({ posts }:{posts: Array<any>}) => {
  
  return (
      <div className="flex flex-wrap justify-evenly">
        {
          posts.map((post: postProps, index:number) => <Post key={index} _id={post._id} creator={post.creator} tags={post.tags} title={post.title} message={post.message} likeId={post.likeId} selectedFile={post.selectedFile}></Post>)
        }
      </div>
    )
};

export default Posts;