// src/components/sections/Education.jsx
import Section from "./Section"
import { resumeData } from "../../data/resumeData"

export default function Education() {
  return (
    <Section title="Education">
        {resumeData.education.map((edu, i) => (
            <div key={i} className={i != 0 ? "mt-2" : ""}>
                <div className="flex justify-between items-center">
                    <p className="font-medium">
                        {edu.degree}
                    </p>
                    <p className="text-xs text-gray-600">
                        {edu.period}
                    </p>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <p className="text-sm text-gray-600">
                        {edu.institute}
                    </p>
                    <p className="text-xs text-gray-600">
                        {edu.location}
                    </p>
                </div>
                <ul className="text-sm list-disc ml-4">
                    {edu.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        ))}
    </Section>
  )
}
