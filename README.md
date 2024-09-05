README.md
markdown
Copy code
# Incubyte TDD Assessment - String Calculator

## Overview

This project is a simple implementation of the **String Calculator** as part of the Incubyte TDD assessment. The solution follows **Test-Driven Development (TDD)** principles to create a calculator that can handle:

- Summing numbers provided in a comma-separated string.
- Handling an empty string.
- Handling multiple numbers separated by commas.
- Handling new line characters between numbers.
- Supporting custom delimiters.
- Throwing exceptions for negative numbers.

## Features

- **TDD Approach**: The project follows a strict TDD process. Every feature is tested first and then implemented.
- **Custom Delimiters**: You can specify different delimiters by prefixing the string with `//[delimiter]\n`.
- **Exception Handling**: The calculator will throw an error for negative numbers and display all negative numbers in the error message.

## Requirements

- Node.js (>=12.x.x)
- npm (Node Package Manager)

## Getting Started

Follow these steps to set up the project locally and run the tests.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/incubyte-tdd-string-calculator.git
Navigate to the project directory:

bash
Copy code
cd incubyte-tdd-string-calculator
Install the dependencies:

bash
Copy code
npm install
Running the Application
The core logic is implemented in the src/stringCalculator.js file. To run the tests and check the implementation:

bash
Copy code
npm test
This will execute all the unit tests defined in the tests/stringCalculator.test.js file using Jest as the test runner.

Test-Driven Development (TDD) Workflow
The implementation is done incrementally using the TDD approach. Here’s a breakdown of the main steps and how they are tested and implemented:

Handle Empty String:

Input: "" → Output: 0
Tested and implemented in src/stringCalculator.js.
Handle Single Number:

Input: "1" → Output: 1
Tested and implemented in src/stringCalculator.js.
Handle Two Numbers (comma-separated):

Input: "1,2" → Output: 3
Tested and implemented in src/stringCalculator.js.
Handle New Line Characters:

Input: "1\n2,3" → Output: 6
Tested and implemented in src/stringCalculator.js.
Support Different Delimiters:

Input: "//;\n1;2" → Output: 3
Tested and implemented in src/stringCalculator.js.
Handle Negative Numbers:

Input: "1,-2,3" → Throws an exception: Negative numbers not allowed: -2
Tested and implemented in src/stringCalculator.js.
Folder Structure
The project is organized as follows:

bash
Copy code
├── src
│   └── stringCalculator.js       # String calculator logic
├── tests
│   └── stringCalculator.test.js  # Unit tests for string calculator
├── package.json                  # Project configuration and dependencies
├── README.md                     # Documentation
└── jest.config.js                # Jest configuration
Development Process
Each feature is developed following the TDD cycle:

Write a failing test.
Write just enough code to make the test pass.
Refactor the code to ensure quality and readability.
Commit Strategy
Each feature or small step in the TDD process is committed individually to show the evolution of the code. This can be tracked in the Git commit history. Example:

git commit -m "Handle empty string case"
git commit -m "Handle single number input"
git commit -m "Support multiple numbers separated by commas"
Running Tests
To run all tests, use:

bash
Copy code
npm test
To run specific tests or in watch mode for continuous development:

bash
Copy code
npm run test:watch
Further Improvements
Implement additional features from the full version of TDD Kata 1.
Add more test cases to ensure edge cases are handled.
Improve the exception handling for edge cases and bad input.
License
This project is open-source and available under the MIT License.

vbnet
Copy code

### Key Notes:
- **Installation Instructions**: Include steps on how to clone the repository, install dependencies, and run the tests.
- **Commit Strategy**: Emphasizes frequent commits, reflecting the TDD process.
- **Folder Structure**: Provides an overview of where the code is and how it's organized.

Feel free to adjust the repository link (`https://github.com/yourusername/incubyte-tdd-string-calculator`) once you create it
