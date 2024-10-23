import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { SideNavigation } from "./components/SideNavigation";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import GaugeChart from "./components/GaugeChart";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [gaugeValues, setGaugeValues] = useState({
    cpuGaugeValue: 0.75,
    gpuGaugeValue: 0.50,
    systemGaugeValue: 0.25,
    values0: [85, 75, 80, 70, 65],
    values1: [70, 65, 75, 60, 55],
    values2: [60, 55, 65, 50, 45]
  });

  useEffect(() => {
    setLandingPageData(JsonData);
    console.log(JsonData);
  }, []);

  const handleGaugeValuesUpdate = (usage) => {
    let newValues;

    // Generate random values based on usage type
    switch (usage) {
      case 'gaming':
        newValues = {
          cpuGaugeValue: Number((0.6 + Math.random() * 0.3).toFixed(2)), // Higher CPU load
          gpuGaugeValue: Number((0.5 + Math.random() * 0.4).toFixed(2)), // Higher GPU load
          systemGaugeValue: Number((0.3 + Math.random() * 0.4).toFixed(2)),
          values0: Array(5).fill().map(() => Math.floor(80 + Math.random() * 20)), // Higher performance
          values1: Array(5).fill().map(() => Math.floor(70 + Math.random() * 15)),
          values2: Array(5).fill().map(() => Math.floor(60 + Math.random() * 15))
        };
        break;

      case 'school':
        newValues = {
          cpuGaugeValue: Number((0.2 + Math.random() * 0.4).toFixed(2)), // Lower loads
          gpuGaugeValue: Number((0.1 + Math.random() * 0.3).toFixed(2)),
          systemGaugeValue: Number((0.1 + Math.random() * 0.3).toFixed(2)),
          values0: Array(5).fill().map(() => Math.floor(50 + Math.random() * 20)), // Moderate performance
          values1: Array(5).fill().map(() => Math.floor(40 + Math.random() * 20)),
          values2: Array(5).fill().map(() => Math.floor(30 + Math.random() * 20))
        };
        break;

      case 'work':
        newValues = {
          cpuGaugeValue: Number((0.3 + Math.random() * 0.4).toFixed(2)), // Moderate loads
          gpuGaugeValue: Number((0.2 + Math.random() * 0.4).toFixed(2)),
          systemGaugeValue: Number((0.2 + Math.random() * 0.3).toFixed(2)),
          values0: Array(5).fill().map(() => Math.floor(60 + Math.random() * 20)), // Balanced performance
          values1: Array(5).fill().map(() => Math.floor(50 + Math.random() * 20)),
          values2: Array(5).fill().map(() => Math.floor(40 + Math.random() * 20))
        };
        break;

      default:
        newValues = {
          cpuGaugeValue: Number((0.3 + Math.random() * 0.5).toFixed(2)),
          gpuGaugeValue: Number((0.2 + Math.random() * 0.5).toFixed(2)),
          systemGaugeValue: Number((0.2 + Math.random() * 0.4).toFixed(2)),
          values0: Array(5).fill().map(() => Math.floor(50 + Math.random() * 30)),
          values1: Array(5).fill().map(() => Math.floor(40 + Math.random() * 30)),
          values2: Array(5).fill().map(() => Math.floor(30 + Math.random() * 30))
        };
    }

    setGaugeValues(newValues);
  };

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <SideNavigation
        data={landingPageData.SideNavigation}
        onGaugeUpdate={handleGaugeValuesUpdate}
      />
      <GaugeChart
        data={gaugeValues}
        cpuGaugeValue={gaugeValues.cpuGaugeValue}
        gpuGaugeValue={gaugeValues.gpuGaugeValue}
        systemGaugeValue={gaugeValues.systemGaugeValue}
      />
    </div>
  );
};

export default App;