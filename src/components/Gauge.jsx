// Gauge.jsx

import React from 'react';

// Gauge component styles
const gaugeStyles = {
    gaugeContainer: {
        display: 'flex',
        alignItems: 'center', // Centers items vertically against the tallest item (the image/label block)
        justifyContent: 'flex-start',
        margin: '0 10px',
        // Optional: Set a max width so the text has to wrap
        maxWidth: '300px',
    },
    gaugeImage: {
        width: '65px',
        height: '65px',
        borderRadius: '20%',
        objectFit: 'cover',
        // --- KEY FIX: Prevent the image from being affected by surrounding text alignment ---
        flexShrink: 0, // Prevents image from shrinking
        marginRight: '10px', // Space between image and text container
    },
    gaugeLabelContainer: { // New container for the label to manage flow
        display: 'flex',
        flexDirection: 'column', // Ensures text lines stack vertically if needed
        justifyContent: 'center', // Vertically centers the text block relative to the image
        // Allow the label container to take up remaining space
        flexGrow: 1,
    },
    gaugeLabel: {
        fontSize: '14px',
        color: '#ffffff',
        fontWeight: 'bold',
        // --- FIX for long text: Allow text to wrap naturally inside its container ---
        whiteSpace: 'normal',
        lineHeight: '1.4',
    },
};

// Displays an image with a corresponding label
export const Gauge = ({ imageSrc, label }) => {
    return (
        <div style={gaugeStyles.gaugeContainer}>
            {/* Image (Fixed-size column) */}
            <img src={imageSrc} alt={label} style={gaugeStyles.gaugeImage} />

            {/* Label Container (Flexible column, allows wrapping) */}
            <div style={gaugeStyles.gaugeLabelContainer}>
                <span style={gaugeStyles.gaugeLabel}>{label}</span>
            </div>
        </div>
    );
};