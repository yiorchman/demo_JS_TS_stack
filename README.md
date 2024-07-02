# demo_JS_TS_stack

## Description
The goal of this test task is to assess the candidate's technical skills, knowledge of tools, problem-solving abilities, and approach to test development using the JavaScript/TypeScript stack. The candidate will be required to create tests for a chosen service, demonstrating proficiency in test automation and following best practices.


## Installation

Follow these steps to get the project set up and running on your local machine.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yiorchman/demo_JS_TS_stack.git


2. **Install Dependencies**
    ```bash
    npm install

## Usage

Follow this steps to use cypress in the project

    ```bash
    npx cypress open
    ```   

Choose a browser and click on a test file to run it interactively.
For this project specifically, ther is only one spec that contains all the salary-insights test.
Each test start with "it" at the begining.
There was some similar functions so, there were created some cy.commands to interact with the UI and reuse code.

## Folder Structure
Cypress allows and defines some folders automatically, you can find in this project the following:
- `cypress/e2e`: Contains the tests 
- `cypress/e2e/UI`: Contains UI tests
- `cypress/e2e/api`: Contains api tests found in
- `cypress/pages`: Contains the reusable commands adapted to POM
- `cypress/fixtures`: Contains test data


## Contributing

We welcome contributions to improve deel_automation_cypress. To contribute:
1. Fork the repository.
2. Create your feature branch (git checkout -b feature/YourFeature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Create a new Pull Request.

## License
This project is a private repository, that can be reviewed only by Newfire Global Partness interviewers
