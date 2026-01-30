// src/components/sections/Skills.jsx
import { resumeData } from "../../data/resumeData"

export default function Skills() {
    return (
        // <div className="mb-6">
        //     <h3 className="font-semibold mb-2">Skills</h3>
        //     <ul className="flex flex-wrap gap-2 text-gray-200">
        //         { resumeData.skillList.map((item , i) => (
        //             <li key={i} className="px-2 py-1 rounded-full bg-white bg-opacity-10">{item}</li>
        //         ))}
        //     </ul>
        // </div>

        // <div className="mb-6">
        //     <h3 className="font-semibold mb-2">Skills</h3>
        //     <div className="space-y-3">
        //         <SkillGroup
        //             title="Languages"
        //             items={resumeData.skills.languages}
        //         />
        //         <SkillGroup
        //             title="Backend"
        //             items={resumeData.skills.backend}
        //         />
        //         <SkillGroup
        //             title="Frontend"
        //             items={resumeData.skills.frontend}
        //         />
        //         <SkillGroup
        //             title="Databases"
        //             items={resumeData.skills.databases}
        //         />
        //         <SkillGroup
        //             title="Cloud & DevOps"
        //             items={resumeData.skills.cloudDevOps}
        //         />
        //         <SkillGroup
        //             title="Systems & Messaging"
        //             items={resumeData.skills.systemsMessaging}
        //         />
        //     </div>
        // </div>

        <div className="mb-6">
            <h3 className="font-semibold mb-3">Skills</h3>
            <div className="space-y-3 text-gray-200">
                <SkillRow label="Languages" items={resumeData.skills.languages} />
                <SkillRow label="Frontend" items={resumeData.skills.frontend} />
                <SkillRow label="Backend" items={resumeData.skills.backend} />
                <SkillRow label="Databases" items={resumeData.skills.databases} />
                <SkillRow label="Cloud & DevOps" items={resumeData.skills.cloudDevOps} />
                <SkillRow label="Systems & Messaging" items={resumeData.skills.systemsMessaging} />
            </div>
        </div>
    )
}

// function SkillGroup({ title, items }) {
//     return (
//         <>
//             <p className="text-xs tracking-wide text-gray-300 mb-1">
//                 {title}
//             </p>
//             <ul className="flex flex-wrap gap-2 text-gray-200">
//                 {items.map((item, i) => (
//                 <li
//                     key={i}
//                     className="px-2 py-1 rounded-md bg-white bg-opacity-10"
//                 >
//                     {item}
//                 </li>
//                 ))}
//             </ul>
//         </>
//     )
// }

function SkillRow({ label, items }) {
    return (
        <div className="grid grid-cols-[90px_1fr] gap-2">
            <p className="text-xs tracking-wide text-gray-300 leading-snug">
                {label}
            </p>

            <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                <span
                    key={i}
                    className="px-2 py-[2px] text-xs rounded-md bg-white bg-opacity-10"
                >
                    {item}
                </span>
                ))}
            </div>
        </div>
    )
}