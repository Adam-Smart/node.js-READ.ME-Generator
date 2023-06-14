
function renderLicenseBadge(license) {  if (license !== 'None') {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return '';}


function renderLicenseLink(license) {
  if (license !== "none"){
    return `[license](#license)`
  }
  return "";
}


function renderLicenseSection(license) {
  if (license !== "none"){
  return `## license
   ${license}`
}
return "";}


function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(data.license)}
  

 ## Description
  ${data.description}

  ## Table of Content
  - [Project Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contributing)
  - [Testing](#Testing)
  - ${renderLicenseLink(data.license)}
  - [Questions](#Questions)

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
  For any Questions Contact me at: <br />
  Github: https://github.com/${data.github} <br />
  E-Mail: ${data.email}

`;
}

module.exports = generateMarkdown
