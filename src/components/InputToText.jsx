import { useState } from "react";

export default function InputToText({ value, onChange, autocomplete, placeholder, convertCv, className="", id="", name="" }) {
    if (!convertCv) {
        return (
            <>
                <input type="text" placeholder={placeholder} value={value} className={className} id={id} name={name} onChange={onChange} autoComplete={autocomplete}/>
            </>
        )
    }
    else {
        return (
            <p className={className} id={id} name={name}>{value}</p>
        )
    }
}