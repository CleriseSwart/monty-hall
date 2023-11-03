# Monty Hall Problem Simulator

This React app simulates the famous Monty Hall problem, a probability puzzle based on a game show scenario. The user is presented with three doors, one of which hides a prize (winning door), while the other two hide non-winning results (losing doors). The aim of the game is to select the winning door, whose location is initially unknown and random.

## How to Play

1. The user sees three doors. Click on any door to select it.
2. After the selection, one of the two remaining non-selected losing doors is revealed by the application.
3. The user then gets to decide if they want to keep their initial selection or switch to the other unopened door.
4. After the final selection, the chosen door will be opened to reveal whether it is the winning door or not.
5. At any point, the user can reset the game and start over.

## The Monty Hall Paradox

The Monty Hall problem has a counter-intuitive solution. If you program the game to randomly set the winning door, it's statistically more advantageous to switch doors after the initial choice. The winning door will be the opposite of the initially chosen door about two-thirds of the time. Statisticians have been puzzled by this surprising outcome.

## Implementation Details

This app was built using React to create the game environment. The logic behind the game mechanics involves setting the winning door randomly and revealing the non-winning door, giving the user a chance to switch or stick with their initial selection.

### Running the App

To run the application locally, follow these steps:
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.
5. Access the game through your web browser at `http://localhost:3000` by default.

### Technologies Used

- React: The JavaScript library used for building the user interface and managing the game's logic.

### Inspiration

This project was inspired by the Monty Hall problem and serves as an interactive platform to observe the counter-intuitive probability phenomenon.
