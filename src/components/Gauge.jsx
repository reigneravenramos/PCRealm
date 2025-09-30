// Gauge.jsx

import React from 'react';

// Gauge component styles
const gaugeStyles = {
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
};

// Displays an image with a corresponding label
export const Gauge = ({ imageSrc, label }) => {
    return (
        <div style={gaugeStyles.gaugeContainer}>
            <img src={imageSrc} alt={label} style={gaugeStyles.gaugeImage} />
            <span style={gaugeStyles.gaugeLabel}>{label}</span>
        </div>
    );
};