import React, { useState } from "react";

// Import images from the assets folder
import gamingImage1 from '../assets/gaming/cpu-gaming.png';
import gamingImage2 from '../assets/gaming/gpu-gaming.png';
import gamingImage3 from '../assets/gaming/ram-gaming.png';
import gamingImage4 from '../assets/gaming/motherboard-gaming.png';
import gamingImage5 from '../assets/gaming/powersupply-gaming.png';
import gamingImage6 from '../assets/gaming/ssd-gaming.png';
import gamingImage7 from '../assets/gaming/fan-gaming.png';
import gamingImage8 from '../assets/gaming/cooler-gaming.png';

// import schoolImage1 from '../assets/school/cpu-school.png';
// import schoolImage2 from '../assets/school/gpu-school.png';
// import schoolImage3 from '../assets/school/ram-school.png';
// import schoolImage4 from '../assets/school/motherboard-school.png';
// import schoolImage5 from '../assets/school/powersupply-school.png';
// import schoolImage5 from '../assets/school/ssd-school.png';
// import schoolImage5 from '../assets/school/fan-school.png';
// import schoolImage5 from '../assets/school/cooler-school.png';

// import workImage1 from '../assets/work/cpu-work.png';
// import workImage2 from '../assets/work/gpu-work.png';
// import workImage3 from '../assets/work/ram-work.png';
// import workImage4 from '../assets/work/motherboard-work.png';
// import workImage4 from '../assets/work/powersupply-work.png';
// import workImage4 from '../assets/work/ssd-work.png';
// import workImage4 from '../assets/work/fan-work.png';
// import workImage4 from '../assets/work/cooler-work.png';

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
  const [dropdownValue, setDropdownValue] = useState("gaming");
  const [currentFigures, setCurrentFigures] = useState([0, 1, 2, 3, 4, 5, 6, 7]); // Set initial figures to show unique images

  // Use the imported images and labels for the gauge values
  const gaugeValues = {
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
      { img: gamingImage1, label: "School CPU" },
      { img: gamingImage2, label: "School GPU" },
      { img: gamingImage3, label: "School RAM" },
      { img: gamingImage4, label: "School MoB" },
      { img: gamingImage5, label: "School PoS" },
      { img: gamingImage6, label: "School SSD" },
      { img: gamingImage7, label: "School Fan" },
      { img: gamingImage8, label: "School Col" }
    ],
    work: [
      { img: gamingImage1, label: "Work CPU" },
      { img: gamingImage2, label: "Work GPU" },
      { img: gamingImage3, label: "Work RAM" },
      { img: gamingImage4, label: "Work MoB" },
      { img: gamingImage5, label: "Work Pos" },
      { img: gamingImage6, label: "Work SSD" },
      { img: gamingImage7, label: "Work Fan" },
      { img: gamingImage8, label: "Work Col" }
    ],
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);

    // Reset the currentFigures array to match the number of images for the selected dropdown
    const resetFigures = Array(gaugeValues[e.target.value].length).fill(0).map((_, index) => index);
    setCurrentFigures(resetFigures); // This will ensure each image has a unique index
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
          placeholder="Enter your budget"
          style={styles.textField}
        />
        <select
          value={dropdownValue}
          onChange={handleDropdownChange}
          style={styles.dropdown}
        >
          <option value="gaming">Gaming</option>
          <option value="school">School</option>
          <option value="work">Work</option>
        </select>
        <button onClick={handleSubmit} style={styles.button}>Generate</button>
      </div>

      <div style={styles.scrollContainer}>
        {currentFigures.map((figureIndex, index) => (
          <div key={index} style={styles.carouselContainer}>
            <button onClick={() => prevFigure(index)} style={styles.arrowButton}>&lt;</button>
            <Gauge
              imageSrc={gaugeValues[dropdownValue][figureIndex].img}
              label={gaugeValues[dropdownValue][figureIndex].label}
            />
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
    right: '10vw',
    top: '64vw',
    width: '80vw',
    maxWidth: '480px',
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
    width: '60px',
    height: '60px',
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

  // Media query for smaller screens
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
