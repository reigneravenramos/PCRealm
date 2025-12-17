import React, { useState, useEffect } from "react";
import { Navigation } from "./Navigation";
import { SideNavigation } from "./SideNavigation";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../App.css";
import GaugeChart from "./GaugeChart";

// Smooth Scroll
export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

// Header Styles
const headerStyles = {
    featuresSection: {
        position: 'relative',
        color: '#fff',
        paddingTop: '80px',
    },
    container: {
        position: 'relative',
    },
    title: {
        marginTop: '30px',
        color: '#fff',
        textTransform: 'uppercase',
    },
};

// BuildPC Component
const BuildPC = () => {
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
                    cpuGaugeValue: Number((0.6 + Math.random() * 0.3).toFixed(2)), // High CPU
                    gpuGaugeValue: Number((0.5 + Math.random() * 0.4).toFixed(2)), // High GPU
                    systemGaugeValue: Number((0.3 + Math.random() * 0.4).toFixed(2)),
                    values0: Array(5).fill().map(() => Math.floor(80 + Math.random() * 20)), // High performance
                    values1: Array(5).fill().map(() => Math.floor(70 + Math.random() * 15)),
                    values2: Array(5).fill().map(() => Math.floor(60 + Math.random() * 15))
                };
                break;

            case 'school':
                newValues = {
                    cpuGaugeValue: Number((0.2 + Math.random() * 0.4).toFixed(2)), // Low load
                    gpuGaugeValue: Number((0.1 + Math.random() * 0.3).toFixed(2)),
                    systemGaugeValue: Number((0.1 + Math.random() * 0.3).toFixed(2)),
                    values0: Array(5).fill().map(() => Math.floor(50 + Math.random() * 20)), // Moderate performance
                    values1: Array(5).fill().map(() => Math.floor(40 + Math.random() * 20)),
                    values2: Array(5).fill().map(() => Math.floor(30 + Math.random() * 20))
                };
                break;

            case 'work':
                newValues = {
                    cpuGaugeValue: Number((0.3 + Math.random() * 0.4).toFixed(2)), // Moderate load
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
        <div id="build-pc" style={{ backgroundColor: '#1a202c', minHeight: '100vh', paddingBottom: '50px' }}>
            <Navigation />


            <div id="features" className="text-center" style={headerStyles.featuresSection}>
                <div className="container" style={headerStyles.container}>
                    <div className="col-md-10 col-md-offset-1 section-title">
                        <h2 style={headerStyles.title}>BUILD A PC</h2>

                    </div>
                </div>
            </div>

            <div className="dashboard-content" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '30px',
                padding: '40px',
                maxWidth: '1400px',
                margin: '0 auto',
                backgroundColor: '#AFDFEE',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
            }}>
                <div style={{ flex: '1 1 600px', maxWidth: '800px' }}>
                    <GaugeChart
                        data={gaugeValues}
                        cpuGaugeValue={gaugeValues.cpuGaugeValue}
                        gpuGaugeValue={gaugeValues.gpuGaugeValue}
                        systemGaugeValue={gaugeValues.systemGaugeValue}
                    />
                </div>

                <div style={{ flex: '0 1 500px', minWidth: '400px' }}>
                    <SideNavigation
                        data={landingPageData.SideNavigation}
                        onGaugeUpdate={handleGaugeValuesUpdate}
                    />
                </div>
            </div>
        </div>
    );
};

export default BuildPC;
