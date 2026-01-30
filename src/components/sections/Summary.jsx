// src/components/sections/Summary.jsx
import { resumeData } from "../../data/resumeData"
import Section from "./Section"

export default function Summary() {
  return (
    <Section title="Summary">
        <p className="text-sm">
            {resumeData.summary}
        </p>
    </Section>
  )
}
