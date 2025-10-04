// Gauge.jsx

// Gauge component styles
const gaugeStyles = {
    gaugeContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '0 10px',

        // --- KEY FIX 1: Set a FIXED width for the ENTIRE Gauge component ---
        // This is the total width for the image + label area.
        // For example, 250px (65px image + 10px margin + 175px text area).
        width: '250px',
        // We use 'width' instead of 'minWidth' to guarantee its size.
    },
    gaugeImage: {
        width: '65px',
        height: '65px',
        borderRadius: '20%',
        objectFit: 'cover',
        flexShrink: 0,
        marginRight: '10px',
        // --- Ensure image container is stable ---
        flexGrow: 0,
    },
    gaugeLabelContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        // --- KEY FIX 2: Force the label container to take up all remaining width ---
        flexGrow: 1,
        flexShrink: 1,
        // Also ensure it doesn't try to exceed the space allocated to it
        minWidth: '0',
    },
    gaugeLabel: {
        fontSize: '14px',
        color: '#ffffff',
        fontWeight: 'bold',
        whiteSpace: 'normal',
        lineHeight: '1.4',
    },
};

// Displays an image with a corresponding label
export const Gauge = ({ imageSrc, label }) => {
    return (
        <div style={gaugeStyles.gaugeContainer}>
            {/* Image is fixed in size and position */}
            <img src={imageSrc} alt={label} style={gaugeStyles.gaugeImage} />

            {/* Label container fills the remaining width */}
            <div style={gaugeStyles.gaugeLabelContainer}>
                <span style={gaugeStyles.gaugeLabel}>{label}</span>
            </div>
        </div>
    );
};