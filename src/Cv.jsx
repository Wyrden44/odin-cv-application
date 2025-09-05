import "./styles/cv.css";
import EducationSection from "./components/EducationSection";
import InfoSection from "./components/InfoSection";
import PracticalExperience from "./components/PracticalExperience";
import { useState } from "react";

export default function Cv({ convertCv }) {
    return (
        <div className="cv">
            <InfoSection convertCv={convertCv} />
            <EducationSection convertCv={convertCv} />
            <PracticalExperience convertCv={convertCv} />
        </div>
    );
}