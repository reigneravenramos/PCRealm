// SideNavigation.jsx

import React, { useReducer } from "react";
import { gaugeOptions } from "../components/pcComponents";


// Displays an image with a corresponding label
const Gauge = ({ imageSrc, label }) => {
  return (
    <div style={styles.gaugeContainer}>
      <img src={imageSrc} alt="carousel item" style={styles.gaugeImage} />
      <span style={styles.gaugeLabel}>{label}</span>
    </div>
  );
};

// Initial state for the reducer
const initialState = {
  inputValue: "",
  dropdownValue: "",
  currentFigures: [0, 1, 2, 3, 4, 5, 6, 7],
  isGenerated: false,
};

// The reducer function to handle all state transitions
function reducer(state, action) {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue: action.payload, isGenerated: false };
    case 'SET_DROPDOWN_VALUE':
      return { ...state, dropdownValue: action.payload, isGenerated: false };
    case 'SET_IS_GENERATED':
      return { ...state, isGenerated: action.payload };
    case 'NEXT_FIGURE': {
      const { index, length } = action.payload;
      const newFigures = [...state.currentFigures];
      newFigures[index] = (newFigures[index] + 1) % length;
      return { ...state, currentFigures: newFigures };
    }
    case 'PREV_FIGURE': {
      const { index, length } = action.payload;
      const newFigures = [...state.currentFigures];
      newFigures[index] = (newFigures[index] - 1 + length) % length;
      return { ...state, currentFigures: newFigures };
    }
    default:
      return state;
  }
}

export const SideNavigation = ({ data, onGaugeUpdate }) => {
  // Use useReducer to manage all related state
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputValue, dropdownValue, currentFigures, isGenerated } = state;
  // NOTE: You don't need `setGaugeValues` anymore as it was not used in the UI.

  // Helper function to get displayed gauges based on dropdown selection
  const getDisplayedGaugeValues = () => {
    if (!isGenerated) return [];
    return gaugeOptions[dropdownValue] || gaugeOptions.default;
  };

  // Handle user input
  const handleInputChange = (e) => {
    dispatch({ type: 'SET_INPUT_VALUE', payload: e.target.value });
  };

  // Handle dropdown changes
  const handleDropdownChange = (e) => {
    dispatch({ type: 'SET_DROPDOWN_VALUE', payload: e.target.value });
  };

  // Add the redirect to other tab
  const handleSimulationRedirect = () => {
    window.open('https://kurtpetrola.github.io/pcsd/', '_blank');
  };

  // Handle form submission and validation
  const handleSubmit = () => {
    if (isValidInput()) {
      dispatch({ type: 'SET_IS_GENERATED', payload: true });
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

  const nextFigure = (index) => {
    const displayedValues = getDisplayedGaugeValues();
    dispatch({ type: 'NEXT_FIGURE', payload: { index, length: displayedValues.length } });
  };

  const prevFigure = (index) => {
    const displayedValues = getDisplayedGaugeValues();
    dispatch({ type: 'PREV_FIGURE', payload: { index, length: displayedValues.length } });
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
  // ... (Your existing styles object)
  sideNav: {
    position: 'absolute',
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
  // Media query styles
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