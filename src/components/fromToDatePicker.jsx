import React, { useState } from "react";
import SelectMonth from "./selectMonth.jsx";


export default function FromToDatePicker() {
    const [fromM, setFromM] = useState("");
    const [fromY, setFromY] = useState("");
    const [toM, setToM] = useState("");
    const [toY, setToY] = useState("");

    const inputStyle = { display: "inline-block" };

    return (
        <div className="from-to-date">
            <SelectMonth style={inputStyle} name={"month-from"} onChange={e => setFromM(e.target.value)}/>
            <input
                style={inputStyle}
                type="number"
                name="from"
                placeholder="Year"
                min="1970"
                max="2025"
                value={fromY}
                onChange={e => setFromY(e.target.value)}
            />
            <p style={{display: "inline-block"}}><b>-</b></p>
            <SelectMonth style={inputStyle} name={"month-from"} onChange={e => setToM(e.target.value)}/>
            <input
                style={inputStyle}
                type="number"
                name="to"
                placeholder="Year"
                min="1970"
                max="2025"
                value={toY}
                onChange={e => setToY(e.target.value)}
            />
        </div>
    );
}