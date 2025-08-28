import FromToDatePicker from "./fromToDatePicker";
import InputToText from "./InputToText";
import InputWithLabel from "./inputWithLabel";

export default function ExperienceBlock() {
    return (
        <div className="experience-block">
            <FromToDatePicker></FromToDatePicker>
            <div className="experience-description">
                <InputWithLabel placeholder="Name of Institution" />
                <InputWithLabel placeholder="Short description (optional)" />
            </div>
        </div>
    )
}