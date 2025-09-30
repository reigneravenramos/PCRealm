// BudgetForm.jsx

import React from 'react';

// Extracted styles for the form elements
const formStyles = {
    formContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px',
        // Media query styles (often handled better with CSS-in-JS or CSS Modules)
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '5px',
        },
    },
    dropdown: {
        width: '40%',
        padding: '8px',
        borderRadius: '6px',
        border: '1px solid #ddd',
        backgroundColor: '#f9f9f9',
        fontSize: '14px',
        color: '#333',
        outline: 'none',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        '@media (max-width: 768px)': {
            width: '100%',
        },
    },
    textField: {
        width: '40%',
        padding: '8px',
        borderRadius: '6px',
        border: '1px solid #ddd',
        backgroundColor: '#f9f9f9',
        fontSize: '14px',
        color: '#333',
        outline: 'none',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        '@media (max-width: 768px)': {
            width: '100%',
        },
    },
    button: {
        width: '25%',
        padding: '9px',
        backgroundColor: '#0B6477',
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
        transition: 'background-color 0.3s ease',
        boxShadow: '0 4px 8px rgba(11, 100, 119, 0.3)',
        '@media (max-width: 768px)': {
            width: '100%',
        },
    },
};


const BudgetForm = ({ state, dispatch, handleSubmit, isValidInput }) => {
    const { inputValue, dropdownValue } = state;

    const handleInputChange = (e) => {
        dispatch({ type: 'SET_INPUT_VALUE', payload: e.target.value });
    };

    const handleDropdownChange = (e) => {
        dispatch({ type: 'SET_DROPDOWN_VALUE', payload: e.target.value });
    };

    return (
        <div style={formStyles.formContainer}>
            <input
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter your budget"
                min="1"
                style={formStyles.textField}
            />
            <select
                value={dropdownValue}
                onChange={handleDropdownChange}
                style={formStyles.dropdown}
                defaultValue=""
            >
                <option value="" disabled hidden>Select a usage</option>
                <option value="gaming">Gaming</option>
                <option value="school">School</option>
                <option value="work">Work</option>
            </select>
            <button
                onClick={handleSubmit}
                style={{
                    ...formStyles.button,
                    opacity: isValidInput() ? 1 : 0.5,
                    cursor: isValidInput() ? 'pointer' : 'not-allowed',
                }}
                disabled={!isValidInput()}
            >
                Generate
            </button>
        </div>
    );
};

export default BudgetForm;