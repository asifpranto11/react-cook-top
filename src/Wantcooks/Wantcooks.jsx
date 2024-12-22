import PropTypes from 'prop-types'
import Wantcook from "../Wantcook/Wantcook";


const Wantcooks = ({wantCooks}) => {
    console.log(wantCooks)
    return (
        <div>
            <h1 className="font-bold text-2xl">Want to Cook:{wantCooks.length}</h1>
            <hr className="border-t-2 border-gray-200 w-full my-4" />

            {
               wantCooks.map((wantcook,index)=> <Wantcook index={index+1} key={wantcook.id} wantcook={wantcook}></Wantcook>) 
            }
        </div>
    );
};

Wantcooks.propTypes={
    wantCooks:PropTypes.array
}

export default Wantcooks;