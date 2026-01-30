// src/components/layout/MainContent.jsx
import Summary from "../sections/Summary"
import Experience from "../sections/Experience"
import Projects from "../sections/Projects"
import Education from "../sections/Education"

export default function MainContent() {
    return (
        <main className="p-3">
            <Summary />
            <Experience />
            <Projects />
            <Education />
        </main>
    )
}
