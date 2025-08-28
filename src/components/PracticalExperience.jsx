import ExperienceBlock from "./experienceBlock";
import { useState } from "react";
import NewButton from "./newButton";

export default function PracticalExperience() {
    const [numBlocks, setNumBlocks] = useState(0);

    let experienceBlocks = []
    for (let i=0; i<numBlocks; i++) {
        experienceBlocks.push(<ExperienceBlock />)
    }

    function updateNumBlocks() {
        if (numBlocks < 4)
            setNumBlocks(numBlocks+1);
    }

    return (
        <div className="section" id="experience">
            <h1>Experience</h1>
            {experienceBlocks} 
            <NewButton onClick={e => updateNumBlocks()}></NewButton>
        </div>
    )
}