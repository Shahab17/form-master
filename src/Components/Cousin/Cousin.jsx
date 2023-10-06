import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";
import Special from "../Special/Special";


const Cousin = ({name}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h3>Cousin</h3>            
            <p>{name} </p>
            
        </div>
    );
};

export default Cousin;