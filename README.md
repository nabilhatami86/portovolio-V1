# React Developer Portfolio template

#### Live Demo

#### Figma Design https://www.figma.com/community/file/1116246660507537002

### Preview ( Dark Mode )

<img src="/preview.gif" alt="preview" width="600px" />

## Follow Below instructions to add your deatils in the portfolio.

### Change and customize every section according to your need, All you need to do is edit `/src/Details.js`

#### Open `/src/Details.js` & modify it as per your need.

```javascript
/ Enter your Personal Details here
export const personalDetails = {
  name: "Muhammad Nabil Hatami",
  tagline: "Building technology, creating the future.🚀✨",
  img: profile,
  about: `I am Muhammad Nabil Hatami, a student at Nahdlatul Ulama University Indonesia, majoring in Informatics Engineering. Currently, I am in my 7th semester. I have a strong interest in web development and information technology. With a solid academic background and various practical experiences, I am committed to continuously learning and growing in this field`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Cloud Engineer",
    Company: ` Difa APP`,
    Location: "Online",
    Type: "Capstone Project",
    Duration: "Nov 2023 - Feb 2024",
  },
  {
    Position: "Internsip",
    Company: `Kementrian Koordinasi Bidang Perekonomian`,
    Location: "Jakarta",
    Type: "Full Time",
    Duration: "Apr 2024 - Jul 2024",
  },
];

// Enter your Education Details here
export const eduDetails = { ... };

// Tech Stack and Tools
export const techStackDetails = { ... };

// Enter your Project Details here
export const projectDetails = [ ... ];

// Enter your Contact Details here
export const contactDetails = { ... };
```
