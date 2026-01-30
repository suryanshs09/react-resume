// src/components/sections/Projects.jsx
import Section from "./Section"
import { resumeData } from "../../data/resumeData"

export default function Projects() {
  return (
    <Section title="Projects">
        {resumeData.projects.map((proj, i) => (
            <div key={i} className={i != 0 ? "mt-2" : ""}>
                <div className="flex justify-between items-center">
                    <p className="font-medium">
                        {proj.name}
                    </p>
                    <p className="text-xs text-gray-600">
                        {proj.period}
                    </p>
                </div>
                <ul className="text-sm list-disc ml-4">
                    {proj.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                    ))}
                </ul>
            </div>
        ))}
    </Section>
  )
}
