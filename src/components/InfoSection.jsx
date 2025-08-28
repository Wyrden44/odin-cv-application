import InputWithLabel from "./inputWithLabel";

export default function InfoSection() {
    return (
        <div className="section" id="info">
            <InputWithLabel label="Name" name="name"/>
            <InputWithLabel label="Birthday" name="birthday"/>
            <div className="address">
                <InputWithLabel label="Street" name="address" placeholder="E.g.: Road 13b"/>
                <InputWithLabel label="Postal Code" name="address"/>
                <InputWithLabel label="City" name="address"/>
            </div>
            <InputWithLabel label="Phone" name="phone"/>
            <InputWithLabel label="email" name="email"/>
        </div>
    )
}