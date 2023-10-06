import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

 

const Friend = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h3>Friend</h3>
            <p>  {gift} </p>
        </div>
    );
};

export default Friend;