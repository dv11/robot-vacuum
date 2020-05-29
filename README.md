## Robot Vacuum

### Purpose
This program navigates a imaginary robotic hoover through an equally imaginary room through a NodeJS web application.
The purpose of this program is to take the given input (room dimensions, vacuum start position, dirty spots, and moving directions) and output the following:
  
  1. The final position of the vacuum (X, Y)
  2. The number of dirty spots the robot cleaned

### Running the program
Navigate to the project directory in your terminal and run the following commands:
```
npm install
npm run start
```
These two commands will install and launch the application. To run the program, enter the inputs and click the 'Clean!' button.

### Input
Program input will be given through the web page. Please follow these conditions to ensure your input is entered correctly, examples are also provided below.

  Box 1: room dimensions - two digits must be separated by a single whitespace
  ```
  5 5
  ```
 
  Box 2: vacuum starting position - two digits must be separated by a single whitespace
  ```
  1 2
  ```
 
  Box 3: dirty spots in the room - two digits must be separated by single whitespace, new pair separated using single comma
  ```
  1 0,2 2,2 3
  ```
  
  Box 4: directions to move - should be in all uppercase and connected with no whitespace
  ```
  NNEESSEN
  ```

### Output
The program returns the final location of the vacuum and total number of dirty spots cleaned.
The output is shown at the bottom of the webpage.
```
Final position:1,3
Dirty spots cleaned: 1
```
