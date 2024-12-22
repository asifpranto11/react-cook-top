

const Wantcook = ({wantcook,index}) => {
    const {recipe_name,preparing_time,calories} = wantcook ;
    return (
        <div className=" space-y-6">
            <div className="flex lg:justify-between text-xl font-bold gap-20 ">
                <h2>Name</h2>
                <h2>Time</h2>
                <h2>Calories</h2>
            </div>
           <table border="1" >
        <thead>
          <tr className="flex  lg:justify-between w-10 gap-14">
            <p>{index}</p>
            <th>{recipe_name}</th>
            <th>{preparing_time}</th>
            <th>{calories}</th>
            <button className="btn btn-warning">Preparing</button>
          </tr>
        </thead>
        {/* <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.time}</td>
              <td>{item.calories}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
        </div>
    );
};

export default Wantcook;