// NextButton.tsx
import styles from './NextButton.module.css';

const NextButton: React.FC = () => {
    const handleNavigation = () => {
        // Navigate to the next webpage
        // This will depend on what you're using for navigation
        // E.g., with Next.js, you might use: Router.push('/nextPage')
    };

    return (
        <button className={styles.nextButton} onClick={handleNavigation}>
            Next
        </button>
    );
};

export default NextButton;
