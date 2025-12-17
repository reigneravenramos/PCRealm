import React from 'react';
import { Gauge } from './Gauge';

// Carousel and layout styles
const carouselStyles = {
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
        '@media (max-width: 768px)': {
            width: '25px',
            height: '25px',
            fontSize: '14px',
        },
    },
    totalContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#ffffff',
        marginTop: '20px',
        fontSize: '20px',
        textAlign: 'center',
        gap: '20px',
    },
    simulationButton: {
        padding: '10px 20px',
        backgroundColor: '#0B6477',
        color: '#fff',
        border: 'none',
        borderRadius: '14px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        '@media (max-width: 768px)': {
            padding: '8px'
        },
    },
    totalLabel: {
        fontWeight: 'bold',
    },
    messageContainer: {
        color: '#ffffff',
        marginTop: '20px',
        fontSize: '16px',
        textAlign: 'center',
    },
};

// Component Carousel Component
const ComponentCarousel = ({
    currentFigures,
    getDisplayedGaugeValues,
    nextFigure,
    prevFigure,
    budget,
    handleSimulationRedirect
}) => {
    return (
        <>
            <div style={carouselStyles.scrollContainer}>
                {currentFigures.map((figureIndex, index) => {
                    const displayedValues = getDisplayedGaugeValues();
                    const currentItem = displayedValues[figureIndex];

                    if (!currentItem) return null;

                    return (
                        <div key={index} style={carouselStyles.carouselContainer}>
                            <button onClick={() => prevFigure(index)} style={carouselStyles.arrowButton}>&lt;</button>
                            <Gauge
                                imageSrc={currentItem.img}
                                label={currentItem.label}
                            />
                            <button onClick={() => nextFigure(index)} style={carouselStyles.arrowButton}>&gt;</button>
                        </div>
                    );
                })}
            </div>

            <div style={carouselStyles.totalContainer}>
                <button
                    onClick={handleSimulationRedirect}
                    style={carouselStyles.simulationButton}
                >
                    Simulation
                </button>
                <span style={carouselStyles.totalLabel}>Price Total: ₱{budget.toLocaleString()}</span>
            </div>
        </>
    );
};

export default ComponentCarousel;