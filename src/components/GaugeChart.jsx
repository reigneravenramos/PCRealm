import React from 'react';
import Gauge from 'react-gauge-chart';
import { Radar } from 'react-chartjs-2';
import {
  Chart,
  RadialLinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineController,
  LineElement 
} from 'chart.js';

Chart.register(
  RadialLinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineController,
  LineElement 
);

const GaugeChart = ({ data = {} }) => {
  // Data for the radar chart
  const radarData = {
    labels: data.skills || ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'],
    datasets: [
      {
        label: 'Skills',
        data: data.values || [80, 70, 90, 60, 85],
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: '#007bff',
        borderWidth: 2,
      },
    ],
  };

  // Options for the radar chart
  const radarOptions = {
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
          max: 100,
          color: '#000',
        },
        grid: {
          color: '#ddd',
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={styles.container}>
    <div style={styles.radarContainer}>
        <Radar data={radarData} options={radarOptions} />
      </div>
      <div style={styles.gaugeContainer}>
      
        <Gauge
          id="gauge-chart-1"
          nrOfLevels={30}
          arcsLength={[0.75, 0.25]}
          colors={['#007bff', '#ffffff']}
          percent={0.75}
          arcPadding={0.02}
          cornerRadius={3}
          animate={false}
          style={styles.gauge}
        />
        <Gauge
          id="gauge-chart-2"
          nrOfLevels={30}
          arcsLength={[0.50, 0.50]}
          colors={['#007bff', '#ffffff']}
          percent={0.50}
          arcPadding={0.02}
          cornerRadius={3}
          animate={false}
          style={styles.gauge}
        />
        <Gauge
          id="gauge-chart-3"
          nrOfLevels={30}
          arcsLength={[0.25, 0.75]}
          colors={['#007bff', '#ffffff']}
          percent={0.25}
          arcPadding={0.02}
          cornerRadius={3}
          animate={false}
          style={styles.gauge}
        />
      </div>
      
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
    gap: '20px',
    width: '100%',
     backgroundColor: 'D8D2C2'
     
     
  },
  gaugeContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '40%',
    height: '150px',
    marginTop: '20px',  
    marginRight: '600px',
  },
  gauge: {
    width: '150px',
    height: '77px',
    backgroundColor:'4A4947',//gauge color 
    borderRadius:'90px',
  },
  radarContainer: {
    width: '100%',
    height: '500px',
    marginRight: '600px',
  },

};

export default GaugeChart;
