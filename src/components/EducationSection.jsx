import ExperienceBlock from "./experienceBlock";
import NewButton from "./newButton";
import { useState } from "react";

export default function EducationSection() {
    const [numBlocks, setNumBlocks] = useState(0);
    const [showButton, setShowButton] = useState(true);

    let experienceBlocks = []
    for (let i=0; i<numBlocks; i++) {
        experienceBlocks.push(<ExperienceBlock />)
    }

    function updateNumBlocks() {
        if (numBlocks < 5)
            setNumBlocks(numBlocks+1);
        if (numBlocks >= 4)
            setShowButton(false);
    }
    console.log(showButton);
    return (
        <div className="section" id="education">
            <h1>Education</h1>
            {experienceBlocks}
            {showButton ? <NewButton onClick={e => updateNumBlocks()}></NewButton> : null}
        </div>
    )
}