import "./styles/cv.css";
import EducationSection from "./components/EducationSection";
import InfoSection from "./components/InfoSection";
import PracticalExperience from "./components/PracticalExperience";

export default function Cv() {


    return (
        <div className="cv">
            <InfoSection />
            <EducationSection />
            <PracticalExperience />
        </div>
    );
}