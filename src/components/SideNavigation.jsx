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

const Gauge = ({ imageSrc, label }) => {
  return (
    <div style={styles.gaugeContainer}>
      <img src={imageSrc} alt="carousel item" style={styles.gaugeImage} />
      <span style={styles.gaugeLabel}>{label}</span>
    </div>
  );
};

export const SideNavigation = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [currentFigures, setCurrentFigures] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  const gaugeValues = {
    default: [
      { img: defaultImage1, label: "Default CPU" },
      { img: defaultImage2, label: "Default GPU" },
      { img: defaultImage3, label: "Default RAM" },
      { img: defaultImage4, label: "Default MoB" },
      { img: defaultImage5, label: "Default PoS" },
      { img: defaultImage6, label: "Default SSD" },
      { img: defaultImage7, label: "Default Fan" },
      { img: defaultImage8, label: "Default Col" }
    ],
    gaming: [
      { img: gamingImage1, label: "Gaming CPU" },
      { img: gamingImage2, label: "Gaming GPU" },
      { img: gamingImage3, label: "Gaming RAM" },
      { img: gamingImage4, label: "Gaming MoB" },
      { img: gamingImage5, label: "Gaming PoS" },
      { img: gamingImage6, label: "Gaming SSD" },
      { img: gamingImage7, label: "Gaming Fan" },
      { img: gamingImage8, label: "Gaming Col" }
    ],
    school: [
      { img: schoolImage1, label: "School CPU" },
      { img: schoolImage2, label: "School GPU" },
      { img: schoolImage3, label: "School RAM" },
      { img: schoolImage4, label: "School MoB" },
      { img: schoolImage5, label: "School PoS" },
      { img: schoolImage6, label: "School SSD" },
      { img: schoolImage7, label: "School Fan" },
      { img: schoolImage8, label: "School Col" }
    ],
    work: [
      { img: workImage1, label: "Work CPU" },
      { img: workImage2, label: "Work GPU" },
      { img: workImage3, label: "Work RAM" },
      { img: workImage4, label: "Work MoB" },
      { img: workImage5, label: "Work Pos" },
      { img: workImage6, label: "Work SSD" },
      { img: workImage7, label: "Work Fan" },
      { img: workImage8, label: "Work Col" }
    ],
  };

  const getDisplayedGaugeValues = () => {
    return dropdownValue ? gaugeValues[dropdownValue] : gaugeValues.default;
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDropdownChange = (e) => {
    const newValue = e.target.value;
    setDropdownValue(newValue);

    const resetFigures = Array(8).fill(0).map((_, index) => index);
    setCurrentFigures(resetFigures);
  };

  const handleSubmit = () => {
    if (dropdownValue) {
      console.log(`Input: ${inputValue}, Dropdown: ${dropdownValue}`);
    } else {
      console.log("Please select a usage type before submitting");
    }
  };

  const nextFigure = (index) => {
    setCurrentFigures((prev) => {
      const newFigures = [...prev];
      const displayedValues = getDisplayedGaugeValues();
      newFigures[index] = (newFigures[index] + 1) % displayedValues.length;
      return newFigures;
    });
  };

  const prevFigure = (index) => {
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
          type="text"
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
            opacity: dropdownValue ? 1 : 0.5,
            cursor: dropdownValue ? 'pointer' : 'not-allowed',
          }}
          disabled={!dropdownValue}
        >
          Generate
        </button>
      </div>

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
    </div>
  );
};

const styles = {
  sideNav: {
    position: 'absolute',
    right: '10vw',
    top: '64vw',
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
  },
};

export default SideNavigation;