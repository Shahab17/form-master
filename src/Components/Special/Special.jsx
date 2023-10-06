import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

 

const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h4>Tamara</h4>
            <p>Will You be My {asset}? </p>
            <p>also {gift} </p>
        </div>
    );
};

export default Special;