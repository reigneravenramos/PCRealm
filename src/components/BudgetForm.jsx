import React from 'react';

// Form Styles
const formStyles = {
    formContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '12px', boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '5px',
        },
    },
    dropdown: {
        width: '40%',
        height: '36px',
        padding: '0 10px',
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
        height: '36px',
        padding: '0 10px',
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
        height: '36px',
        padding: '0 15px',
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

// Budget Form Component
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