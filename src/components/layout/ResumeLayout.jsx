// src/components/layout/ResumeLayout.jsx
import Sidebar from "./Sidebar"
import MainContent from "./MainContent"

export default function ResumeLayout() {
  return (
    <div className="bg-gray-200 min-h-screen py-10 print:py-0 print:bg-white">
        <div
            id="resume"
            className="
            bg-white
            grid grid-cols-[280px_1fr]

            w-[794px]
            h-[1123px]

            mx-auto
            shadow-lg

            print:mx-0
            print:w-full
            print:shadow-none
            "
        >
            <Sidebar />
            <MainContent />
        </div>
    </div>
  )
}