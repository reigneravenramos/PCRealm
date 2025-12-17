// Gauge component styles
const gaugeStyles = {
    gaugeContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '0 10px',
        width: '250px',
    },
    gaugeImage: {
        width: '65px',
        height: '65px',
        borderRadius: '20%',
        objectFit: 'cover',
        flexShrink: 0,
        marginRight: '10px',
        flexGrow: 0,
    },
    gaugeLabelContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 1,
        flexShrink: 1,
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
            <img src={imageSrc} alt={label} style={gaugeStyles.gaugeImage} />

            <div style={gaugeStyles.gaugeLabelContainer}>
                <span style={gaugeStyles.gaugeLabel}>{label}</span>
            </div>
        </div>
    );
};