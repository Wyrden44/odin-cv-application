import InputWithLabel from "./inputWithLabel";

export default function InfoSection({ convertCv }) {
    return (
        <div className="section" id="info">
            <InputWithLabel convertCv={convertCv} label="Name" name="name"/>
            <InputWithLabel convertCv={convertCv} label="Birthday" name="birthday"/>
            <div className="address">
                <InputWithLabel convertCv={convertCv} label="Address" name="address" placeholder="Street"/>
                <InputWithLabel convertCv={convertCv} name="address" placeholder="City"/>
            </div>
            <InputWithLabel convertCv={convertCv} label="Phone" name="phone"/>
            <InputWithLabel convertCv={convertCv} label="email" name="email"/>
        </div>
    )
}