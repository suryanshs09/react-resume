// src/components/layout/Sidebar.jsx
import { resumeData } from "../../data/resumeData"
import Contacts from "../sections/Contacts"
import { SidebarSection } from "../sections/Section"
import Skills from "../sections/Skills"

export default function Sidebar() {
    return (
        <aside className="bg-sidebar text-white p-3 text-sm">
            <h1 className="text-2xl font-bold mb-1">
                {resumeData.personal.name}
            </h1>
            <p className="text-xs opacity-90 mb-4">
                {resumeData.personal.title}
            </p>

            <Contacts />
            <Skills />
            <SidebarSection title={"Achievements"} list={resumeData.achievementList} />
            <SidebarSection title={"Certifications"} list={resumeData.certifications} />
            {/* <SidebarSection title={"Hobbies"} list={resumeData.hobbies} /> */}
        </aside>
    )
}