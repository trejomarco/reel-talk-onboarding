import React, { useState } from 'react';
import styles from './BirthdaySelection.module.css'; // Create a corresponding CSS module

export default function BirthdaySelection() {
    const [dateOfBirth, setDateOfBirth] = useState(new Date());

    return (
        <div className={styles.container}>
            <h2>Mind sharing your birthdate?</h2>
            <p>
                To personalize your content recommendations and to ensure it's all
                age-appropriate, could you kindly share your date of birth with us?
            </p>
            <input
                type="date"
                value={dateOfBirth.toISOString().substr(0, 10)}
                onChange={(e) => setDateOfBirth(new Date(e.target.value))}
            />
            <div>
                <button>Back</button>
                <button>Next</button>
            </div>
        </div>
    );
}
