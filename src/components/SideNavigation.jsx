import React, { useState } from "react";

const Gauge = ({ value }) => {
  return (
    <div style={styles.gaugeContainer}>
      <div style={{ ...styles.gauge, backgroundColor: '#91acba' }}>
        {value}
      </div>
    </div>
  );
};

export const SideNavigation = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("option1");
  const [currentFigures, setCurrentFigures] = useState([0, 0, 0, 0]); // Track each gauge's index

  const gaugeValues = {
    option1: [1, 2, 3, 4],
    option2: [4, 5, 6, 8],
    option3: [7, 8, 9, 12],
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
    setCurrentFigures([0, 0, 0]); // Reset all to the first figure
  };

  const handleSubmit = () => {
    console.log(`Input: ${inputValue}, Dropdown: ${dropdownValue}`);
  };

  const nextFigure = (index) => {
    setCurrentFigures((prev) => {
      const newFigures = [...prev];
      newFigures[index] = (newFigures[index] + 1) % gaugeValues[dropdownValue].length;
      return newFigures;
    });
  };

  const prevFigure = (index) => {
    setCurrentFigures((prev) => {
      const newFigures = [...prev];
      newFigures[index] = (newFigures[index] - 1 + gaugeValues[dropdownValue].length) % gaugeValues[dropdownValue].length;
      return newFigures;
    });
  };

  return (
    <div style={styles.sideNav}>
      <div style={styles.formContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Budget"
          style={styles.textField}
        />
        <select
          value={dropdownValue}
          onChange={handleDropdownChange}
          style={styles.dropdown}
        >
          <option value="option1">Gaming</option>
          <option value="option2">School</option>
          <option value="option3">Work</option>
        </select>
        <button onClick={handleSubmit} style={styles.button}>Generate</button>
      </div>

      <div style={styles.scrollContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} style={styles.carouselContainer}>
            <button onClick={() => prevFigure(index)} style={styles.arrowButton}>&lt;</button>
            <Gauge value={gaugeValues[dropdownValue][currentFigures[index]]} />
            <button onClick={() => nextFigure(index)} style={styles.arrowButton}>&gt;</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  sideNav: {
    position: 'absolute',
    right: '30px',
    top: '79vw',
    width: '450px',
    height: '550px',
    backgroundColor: '#213A57',
    padding: '25px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    borderRadius: '12px',
    zIndex: '1',
    fontFamily: '"Helvetica Neue", sans-serif',
    overflow: 'hidden',
  },

  scrollContainer: {
    maxHeight: '350px',
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
    scrollbarColor: '#cedff0 #f1f1f1',
    paddingRight: '10px',
  },

  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px 0',
  },

  gaugeContainer: {
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 10px',
  },

  gauge: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: '#ffffff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  arrowButton: {
    backgroundColor: '#91acba',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    fontSize: '20px',
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
    marginBottom: '30px',
  },
  dropdown: {
    width: '35%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
    fontSize: '14px',
    color: '#333',
    outline: 'none',
  },
  textField: {
    width: '50%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
    fontSize: '14px',
    color: '#333',
    outline: 'none',
  },
  button: {
    width: '30%',
    padding: '10px',
    backgroundColor: '#0B6477',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

const scrollbarStyles = `
  .scrollContainer::-webkit-scrollbar {
    width: 8px;
  }
  .scrollContainer::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .scrollContainer::-webkit-scrollbar-thumb {
    background-color: #83868a;
    border-radius: 10px;
  }
  .scrollContainer::-webkit-scrollbar-thumb:hover {
    background-color: #707579;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = scrollbarStyles;
document.head.appendChild(styleSheet);

export default SideNavigation;
