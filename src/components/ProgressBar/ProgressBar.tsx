import React from 'react';
import styles from './ProgressBar.module.css';

interface Props {
    progress: number;  // Represents the percentage of progress, from 0 to 100.
}

const ProgressBar: React.FC<Props> = ({ progress }) => {
    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressBarFill} style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressBar;
