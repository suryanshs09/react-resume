# React Resume (A4 Printable)

A clean, minimal **single-page resume** built with **React + Tailwind CSS**, designed specifically for **A4 size** and **PDF export via browser print**.

This project is data-driven — all resume content lives in a single file, making it easy for anyone to clone the repo and create their own resume in minutes.


## ✨ Features

- 📄 **A4 layout** (perfect for PDF / printing)
- 🖨️ **One-click PDF download** using `window.print()`
- 🎨 Styled with **Tailwind CSS**
- 🧩 Modular, reusable React components
- 📦 **Single data file (`resumeData.js`)** to customize content
- 🧼 Clean, readable resume layout (sidebar + main content)

## 🧱 Project Structure

```

src/
├── components/
│   ├── layout/
│   │   ├── ResumeLayout.jsx
│   │   ├── Sidebar.jsx
│   │   └── MainContent.jsx
│   ├── sections/
│   │   ├── Summary.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Contacts.jsx
│   │   └── Section.jsx
│   └── PdfButton.jsx
│
├── data/
│   └── resumeData.js
│
├── App.jsx
├── main.jsx
└── index.css

````

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/suryanshs09/react-resume.git
cd react-resume
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## ✏️ Customizing Your Resume

All resume content is stored in:

```
src/data/resumeData.js
```

Edit this file to update:

* Name, title, contact details
* Summary
* Work experience
* Projects
* Education
* Skills
* Achievements & certifications

No component changes required 🎉

## 🖨️ Exporting as PDF

1. Click the **“Download PDF”** button
2. Browser print dialog opens
3. Choose:

   * **Paper size:** A4
   * **Margins:** None
   * **Background graphics:** Enabled
4. Save as PDF

The layout is optimized for printing.

## 🎨 Styling

* Uses **Tailwind CSS**
* Print styles handled via `@media print`
* Sidebar background color is controlled via Tailwind theme (`bg-sidebar`)

You can easily tweak spacing, fonts, or colors in:

* `index.css`
* Tailwind config (if extended)

## 📌 Tech Stack

* React (Vite)
* Tailwind CSS
* HTML Print API (`window.print()`)

## ⭐️ If you like this project

Give it a star ⭐ and feel free to fork it to build your own resume!

## 🧪 Sample `src/data/resumeData.js`

```js
export const resumeData = {
  personal: {
    name: "John Doe",
    title: "Full Stack Software Engineer",
    email: "john.doe@email.com",
    emailLink: "mailto:john.doe@email.com",
    phone: "+1 234 567 890",
    phoneLink: "tel:+1234567890",
    linkedin: "linkedin.com/in/johndoe",
    linkedinLink: "https://linkedin.com/in/johndoe",
    location: "San Francisco, CA"
  },

  summary:
    "Full Stack Software Engineer with 5+ years of experience building scalable web applications. Strong background in React, Node.js, and cloud-native architectures. Passionate about clean code, performance, and user experience.",

  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "SQL"],
    frontend: ["React", "Vite", "Tailwind CSS", "HTML", "CSS"],
    backend: ["Node.js", "Express", "REST APIs"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
    cloudDevOps: ["AWS", "Docker", "CI/CD"],
    systemsMessaging: ["RabbitMQ", "Kafka"]
  },

  experience: [
    {
      role: "Senior Software Engineer",
      company: "Tech Corp",
      location: "Remote",
      period: "2022 – Present",
      points: [
        "Led development of a React-based dashboard used by 50k+ users",
        "Designed REST APIs using Node.js and Express",
        "Improved application performance by 30%"
      ]
    },
    {
      role: "Software Engineer",
      company: "Startup Inc.",
      location: "New York, NY",
      period: "2019 – 2022",
      points: [
        "Built full-stack features using React and Node.js",
        "Collaborated with designers and product managers",
        "Wrote unit and integration tests"
      ]
    }
  ],

  projects: [
    {
      name: "Resume Builder",
      period: "2024",
      points: [
        "Built a printable A4 resume using React and Tailwind CSS",
        "Implemented PDF export using browser print",
        "Designed modular and reusable components"
      ]
    },
    {
      name: "Task Management App",
      period: "2023",
      points: [
        "Developed a full-stack task manager with authentication",
        "Used React, Node.js, and PostgreSQL",
        "Deployed using Docker and AWS"
      ]
    }
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science",
      institute: "University of Technology",
      location: "California, USA",
      period: "2015 – 2019",
      highlights: [
        "Graduated with Honors",
        "Relevant coursework: Data Structures, Databases, Web Development"
      ]
    }
  ],

  achievementList: [
    "Employee of the Year (2023)",
    "Top Performer Award (2022)"
  ],

  certifications: [
    "AWS Certified Developer – Associate",
    "Certified React Developer"
  ]

  // hobbies: ["Reading", "Open Source", "Traveling"]
}
````
