import React from 'react';
import BirthdaySelection from '../components/BirthdaySelection';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const Birthday: React.FC = () => {
    const currentProgress = 50; // Adjust this value as needed

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
                <ProgressBar progress={currentProgress} />
            </div>
            <BirthdaySelection />
        </div>
    );
};

export default Birthday;
