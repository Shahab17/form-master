import useInputState from "../../Hooks/useInputState";


const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Tamara')
    const emailState = useInputState('babe@tamara.go')


    const handleSubmit = e => {
        e.preventDefault()
        console.log('form data',emailState.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState}  type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;