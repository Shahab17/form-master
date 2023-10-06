import Cousin from "../Cousin/Cousin";



const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
                <Cousin name={'shahab'} ></Cousin>
                <Cousin name={'Tamara'} ></Cousin>
            </section>
        </div>
    );
};

export default Uncle;