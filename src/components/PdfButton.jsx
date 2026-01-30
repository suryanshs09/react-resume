// src/components/PdfButton.jsx
export default function PdfButton() {
  return (
    <button
        onClick={() => window.print()}
        className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 text-sm rounded print:hidden"
    >
        Download PDF
    </button>
  )
}