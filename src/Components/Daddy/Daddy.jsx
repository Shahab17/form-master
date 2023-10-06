import Bro from "../Bro/Bro";
import Myself from "../Myself/Myself";
import Sis from "../Sis/Sis";

 

const Daddy = ({ asset}) => {
    return (
        <div>
            <h3>Daddy</h3>
            <section className="flex">
                <Myself asset={asset}></Myself>
                <Bro></Bro>
                <Sis></Sis>
            </section>
        </div>
    );
};

export default Daddy;