## Robot Vacuum

### Purpose
This program navigates a imaginary robotic hoover through an equally imaginary room through a NodeJS web application.
The purpose of this program is to take the given input (room dimensions, vacuum start position, dirty spots, and moving directions) and output:
  
  1. The final position of the vacuum (X, Y)
  2. The number of dirty spots the robot cleaned

### Running the program
To run this program, navigate to the project directory and install + run the application using the following commands:

npm install
npm run start

This will launch the application in your browser.

### Input
Program input will be given through the web page. Please follow these conditions to ensure your input is entered correctly, examples are also provided below.

  Box 1: room dimensions - two digits must be separated by a single whitespace
  ```
  3 3
  ```
 
 Box 2: vacuum starting position - two digits must be separated by a single whitespace
  ```
  1 1
  ```
 
 Box 3: dirty spots in the room - two digits must be separated by single whitespace, new pair separated using single comma
  ```
  1 1,1 2
  ```
  
  Box 4: directions to move - should be in all uppercase and connected with no whitespace
  ```
  NNEESSEN
  ```
  
