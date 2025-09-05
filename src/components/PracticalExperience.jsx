import ExperienceBlock from "./experienceBlock";
import { useState } from "react";
import NewButton from "./newButton";

export default function PracticalExperience({ convertCv }) {
    const [numBlocks, setNumBlocks] = useState(0);
    const [showButton, setShowButton] = useState(true);

    let experienceBlocks = []
    for (let i=0; i<numBlocks; i++) {
        experienceBlocks.push(<ExperienceBlock  key={crypto.randomUUID()} convertCv={convertCv} />)
    }

    function updateNumBlocks() {
        if (numBlocks < 4)
            setNumBlocks(numBlocks+1);
        if (numBlocks >= 3)
            setShowButton(false);
    }

    return (
        <div className="section" id="experience">
            <h1>Experience</h1>
            {experienceBlocks} 
            {showButton ? <NewButton onClick={e => updateNumBlocks()}></NewButton> : null}
        </div>
    )
}