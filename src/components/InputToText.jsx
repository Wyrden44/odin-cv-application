import { useState } from "react";

export default function InputToText({ value, onChange, autocomplete, placeholder, className="", id="", name="" }) {
    return (
        <>
            <input type="text" placeholder={placeholder} value={value} className={className} id={id} name={name} onChange={onChange} autoComplete={autocomplete}/>
        </>
    );
}