// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license)
  {
    case 'None':
      return '';
    case 'Apache License 2.0':
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
    case 'GNU General Public License V3.0':
      return 'https://img.shields.io/badge/License-GPL%20v3-blue.svg';
    case 'MIT License':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license)
  {
    case 'None':
      return '';
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU General Public License V3.0':
      return 'http://www.gnu.org/licenses/gpl-3.0';
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None')
  {
    return '';
  }
  else
  {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#Installation)  
  [Usage](#Usage)  
  [License](#License)  
  [Contribution](#Contribution-Guidelines)  
  [Test](#How-To-Test)  
  [Questions](#Questions)  
  
  ## Installation
  \`\`\`${data.install}\`\`\`

  ## Usage
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribution}

  ## How to Test
  ${data.test}
  
  ## Questions
  [github](https://github.com/${data.github})
  ${data.email}  
`;
}

module.exports = generateMarkdown;
