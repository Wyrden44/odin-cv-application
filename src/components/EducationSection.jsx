import ExperienceBlock from "./experienceBlock";
import NewButton from "./newButton";
import { useState } from "react";

export default function EducationSection() {
    const [showButton, setShowButton] = useState(true);
    const [experienceBlocks, setExperienceBlocks] = useState([]);

    function updateNumBlocks() {
        if (experienceBlocks.length < 5)
            setExperienceBlocks([...experienceBlocks, <ExperienceBlock key={crypto.randomUUID()} />]);
        if (experienceBlocks.length >= 4)
            setShowButton(false);
    }

    return (
        <div className="section" id="education">
            <h1>Education</h1>
            {experienceBlocks}
            {showButton ? <NewButton onClick={e => updateNumBlocks()}></NewButton> : null}
        </div>
    )
}