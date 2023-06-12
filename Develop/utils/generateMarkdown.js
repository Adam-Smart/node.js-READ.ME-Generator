// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  if (license !== 'None') {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return '';}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    return `[license](#license)`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
  return `## License
   ${license}`
}
return "";}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(data.license)}
  

 ## Description
  ${data.description}

  ## Table of Content
  - [Project Description](#Description)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Installation](#Installation)
  - ${renderLicenseLink(data.license)}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribute}

  ## Testing
  ${data.test}


  ${renderLicenseSection(data.license)}

  ## Questions
  For any Questions Contact me at:
  Github: https://github.com/${data.github}
  E-Mail: ${data.email}

`;
}

module.exports = generateMarkdown
