// src/components/sections/Experience.jsx
import Section from "./Section"
import { resumeData } from "../../data/resumeData"

export default function Experience() {
  return (
    <Section title="Work Experience">
        {resumeData.experience.map((exp, i) => (
            <div key={i} className={i != 0 ? "mt-2" : ""}>
                <div className="flex justify-between items-center">
                    <p className="font-medium">
                        {exp.role}
                    </p>
                    <p className="text-xs text-gray-600">
                        {exp.period}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">
                        {exp.company}
                    </p>
                    <p className="text-xs text-gray-600 mb-1">
                        {exp.location}
                    </p>
                </div>
                <ul className="text-sm list-disc ml-4">
                    {exp.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                    ))}
                </ul>
            </div>
        ))}
    </Section>
  )
}
