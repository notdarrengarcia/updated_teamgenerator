
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// LETS GET STARTED
const fs = require("fs");
const inquirer = require("inquirer");
const util = require('uitl');

const writeFileSync = util.promisify(fs.writefile);

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

// Manager qustions
function askManager() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is your manager ID?",
            name: "manager_id"
        },
        {
            type: "input",
            message: "What is your managers email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "How many employees do you have?",
            name: "numOfEmployee"
        },
        {
            type: "list",
            choices: ['Engineer', 'Intern', 'Manager', 'No more team members'],
            message: "What type of member are you adding?"
        },
    ]);
}

//Intern Questions
function askInternQuestions() {
    return inquirer.prompt(internQuestions);
}

let internQuestions = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "internID"
    },
    {
        type: "list",
        message: "What type of member would you like to be?",
        name: "chooseTeamMember",
        choices: ['Manager', 'Intern', 'Engineer', 'No more team members']
    }
];

// Engineer Questions
function askEngineerQuestions() {
    return inquirer.prompt(engineerQuestions);
}

let engineerQuestions = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is your engineer ID?",
        name: "engineerID"
    },
    {
        type: "input",
        message: "What is your engineer email?",
        name: "engineerEmail"
    },
    {
        type: "list",
        message: "Which team member would you like to be?",
        name: "chooseTeamMember",
        choices: ['Manager', 'Intern', 'Engineer', 'No more team members'],
    },
];

function managerCard(answer) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager:<br>${answer.manager_name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${answer.manager_id}</h6>
      <p class="card-text">${answer.manager_email}</p>
    </div>
  </div>`;
}

function internCard(answer) {
    return `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Intern:<br>${answer.intern_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${answer.intern_id}</h6>
        <p class="card-text">${answer.intern_email}</p>
      </div>
    </div>`;
}

function engineerCard(answer) {
    return `      <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Engineer:<br>${answer.engineer_name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${answer.engineer_id}</h6>
    <p class="card-text">${answer.engineer_email}</p>
  </div>
  </div>`;
  }

function generateHTML(cards) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <header>
        <h1> My super awesome Team</h1>
        </header>
        ${cards}


        <style>
        header {
            background-color: #416e0d;
            color: #fff;
            text-align: center;
            margin-bottom: 2%;
            padding: 2%;
            border: 10px;
        }

        .card {
            margin: auto;
            border: 5px;
            background-color: #416e0d;
            margin-bottom: 2%;
        }

        .card-title {
            color: #fff;
            font-weight: bolder;
            font-size: 2.5rem;
        }

        .text-muted {
            color: red !important;
        }

        p {
            border-top: 5px;
            color: #fff;
        }
        </style>

            <script src="app.js"></script>
    </body>
    
    </html>`;
}

let managerCardArray = [];
let internCardArray = [];
let engineerCardArray = [];

// Let's make some cards

 



