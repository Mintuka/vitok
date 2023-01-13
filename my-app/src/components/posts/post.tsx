import React from "react";
import {AiOutlineLike} from "react-icons/ai"

const Post = (props:any) => {
  return (
        <div className="w-auto shadow-sm">
            <h4>Mintesnot</h4>
            <h6>9 hours ago</h6>
            <img src="" alt="" />
            <div>#europe #asia</div>
            <title>Lalibela</title>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam dolorum enim repellat perferendis quo. Animi placeat eum quia sequi, facere numquam recusandae, esse repellat maxime laboriosam ullam possimus mollitia sit?</p>
            <AiOutlineLike/>
            <div>134123</div>
        </div>
    )
};

export default Post;
