import React, { useState } from "react";
import { gaugeOptions } from '../components/pcComponents';


// Displays an image with a corresponding label
const Gauge = ({ imageSrc, label }) => {
  return (
    <div style={styles.gaugeContainer}>
      <img src={imageSrc} alt="carousel item" style={styles.gaugeImage} />
      <span style={styles.gaugeLabel}>{label}</span>
    </div>
  );
};

export const SideNavigation = ({ data, onGaugeUpdate }) => {
  // State variables for user input, dropdown selection, etc.
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [currentFigures, setCurrentFigures] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [, setGaugeValues] = useState([0.75, 0.50, 0.25]);
  const [isGenerated, setIsGenerated] = useState(false);

  // Helper function to get displayed gauges based on dropdown selection
  const getDisplayedGaugeValues = () => {
    if (!isGenerated) return [];
    return gaugeOptions[dropdownValue] || gaugeOptions.default;
  };

  // Handle user input 
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsGenerated(false);
  };

  // Handle dropdown changes
  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
    setIsGenerated(false);
    setCurrentFigures([0, 1, 2, 3, 4, 5, 6, 7]);
  };

  // Function to generate random gauge values
  const handleSimulation = () => {
    const newGaugeValues = Array(3).fill().map(() => Math.random().toFixed(2));
    setGaugeValues(newGaugeValues);
  };

  // Add the redirect to other tab
  const handleSimulationRedirect = () => {
    window.open('https://kurtpetrola.github.io/pcsd/', '_blank');
  };

  // Handle form submission and validation
  const handleSubmit = () => {
    if (isValidInput()) {
      handleSimulation();
      setIsGenerated(true);
      // Add this line to update the gauge values
      onGaugeUpdate(dropdownValue);
      console.log(`Input: ${inputValue}, Dropdown: ${dropdownValue}`);
    }
  };

  // Function to check if input is valid
  const isValidInput = () => {
    const budget = parseInt(inputValue, 10);
    return dropdownValue && budget >= 10000 && budget <= 80000;
  };

  // Calculate budget and determine if gauges should be displayed
  const budget = parseInt(inputValue, 10);
  const shouldDisplayGauges = isGenerated && isValidInput();
  const message = !inputValue
    ? "Please enter a budget and select usage type."
    : budget < 10000
      ? "Budget must be at least ₱10,000."
      : budget > 80000
        ? "Budget cannot exceed ₱80,000."
        : !dropdownValue
          ? "Please select a usage type."
          : "Click Generate to see PC components.";

  const nextFigure = (index) => {
    // Update the current figure index for the specified gauge
    setCurrentFigures((prev) => {
      const newFigures = [...prev];
      const displayedValues = getDisplayedGaugeValues();
      newFigures[index] = (newFigures[index] + 1) % displayedValues.length;
      return newFigures;
    });
  };

  const prevFigure = (index) => {
    // Update the current figure index for the specified gauge
    setCurrentFigures((prev) => {
      const newFigures = [...prev];
      const displayedValues = getDisplayedGaugeValues();
      newFigures[index] = (newFigures[index] - 1 + displayedValues.length) % displayedValues.length;
      return newFigures;
    });
  };

  return (
    <div style={styles.sideNav}>
      <div style={styles.formContainer}>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your budget"
          min="1"
          style={styles.textField}
        />
        <select
          value={dropdownValue}
          onChange={handleDropdownChange}
          style={styles.dropdown}
          defaultValue=""
        >
          <option value="" disabled hidden>Select a usage</option>
          <option value="gaming">Gaming</option>
          <option value="school">School</option>
          <option value="work">Work</option>
        </select>
        <button
          onClick={handleSubmit}
          style={{
            ...styles.button,
            opacity: isValidInput() ? 1 : 0.5,
            cursor: isValidInput() ? 'pointer' : 'not-allowed',
          }}
          disabled={!isValidInput()}
        >
          Generate
        </button>
      </div>

      {shouldDisplayGauges ? (
        <>
          <div style={styles.scrollContainer}>
            {currentFigures.map((figureIndex, index) => {
              const displayedValues = getDisplayedGaugeValues();
              return (
                <div key={index} style={styles.carouselContainer}>
                  <button onClick={() => prevFigure(index)} style={styles.arrowButton}>&lt;</button>
                  <Gauge
                    imageSrc={displayedValues[figureIndex].img}
                    label={displayedValues[figureIndex].label}
                  />
                  <button onClick={() => nextFigure(index)} style={styles.arrowButton}>&gt;</button>
                </div>
              );
            })}
          </div>


          <div style={styles.totalContainer}>
            <button
              onClick={handleSimulationRedirect}
              style={styles.simulationButton}
            >
              Simulation
            </button>


            <span style={styles.totalLabel}>Price Total: ₱{budget.toLocaleString()}</span>
          </div>
        </>
      ) : (
        <div style={styles.messageContainer}>
          {message}
        </div>
      )}
    </div>
  );
};

// Codes for styling 
const styles = {
  sideNav: {
    position: 'absolute',
    // Uncomment/comment responsive divina laptop
    // right: '5%',
    // top: '69vw',
    // Uncomment/comment responsive kurt laptop
    right: '10vw',
    top: '63vw',
    width: '80vw',
    maxWidth: '500px',
    height: 'auto',
    backgroundColor: '#213A57',
    padding: '25px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    borderRadius: '12px',
    zIndex: '1',
    fontFamily: '"Helvetica Neue", sans-serif',
    overflow: 'hidden',
  },
  scrollContainer: {
    maxHeight: '450px',
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
    scrollbarColor: '#cedff0 #f1f1f1',
    paddingRight: '10px',
  },
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
  },
  gaugeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0 10px',
  },
  gaugeImage: {
    width: '65px',
    height: '65px',
    borderRadius: '20%',
    objectFit: 'cover',
  },
  gaugeLabel: {
    marginLeft: '10px',
    fontSize: '14px',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  arrowButton: {
    backgroundColor: '#08a7a0',
    color: '#000',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    margin: '0 5px',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  dropdown: {
    width: '40%',
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
    fontSize: '14px',
    color: '#333',
    outline: 'none',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  textField: {
    width: '40%',
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
    fontSize: '14px',
    color: '#333',
    outline: 'none',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  button: {
    width: '25%',
    padding: '9px',
    backgroundColor: '#0B6477',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 8px rgba(11, 100, 119, 0.3)',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  simulationButton: {
    padding: '10px 20px',
    backgroundColor: '#0B6477',
    color: '#fff',
    border: 'none',
    borderRadius: '14px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  messageContainer: {
    color: '#ffffff',
    marginTop: '20px',
    fontSize: '16px',
    textAlign: 'center',
  },
  totalContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#ffffff',
    marginTop: '20px',
    fontSize: '20px',
    textAlign: 'center',
    gap: '20px',
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  '@media (max-width: 768px)': {
    sideNav: {
      width: '100vw',
      right: '0',
      top: 'auto',
      bottom: '0',
      height: 'auto',
      padding: '15px',
    },
    gaugeImage: {
      width: '50px',
      height: '50px',
    },
    arrowButton: {
      width: '25px',
      height: '25px',
      fontSize: '14px',
    },
    formContainer: {
      flexDirection: 'column',
      gap: '5px',
    },
    simulationButton: {
      padding: '8px'
    },
  },
};

export default SideNavigation;