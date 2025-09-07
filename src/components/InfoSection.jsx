import InputWithLabel from "./inputWithLabel";

export default function InfoSection() {
    return (
        <div className="section" id="info">
            <InputWithLabel label="Name" name="name"/>
            <InputWithLabel label="Birthday" name="birthday"/>
            <div className="address">
                <InputWithLabel label="Address" name="address" placeholder="Street"/>
                <InputWithLabel name="address" placeholder="City"/>
            </div>
            <InputWithLabel label="Phone" name="phone"/>
            <InputWithLabel label="email" name="email"/>
        </div>
    )
}