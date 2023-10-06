import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";



const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Aunty</h3>
            <section className="flex">
                <Cousin name={'broken'}></Cousin>
                <Cousin name={'love'}></Cousin>
            </section>
            <p> ${money} </p>
            <button onClick={()=>setMoney(money + 1000)}>Add 1000$</button>
        </div>
    );
};

export default Aunty;