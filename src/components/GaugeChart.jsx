import React from 'react';
import Gauge from 'react-gauge-chart';
import { Radar } from 'react-chartjs-2';
import {
  Chart,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler,
  PointElement,
  LineController,
  LineElement
} from 'chart.js';

Chart.register(
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler,
  PointElement,
  LineController,
  LineElement
);

const GaugeChart = ({ data,
  cpuGaugeValue,
  gpuGaugeValue,
  systemGaugeValue }) => {

  // Return null if data is missing during initial render
  if (!data) {
    return null;
  }

  // Gauge Colors
  const getGaugeColors = (value) => {
    if (value >= 0.8) {
      return ['#EE6F7C', '#ddd']; // Red (High)
    } else if (value >= 0.6) {
      return ['#2276FC', '#ddd']; // Blue (Moderate)
    }
    return ['#5FD5EC', '#ddd']; // Green (Safe)
  };

  const getTextColor = (value) => {
    if (value >= 0.8) {
      return '#EE6F7C';
    } else if (value >= 0.6) {
      return '#2276FC';
    }
    return '#5FD5EC';
  };

  // Radar Data
  const radarData = {
    labels: [
      ['Computing', '(Processor)'],
      ['Rendering', '(Graphics)'],
      ['Data Transfer Speed', '(Memory)'],
      ['Power Capacity', '(PowerSupply)'],
      ['Data Storage', '(SSD)']
    ],
    datasets: [
      {
        label: 'Computer Radar 0',
        data: data.values0,
        borderColor: '#2276FC',
        backgroundColor: 'rgba(34, 118, 252, 0.3)',
        borderWidth: 2,
        pointRadius: 2,
        pointBackgroundColor: '#2276FC',
        fill: true,
        order: 2
      },
      {
        label: 'Computer Radar 1',
        data: data.values1,
        borderColor: '#EE6F7C',
        backgroundColor: 'rgba(238, 111, 124, 0.3)',
        borderWidth: 2,
        pointRadius: 2,
        pointBackgroundColor: '#EE6F7C',
        fill: true,
        order: 1
      },
      {
        label: 'Computer Radar 2',
        data: data.values2,
        borderColor: '#5FD5EC',
        backgroundColor: 'rgba(95, 213, 236, 0.3)',
        borderWidth: 2,
        pointRadius: 2,
        pointBackgroundColor: '#5FD5EC',
        fill: true,
        order: 3
      }
    ],
  };

  const radarOptions = {
    layout: {
      padding: {
        top: 12,
        bottom: 36,
        left: 30,
        right: 30,
      },
    },
    scales: {
      r: {
        ticks: {
          display: false,
          beginAtZero: true,
          max: 100,
          color: '#333',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
        angleLines: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
        pointLabels: {
          color: '#fff',
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
        display: false,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.radarContainer}>
        <p style={styles.title}>Performance Level</p>
        <Radar data={radarData} options={radarOptions} />
      </div>

      <div style={styles.gaugeContainer}>
        <p style={styles.overheatingText}>Overheating Issues</p>
        <div style={styles.gaugeItem}>
          <Gauge
            id="gauge-chart-1"
            nrOfLevels={30}
            arcsLength={[cpuGaugeValue, 1 - cpuGaugeValue]}
            colors={getGaugeColors(cpuGaugeValue)}
            needleColor='#cfcccc'
            percent={cpuGaugeValue}
            arcPadding={0.02}
            cornerRadius={3}
            animate={true}
            textColor={getTextColor(cpuGaugeValue)}
            style={styles.gauge}
            textStyle={{
              ...styles.gaugeText,
              fill: getTextColor(cpuGaugeValue),
            }}
          />
          <p style={styles.gaugeLabel}>CPU</p>
        </div>
        <div style={styles.gaugeItem}>
          <Gauge
            id="gauge-chart-2"
            nrOfLevels={30}
            arcsLength={[gpuGaugeValue, 1 - gpuGaugeValue]}
            colors={getGaugeColors(gpuGaugeValue)}
            percent={gpuGaugeValue}
            arcPadding={0.02}
            cornerRadius={3}
            animate={true}
            textColor={getTextColor(gpuGaugeValue)}
            needleColor='#cfcccc'
            style={styles.gauge}
            textStyle={{
              ...styles.gaugeText,
              fill: getTextColor(gpuGaugeValue),
            }}
          />
          <p style={styles.gaugeLabel}>GPU</p>
        </div>
        <div style={styles.gaugeItem}>
          <Gauge
            id="gauge-chart-3"
            nrOfLevels={30}
            arcsLength={[systemGaugeValue, 1 - systemGaugeValue]}
            colors={getGaugeColors(systemGaugeValue)}
            percent={systemGaugeValue}
            arcPadding={0.02}
            cornerRadius={3}
            animate={true}
            textColor={getTextColor(systemGaugeValue)}
            needleColor='#cfcccc'
            style={styles.gauge}
            textStyle={{
              ...styles.gaugeText,
              fill: getTextColor(systemGaugeValue),
            }}
          />
          <p style={styles.gaugeLabel}>SYSTEM</p>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  overheatingText: {
    position: 'absolute',
    top: '4%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#FF3842',
    zIndex: 1,
    textAlign: 'center',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '20px',
    textAlign: 'center',
    width: '100%',
  },
  radarContainer: {
    width: '100%',
    maxWidth: '600px',
    height: '450px',
    backgroundColor: '#213A57',
    borderRadius: '12px',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    padding: '40px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    position: 'relative',
  },
  gaugeContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: '#213A57',
    borderRadius: '12px',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    marginTop: '0',
  },
  gaugeItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 10px',
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