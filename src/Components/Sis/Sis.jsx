import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

 

const Sis = () => {
    const money = useContext(MoneyContext)
    return (
        <div>
            <h4>Sister</h4>
            <p>${money} </p>
        </div>
    );
};

export default Sis;