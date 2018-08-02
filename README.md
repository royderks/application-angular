## Welcome

Glad to see your first interview went well! This is the starter app for our programming test. Below is some information, you'll get the rest of the info and your specific assignment at the time of your appointment, but it is good to clone the code and get a head start.

## Getting Started

The following steps are required to get started:

1. Clone the project: (`git clone git@github.com:conclusion-digital-cx/application-angular.git`)

2. Install dependencies: (`yarn install`)

3. Run the project: (`ng serve`)

## Some Info

This is a very basic app, we've included bootstrap for the CSS styles, but we haven't included jquery or any of the other dependencies Bootstrap requires. Please know that you will get a warning when installing the application, but that's fine. We're only importing the main bootstrap CSS :)

## Instructions
1. Actually fetch data. Use `https://randomuser.me/api/?results=500 to fetch` 500 random users
2. Show the correct data in the component
3. Implement searching based on first and last name
4. Implement filtering for Nationalities `AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NO, NL, NZ, TR, US`
5. Implement filtering for Gender `male / female`

- The searching should be implemented as OR (as in, first OR lastname). Whereas the combination of search and the two filters should be AND.
- You may add dependencies things that will fit your way of working. However, things should remain to be in a functional style, Pure and Immutable
- You may refactor things to suit your style, however, if you think about fully refactoring / putting things into subcomponents and that will take you loads of time, you may also leave comments in the code to acknowledge the plan.

## Final Notes
The test is about your way of thinking and your code practices. Leave comments where you think some explanation is necessary and code as if it would be production code.
