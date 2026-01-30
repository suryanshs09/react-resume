// src/components/sections/Section.jsx
export default function Section({ title, children }) {
  return (
    <section className="mb-2">
        <h2 className="text-lg font-semibold border-b pb-1 mb-2">
            {title}
        </h2>
        <div className="text-sm leading-relaxed">
            {children}
        </div>
    </section>
  )
}

export function SidebarSection({title, list}) {
    return (
        <div className="mb-6">
            <h3 className="font-semibold mb-2">{title}</h3>
            <ul className="space-y-1 list-disc ml-4">
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}