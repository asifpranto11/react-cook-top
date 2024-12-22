import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";

const Blog = ({ blog,cookAddHandeler}) => {
    const {recipe_image,recipe_name,short_description,length,ingredients,preparing_time,calories} =blog

     
  
    return (
        
      <div className="">
       
        <div className="card bg-base-100 w-96 shadow-xl mt-7">
          <figure className="px-10 pt-10">
            <img
              src={recipe_image}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{recipe_name}</h2>
            <p>{short_description}</p>
            <hr className="border-t-2 border-gray-200 w-full my-4" />

            <div className="">
            <h2 className="text-lg font-semibold text-left pb-4">Ingredients: {length || 6}</h2>
           
          <div>
          {
                ingredients.map((ingre,idx)=><li className="text-left" key={idx}>{ingre}</li>)
            }
             <hr className="border-t-2 border-gray-200 w-full my-4" />
          </div>
           
       
          </div>

          <div className="flex gap-10">
             <div className="flex justify-center items-center gap-3">
                <p><MdOutlineWatchLater /></p>
                <p>{preparing_time}</p>
             </div>
             <div className="flex justify-center items-center gap-3">
                <p><AiOutlineFire /></p>
                <p>{calories}</p>
             </div>

          </div>

            <div className="card-actions mt-3">
            <button onClick={()=>cookAddHandeler(blog)} class="btn btn-accent text-white">Want To Cook</button>
            </div>
          </div>
        </div>
  
       
   
       
      </div>
    );
  };
  
  export default Blog;
  