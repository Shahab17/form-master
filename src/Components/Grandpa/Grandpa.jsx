import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Daddy from "../Daddy/Daddy";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold')

const Grandpa = () => {

    const asset = 'Diamond'

    return (
        <div className="grandpa">
            <h3>Grandpa</h3>
            <AssetContext.Provider value="gold">
                <section className="flex">
                    <Daddy asset={asset}></Daddy>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. create a context and export it
 * 2.  add provider for the context with a value. value could be anything
 * 3. useContext to access value in the context API
 * 
 *  */