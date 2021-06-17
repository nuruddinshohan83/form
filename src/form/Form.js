import useForm from "./useForm"
const Form = () => {
    let inValue = {
        username: "",
        password: "",
    }
    let { values, handleChange, handleSubmit } = useForm(inValue)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Your Name"
                        onChange={handleChange}
                    ></input>
                    <p>{values.username}</p>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form
