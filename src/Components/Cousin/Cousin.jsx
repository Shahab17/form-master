import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";
import Special from "../Special/Special";
import Friend from "../Friend/Friend";


const Cousin = ({ name, asset }) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h3>Cousin</h3>
            <p>{name} </p>
            <section>
                {/* {asset && <Special asset={asset}></Special>} */}

                { name === 'love' && <Friend></Friend> }
            </section>
        </div>
    );
};

export default Cousin;