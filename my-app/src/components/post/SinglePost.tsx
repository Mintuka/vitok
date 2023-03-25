import { Link } from 'react-router-dom'
export interface postProps {_id: String,creator:any, title:String, message:String}

const Post = ({_id, creator, title, message }:postProps) => {

  return (
        <Link to={`/post/${_id}`} className="m-3 bg-white border rounded-lg overflow-hidden shadow-lg">
            <img className="w-full" src="/minte.jpg" alt="img" />
            <div className="px-8 py-6 relative">
              <h3 className='font-semibold text-lg'>{title}</h3>
              <p className='text-sm font-sans lowercase mt-1'>{message.substring(0,100)} <span className="font-bold">...</span></p>
              <div className="flex justify-start items-center">
                <img className="rounded-full w-8 h-8 p-1 hover:w-10 hover:h-10 shadow-lg border border-black-300" src="logo192.png" alt="logo" />
                <p className="text-gray-500 text-sm m-1">{creator?.firstName} {creator?.lastName}</p>
              </div>
            </div>
        </Link>
    )
};

export default Post;
