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
    labels: [
      ['Computing', '(Processor)'],
      ['Data Storage', '(SSD)'],
      ['Rendering', '(Graphics)'],
      ['Data Transfer Speed', '(Memory)'],
      ['PowerCapacity', '(PowerSupply)']
    ],
    datasets: [
      {
        label: 'Computer Radar',
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
          display: false,  // Hide the tick labels (95, 90, etc.)
          beginAtZero: true,
          max: 100,
          color: '#333',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        grid: {
          color: '#ccc',
        },
        angleLines: {
          color: '#aaa',
        },
        pointLabels: {
          color: '#fff', // Change the color of the labels (skills) around the radar chart
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Performance Level</h2>
      <div style={styles.radarContainer}>
        <Radar data={radarData} options={radarOptions} />
      </div>
      <div style={styles.gaugeContainer}>
        <p style={styles.overheatingText}>Overheating Issues</p>
        <div style={styles.gaugeItem}>
          <Gauge
            id="gauge-chart-1"
            nrOfLevels={30}
            arcsLength={[0.75, 0.25]}
            colors={['#007bff', '#ddd']}
            needleColor='#cfcccc'
            percent={0.75}
            arcPadding={0.02}
            cornerRadius={3}
            animate={true}
            textColor="#fff"
            style={styles.gauge}
            textStyle={styles.gaugeText}
          />
          <p style={styles.gaugeLabel}>CPU</p>
        </div>
        <div style={styles.gaugeItem}>
          <Gauge
            id="gauge-chart-2"
            nrOfLevels={30}
            arcsLength={[0.50, 0.50]}
            colors={['#007bff', '#ddd']}
            percent={0.50}
            arcPadding={0.02}
            cornerRadius={3}
            animate={true}
            textColor="#fff"
            needleColor='#cfcccc'
            style={styles.gauge}
            textStyle={styles.gaugeText}
          />
          <p style={styles.gaugeLabel}>GPU</p>
        </div>
        <div style={styles.gaugeItem}>
          <Gauge
            id="gauge-chart-3"
            nrOfLevels={30}
            arcsLength={[0.25, 0.75]}
            colors={['#007bff', '#ddd']}
            percent={0.25}
            arcPadding={0.02}
            cornerRadius={3}
            animate={true}
            textColor="#fff"
            needleColor='#cfcccc'
            style={styles.gauge}
            textStyle={styles.gaugeText}
          />
          <p style={styles.gaugeLabel}>SYSTEM</p>
        </div>

      </div>
    </div>
  );
};

// Styles for the component
const styles = {

  overheatingText: {
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
    gap: '30px',
    width: '100%',
    height: '140%',
    backgroundColor: '#AFDFEE',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },

  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    marginLeft: '380px',
  },

  radarContainer: {
    width: '80%',
    maxWidth: '600px',
    height: '400px',
    backgroundColor: '#213A57',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    marginLeft: '200px',
  },
  gaugeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    maxWidth: '600px',
    marginTop: '1px',
    padding: '20px',
    backgroundColor: '#213A57',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    marginLeft: '200px',
  },
  gaugeItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gauge: {
    width: '150px',
    height: '77px',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  gaugeText: {
    fontSize: '20px',
    fill: '#fff',
    fontWeight: 'bold',
    transform: 'translateY(100px)',
  },
  gaugeLabel: {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
  },
};

export default GaugeChart;
