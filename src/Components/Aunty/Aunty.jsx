import Cousin from "../Cousin/Cousin";

 

const Aunty = () => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className="flex">
                <Cousin name={'broken'}></Cousin>
                <Cousin name={'love'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;