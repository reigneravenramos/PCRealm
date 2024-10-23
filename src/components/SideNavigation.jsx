import React, { useState } from "react";

// Default Images
import defaultImage1 from '../assets/default/processor-default.png';
import defaultImage2 from '../assets/default/gpu-default.png';
import defaultImage3 from '../assets/default/ram-default.png';
import defaultImage4 from '../assets/default/motherboard-default.png';
import defaultImage5 from '../assets/default/powersupply-default.png';
import defaultImage6 from '../assets/default/ssd-default.png';
import defaultImage7 from '../assets/default/fan-default.png';
import defaultImage8 from '../assets/default/cooler-default.png';

// Gaming Images
import gamingImage1 from '../assets/gaming/processor-gaming.png';
import gamingImage2 from '../assets/gaming/gpu-gaming.png';
import gamingImage3 from '../assets/gaming/ram-gaming.png';
import gamingImage4 from '../assets/gaming/motherboard-gaming.png';
import gamingImage5 from '../assets/gaming/powersupply-gaming.png';
import gamingImage6 from '../assets/gaming/ssd-gaming.png';
import gamingImage7 from '../assets/gaming/fan-gaming.png';
import gamingImage8 from '../assets/gaming/cooler-gaming.png';

// School Images
import schoolImage1 from '../assets/school/processor-school.png';
import schoolImage2 from '../assets/school/gpu-school-mid.png';
import schoolImage3 from '../assets/school/ram-school-mid.png';
import schoolImage4 from '../assets/school/motherboard-school-mid.png';
import schoolImage5 from '../assets/school/powersupply-school-mid.png';
import schoolImage6 from '../assets/school/ssd-school-mid.png';
import schoolImage7 from '../assets/school/fan-school-mid.png';
import schoolImage8 from '../assets/school/cooler-school-mid.png';

// Work Images
import workImage1 from '../assets/work/processor-work.png';
import workImage2 from '../assets/work/gpu-work.png';
import workImage3 from '../assets/work/ram-work.png';
import workImage4 from '../assets/work/motherboard-work.png';
import workImage5 from '../assets/work/powersupply-work.png';
import workImage6 from '../assets/work/ssd-work.png';
import workImage7 from '../assets/work/fan-work.png';
import workImage8 from '../assets/work/cooler-work.png';

// Displays an image with a corresponding label
const Gauge = ({ imageSrc, label }) => {
  return (
    <div style={styles.gaugeContainer}>
      <img src={imageSrc} alt="carousel item" style={styles.gaugeImage} />
      <span style={styles.gaugeLabel}>{label}</span>
    </div>
  );
};

export const SideNavigation = () => {
  // State variables for user input, dropdown selection, etc.
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [currentFigures, setCurrentFigures] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [gaugeValues, setGaugeValues] = useState([0.75, 0.50, 0.25]);
  const [isGenerated, setIsGenerated] = useState(false);

  // Data for different usage types with corresponding gauge options
  const gaugeOptions = {
    default: [
      { img: defaultImage1, label: "Intel Core i5-14600KF 24mb 5.30GHz LGA 1700 14TH Gen Processor" },
      { img: defaultImage2, label: "Gigabyte RTX 4070 Super Eagle OC 12GB Graphics Card " },
      { img: defaultImage3, label: "Kingston Fury Beast RGB 32G 16x2 DDR5 5600MHz CL36 KF556C36BBEAK2-32" },
      { img: defaultImage4, label: "Asus Prime A520M-K/CSM (AM4) Motherboard" },
      { img: defaultImage5, label: "ACE 700W Black ATX Gaming PC PSU Power Supply " },
      { img: defaultImage6, label: "Internal SSD - NVMe M.2 2280 - 500GB - Kioxia Exceria G2" },
      { img: defaultImage7, label: "Corsair Air Series™ AF140 Quiet Edition High Airflow" },
      { img: defaultImage8, label: "Cooler Master Hyper 620S Dual Tower ARGB CPU Air Cooler" }
    ],
    gaming: [
      { img: gamingImage1, label: "Intel Core i3-14100 14TH Gen Processor" },
      { img: gamingImage2, label: "GeForce® GTX 1060 WINDFORCE OC 3G" },
      { img: gamingImage3, label: "Ram Kingbank DDR4 PC 3200MHz 16GB" },
      { img: gamingImage4, label: "Asus Prime H610M-K D4 ATX Motherboard" },
      { img: gamingImage5, label: "ACE 700W Black ATX Gaming PC PSU Power Supply " },
      { img: gamingImage6, label: "Kioxia RC10 RC20 SSD 1TB NVMe M.2  EXCERIA G2 RC20 Series" },
      { img: gamingImage7, label: "Gaming FanCorsair Air Series™ AF140 Quiet Edition High Airflow" },
      { img: gamingImage8, label: "Cooler Master Hyper 620S Dual Tower ARGB CPU Air Cooler" }
    ],
    school: [
      { img: schoolImage1, label: "Intel Core i3-10100F 10TH Gen Processor" },
      { img: schoolImage2, label: "ASUS GeForce® GT 1030 2GB GDDR5" },
      { img: schoolImage3, label: "Team Elite Vulcan Z 16GB 2x8 3200mHz Gray DDR4 Memory" },
      { img: schoolImage4, label: "MSI Pro H510M-B (LGA 1200) DDR4 Motherboard" },
      { img: schoolImage5, label: "EVGA 500 BR, 80+ BRONZE 500W" },
      { img: schoolImage6, label: "WD Blue™ SN550 NVMe™ SSD-250GB" },
      { img: schoolImage7, label: "PCcooler Corona RGB 120mm Case Fan" },
      { img: schoolImage8, label: "PCcooler GI-UX4 CPU Cooler" }
    ],
    work: [
      { img: workImage1, label: "Intel Core I3-10105 3.7GHZ Comet Lake Quad-Core 10TH Gen Processor" },
      { img: workImage2, label: "ASUS Phoenix GeForce® GTX 1650 4GB GDDR5" },
      { img: workImage3, label: "G.Skill Ripjaws V 16GB Dual DDR4 3200Mhz CL16F4-3200C16D-16GVKB" },
      { img: workImage4, label: "MSI B560M-A PRO Intel 11th Gen mATX Motherboard" },
      { img: workImage5, label: "Cooler Master MWE Bronze 500W" },
      { img: workImage6, label: "Crucial P2 Internal PCIe M.2 2280 SSD" },
      { img: workImage7, label: "PCcooler EF120 ARGB 120mm BLACK Fan" },
      { img: workImage8, label: "PCcooler EX6000 Black Ed CPU COOLER" }
    ],
  };

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
          style={styles.textField}
        />
        <select
          value={dropdownValue}
          onChange={handleDropdownChange}
          style={styles.dropdown}
        >
          <option value="" disabled>Select a usage</option>
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
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
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
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
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