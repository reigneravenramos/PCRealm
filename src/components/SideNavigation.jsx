// SideNavigation.jsx

import React, { useReducer } from "react";
import { gaugeOptions } from "../data/pc-components"; // Import your component data

// Import the new, self-contained components
import BudgetForm from "../components/BudgetForm";
import ComponentCarousel from "../components/ComponentCarousel";

// --- Reducer Logic ---
const initialState = {
  inputValue: "",
  dropdownValue: "",
  currentFigures: [0, 1, 2, 3, 4, 5, 6, 7],
  isGenerated: false,
};

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

// --- Styles for the Parent Container ---

const parentStyles = {
  sideNav: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#213A57',
    padding: '25px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    borderRadius: '12px',
    zIndex: '1',
    fontFamily: '"Helvetica Neue", sans-serif',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      width: '100%',
      height: 'auto',
      padding: '15px',
    },
  },
  messageContainer: {
    color: '#ffffff',
    marginTop: '20px',
    fontSize: '16px',
    textAlign: 'center',
  },
};

// --- Main Component ---

export const SideNavigation = ({ onGaugeUpdate }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputValue, dropdownValue, currentFigures, isGenerated } = state;

  // --- Handlers (Defined in Parent, Passed to Children) ---

  const isValidInput = () => {
    const budget = parseInt(inputValue, 10);
    return dropdownValue && budget >= 10000 && budget <= 80000;
  };

  const handleSubmit = () => {
    if (isValidInput()) {
      dispatch({ type: 'SET_IS_GENERATED', payload: true });
      onGaugeUpdate(dropdownValue);
    }
  };

  const getDisplayedGaugeValues = () => {
    if (!isGenerated) return [];
    return gaugeOptions[dropdownValue] || gaugeOptions.default;
  };

  const nextFigure = (index) => {
    const displayedValues = getDisplayedGaugeValues();
    dispatch({ type: 'NEXT_FIGURE', payload: { index, length: displayedValues.length } });
  };

  const prevFigure = (index) => {
    const displayedValues = getDisplayedGaugeValues();
    dispatch({ type: 'PREV_FIGURE', payload: { index, length: displayedValues.length } });
  };

  const handleSimulationRedirect = () => {
    window.open('https://kurtpetrola.github.io/pcsd/', '_blank');
  };

  // --- Rendering Logic ---

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
    <div style={parentStyles.sideNav}>
      {/* 1. Budget Form Component */}
      <BudgetForm
        state={state}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
        isValidInput={isValidInput}
      />

      {shouldDisplayGauges ? (
        // 2. Component Carousel Component
        <ComponentCarousel
          currentFigures={currentFigures}
          getDisplayedGaugeValues={getDisplayedGaugeValues}
          nextFigure={nextFigure}
          prevFigure={prevFigure}
          budget={budget}
          handleSimulationRedirect={handleSimulationRedirect}
        />
      ) : (
        <div style={parentStyles.messageContainer}>
          {message}
        </div>
      )}
    </div>
  );
};


export default SideNavigation;