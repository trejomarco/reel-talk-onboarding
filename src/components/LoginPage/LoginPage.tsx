import React from 'react';
import styles from './LoginPage.module.css';

type LoginPageProps = {
    onLogin?: () => void;
};

export default function LoginPage({ onLogin }: LoginPageProps) {

    // If you need to handle login attempts, you can use a function like this:
    const handleLoginAttempt = (method: string) => {
        console.log(`Attempting to log in with ${method}`);

        // You can replace this with actual login logic.
        // Once login is successful, you can call onLogin.
        if (onLogin) {
            onLogin();
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Log in</h1>
            <p className={styles.subtext}>
                By continuing, you agree to our
                <a href="#"> Terms of Service</a> and
                <a href="#"> Privacy Policy</a>.
            </p>
            <div className={styles.buttonGroup}>
                <button
                    className={`${styles.buttonBase} ${styles.appleButton}`}
                    onClick={() => handleLoginAttempt('Apple')}
                >
                    Continue with Apple
                </button>
                <button
                    className={`${styles.buttonBase} ${styles.googleButton}`}
                    onClick={() => handleLoginAttempt('Google')}
                >
                    Continue with Google
                </button>
                <button
                    className={`${styles.buttonBase} ${styles.facebookButton}`}
                    onClick={() => handleLoginAttempt('Facebook')}
                >
                    Continue with Facebook
                </button>
                <button
                    className={`${styles.buttonBase} ${styles.emailButton}`}
                    onClick={() => handleLoginAttempt('Email')}
                >
                    Continue with Email
                </button>
            </div>
            <div className={styles.footer}>
                <p>Don't have an account? <a href="#">Sign up</a></p>
                <button className={`${styles.buttonBase} ${styles.cancelButton}`}>Cancel</button>
            </div>
        </div>
    );
}













































// import React from 'react';
// import styles from './LoginPage.module.css';

// type LoginPageProps = {
//     onLogin?: () => void;
// };

// export default function LoginPage({ onLogin }: LoginPageProps) {

//     // If you need to handle login attempts, you can use a function like this:
//     const handleLoginAttempt = (method: string) => {
//         console.log(`Attempting to log in with ${method}`);

//         // You can replace this with actual login logic.
//         // Once login is successful, you can call onLogin.
//         if (onLogin) {
//             onLogin();
//         }
//     };

//     return (
//         <div className={styles.container}>
//             <h1 className={styles.title}>Log in</h1>
//             <p className={styles.subtext}>
//                 By continuing, you agree to our
//                 <a href="#"> Terms of Service</a> and
//                 <a href="#"> Privacy Policy</a>.
//             </p>
//             <div className={styles.buttonGroup}>
//                 <button
//                     className={`${styles.buttonBase} ${styles.appleButton}`}
//                     onClick={() => handleLoginAttempt('Apple')}
//                 >
//                     Continue with Apple
//                 </button>
//                 <button
//                     className={`${styles.buttonBase} ${styles.googleButton}`}
//                     onClick={() => handleLoginAttempt('Google')}
//                 >
//                     Continue with Google
//                 </button>
//                 <button
//                     className={`${styles.buttonBase} ${styles.facebookButton}`}
//                     onClick={() => handleLoginAttempt('Facebook')}
//                 >
//                     Continue with Facebook
//                 </button>
//                 <button
//                     className={`${styles.buttonBase} ${styles.emailButton}`}
//                     onClick={() => handleLoginAttempt('Email')}
//                 >
//                     Continue with Email
//                 </button>
//             </div>
//             <div className={styles.footer}>
//                 <p>Don't have an account? <a href="#">Sign up</a></p>
//                 <button className={`${styles.buttonBase} ${styles.cancelButton}`}>Cancel</button>
//             </div>
//         </div>
//     );
// }
