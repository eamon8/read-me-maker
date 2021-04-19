// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            message: 'What is your repository name?',
            name: 'repoName',
          },
    
          {
            type: 'input',
            message: 'Description of your repository?',
            name: 'repoDescription',
          },

          {
            type: 'input',
            message: 'What was your motivation?',
            name: 'repoMotiv',
          },

          {
            type: 'input',
            message: 'Why did you build your project?',
            name: 'repoExpo',
          },

          {
            type: 'input',
            message: 'What problem does your project solve?',
            name: 'repoProbs',
          },

          {
            type: 'input',
            message: 'What did you learn?',
            name: 'repoLearn',
          },

          {
            type: 'input',
            message: 'What do you need to install?',
            name: 'repoIns',
          },

          {
            type: 'input',
            message: 'How do you use it?',
            name: 'repoManuel',
          },

          {
            type: 'input',
            message: 'Who helped you make this?',
            name: 'repopCredit',
          },

          {
            type: 'input',
            message: 'What are there git hub names?',
            name: 'repoGithub',
          },

          {
            type: 'input',
            message: 'Did you use any third party apis if so what are they?',
            name: 'repoApi',
          },

          {
            type: 'input',
            message: 'Did you use any tutorials if so what where they?',
            name: 'repoTuto',
          },

          {
            type: 'list',
            message: 'What kind of licence is it?',
            name: 'repoLicence',
            choices: ['mit', 'gnu', 'npm', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
          },
    
      ])
    }

      const generatemd = (answers) =>`
      # Repository name: ${answers.repoName}
      
      ## description
      
      -Repository description: ${answers.repoDescription}
      
      - My motive was: ${answers.repoMotiv}
      - Why did I build my Repository Why: because ${answers.repoExpo}
      - The problems my Repository solves are: ${answers.repoProbs}
      - What did I learn making I Repositorys: I learnt ${answers.repoLearn}
      
      ##

      - [Installation](#installation)
      - [Usage](#usage)
      - [Credits](#credits)
      - [License](#license)

      ## installiation
      
      What do you need to install to run my Repository: ${answers.repoIns}

      ## usage

      How do you use my Repository: ${answers.repoManuel}

      ## credits

      these peoples where a great help in making my Repository: ${answers.repopCredit} and there github names: ${answers.repoGithub}

      APIs I used to build my Repository: ${answers.repoApi}

      tutorials I used to build my Repository: ${answers.repoTuto}

      ## licence

      what kind of licence does my Repository use: this one ${answers.repoLicence}
      `;

// TODO: Create a function to write README file
function writeToFile(repoName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then((answers) => writeToFile('README.md', generatemd(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
