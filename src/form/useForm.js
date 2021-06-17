import { useState } from "react"

export default function useForm(inValue) {
    let [values, setValues] = useState(inValue)
    function handleChange(e) {
        console.log("change detected")
        setValues((preValue) => ({
            ...preValue,
            [e.target.name]: e.target.value,
        }))
    }
    function handleSubmit() {}
    return { values, handleChange, handleSubmit }
}
