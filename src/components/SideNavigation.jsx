import React, { useState } from "react";

// Simple Gauge component to display a value
const Gauge = ({ value }) => {
  return (
    <div style={{ ...styles.gaugeContainer }}>
      <div style={{ ...styles.gauge, backgroundColor: '#B7B7B7' }}>
        {value}
      </div>
    </div>
  );
};

export const SideNavigation = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("option1");
  const [currentFigure, setCurrentFigure] = useState(0);

  // Define the features for each dropdown option
  const features = {
    option1: ["Feature 1", "Feature 2", "Feature 3"],
    option2: ["Feature 4", "Feature 5", "Feature 6"],
    option3: ["Feature 7", "Feature 8", "Feature 9"],
  };

  // Define the values for the gauges corresponding to each dropdown option
  const gaugeValues = {
    option1: [1, 2, 3], // Values for Option 1
    option2: [4, 5, 6], // Values for Option 2
    option3: [7, 8, 9], // Values for Option 3
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
    setCurrentFigure(0); // Reset to the first figure when dropdown changes
  };

  const handleSubmit = () => {
    console.log(`Input: ${inputValue}, Dropdown: ${dropdownValue}`);
  };

  const nextFigure = () => {
    setCurrentFigure((prev) => (prev + 1) % gaugeValues[dropdownValue].length);
  };

  const prevFigure = () => {
    setCurrentFigure((prev) => (prev - 1 + gaugeValues[dropdownValue].length) % gaugeValues[dropdownValue].length);
  };

  return (
    <div style={styles.sideNav}>
      {/* Container for dropdown, text input, and button */}
      <div style={styles.formContainer}>
        {/* Text Input */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Budget"
          style={styles.textField}
        />
        
        {/* Dropdown */}
        <select
          value={dropdownValue}
          onChange={handleDropdownChange}
          style={styles.dropdown}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        {/* Generate Button */}
        <button onClick={handleSubmit} style={styles.button}>Generate</button>
      </div>

      {/* Carousel for Option 1 */}
      {dropdownValue === "option1" && (
        <div style={styles.carouselContainer}>
          <button onClick={prevFigure} style={styles.arrowButton}>&lt;</button>
          <Gauge value={gaugeValues[dropdownValue][currentFigure]} />
          <button onClick={nextFigure} style={styles.arrowButton}>&gt;</button>
        </div>
      )}

      {/* Render the feature links based on the dropdown selection */}
      <ul style={styles.navList}>
        {features[dropdownValue].map((feature, index) => (
          <li key={index} style={styles.navItem}>
            <a href={`#${feature.toLowerCase().replace(/\s+/g, '')}`} style={styles.navLink}>
              {feature}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sideNav: {
    position: 'absolute',
    right: '30px',
    top: '80vw', 
    width: '400px',
    backgroundColor: '#ffffff',
    padding: '25px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    borderRadius: '12px',
    zIndex: '1',
    fontFamily: '"Helvetica Neue", sans-serif',
  },
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
  },
  gaugeContainer: {
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 10px',
  },
  gauge: {
    width: '100px',
    height: '100px',
    borderRadius: '50%', // Make it a circle
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px', // Font size for the gauge value
    color: '#fff', // Color of the text inside the gauge
  },
  arrowButton: {
    backgroundColor: '#007bff',
    color: '#fff',
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
  },
  navList: {
    listStyleType: 'none',
    padding: '0',
    marginTop: '30px',
  },
  navItem: {
    marginBottom: '15px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
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
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
};

export default SideNavigation;
