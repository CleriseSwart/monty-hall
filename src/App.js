import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State variables to manage game logic and UI
  const [doors, setDoors] = useState([]);
  const [switchOption, setSwitchDoor] = useState(null);
  const [hintOption, setHintOption] = useState(null);
  const [selected, setSelectedDoor] = useState(null);
  const [reveal, setRevealDoor] = useState(false);

  // Function to reveal results and update UI
  const getResults = () => {
    setSwitchDoor(null);
    setHintOption(null);
    setRevealDoor(true);
  };

  // Function to set up new game round
  const setNewDoors = () => {
    const result = Math.floor(Math.random() * 3);
    const newDoors = [false, false, false];
    newDoors[result] = true;

    setDoors(newDoors);
    setSelectedDoor(null);
    setRevealDoor(false);
    setHintOption(null);
    setSwitchDoor(null);
  };

  // Function to handle door selection
  const onChooseDoor = chosenDoor => {
    if (selected !== null) return;

    let hint;
    let newSwitchOption;

    doors.forEach((door, index) => {
      if (!door && chosenDoor !== index) {
        hint = index;
      }
    });

    doors.forEach((door, index) => {
      if (chosenDoor !== index && hint !== index) {
        newSwitchOption = index;
      }
    });

    setHintOption(hint);
    setSwitchDoor(newSwitchOption);
    setSelectedDoor(chosenDoor);
  };

  // Function to handle switching doors
  const switchDoor = () => {
    setSelectedDoor(switchOption);
    getResults();
  };

  // Initialize game on component mount
  useEffect(() => {
    setNewDoors();
  }, []);

  return (
    <div className="container">
      <h1 className="title">
        Feeling Lucky?
      </h1>
      {/* Display switch/stay buttons if needed */}
      {switchOption !== null && (
        <div className="buttons">
          <h3>Switch to door #{switchOption + 1}?</h3>
          <button onClick={switchDoor}>Yes</button>
          <button onClick={getResults}>No</button>
        </div>
      )}
      {/* Display game results and play again button */}
      {reveal && (
        <div className="buttons">
          <h3>{doors[selected] ? 'You won!' : 'You lost!'}</h3>
          <button onClick={setNewDoors}>Play Again?</button>
        </div>
      )}
      {/* Render the doors */}
      <div className="doors">
        {doors.map((door, index) => (
          <div
            className={`door door--${index + 1} ${selected === index && 'door--selected animated infinite pulse'}`}
            onClick={() => onChooseDoor(index)}
            key={index}
          >
            {/* Display prize and hint icons */}
            {reveal && (
              <div className="prize">
                <div className="icon">{door ? 'Car! 🚘' : 'Goat! 🐐'}</div>
              </div>
            )}
            {index === hintOption && (
              <div className="hint">
                <div className="icon">🐐</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
