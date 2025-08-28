import { useState } from "react";
import InputToText from "./InputToText";

export default function InputWithLabel({ label, name, placeholder, id="" }) {
    const [ content, setContent ] = useState("");

    function onInputWrite(e) {
        setContent(e.target.value);
    }

    return (
        <div className="input-and-label" id={id}>
            <label htmlFor={name}>{label}</label>
            <InputToText placeholder={placeholder} value={content} onChange={onInputWrite} id={id} name={name} />
        </div>
    )
}