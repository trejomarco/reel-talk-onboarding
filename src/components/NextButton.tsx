import React from 'react';
import Link from 'next/link';
import styles from './NextButton.module.css';

type Props = {
    linkTo?: string;
}

const NextButton: React.FC<Props> = ({ linkTo = "/BirthdaySelection" }) => {
    return (
        <Link href={linkTo}>
            <button className={styles.nextButton}>Next</button>
        </Link>
    );
};

export default NextButton;
