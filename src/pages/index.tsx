import React from 'react';
import UserDetailsForm from '../components/UserDetailsForm';
import NextButton from '../components/NextButton';
import ProgressBar from '../components/ProgressBar/ProgressBar'; // Import ProgressBar
import styles from '../styles/Home.module.css';

export default function Home() {
  const currentProgress = 25; // For the initial page, you can set the progress as needed

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
        <ProgressBar progress={currentProgress} />
      </div>

      <h1 className={styles.onboardingTitle}>Reel Talk Onboarding</h1>
      <UserDetailsForm />
      <NextButton />
    </div>
  );
}







































// import React from 'react';
// import UserDetailsForm from '../components/UserDetailsForm';
// import NextButton from '../components/NextButton';
// import ProgressBar from '../components/ProgressBar/ProgressBar'; // Import ProgressBar
// import styles from '../styles/Home.module.css';

// export default function Home() {
//   const currentProgress = 25; // For the initial page, you can set the progress as needed

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.onboardingTitle}>Reel Talk Onboarding</h1>

//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
//         <ProgressBar progress={currentProgress} />
//       </div>

//       <UserDetailsForm />
//       <NextButton />
//     </div>
//   );
// }




















// import React from 'react';
// import UserDetailsForm from '../components/UserDetailsForm';
// import NextButton from '../components/NextButton';
// import styles from '../styles/Home.module.css';





// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.onboardingTitle}>Reel Talk Onboarding</h1>
//       <UserDetailsForm />
//       <NextButton />
//     </div>
//   );
// }
















// import React from 'react';
// import UserDetailsForm from '../components/UserDetailsForm';
// import styles from '../styles/Home.module.css'; // Ensure the path is correct






// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.onboardingTitle}>Reel Talk Onboarding</h1>
//       <UserDetailsForm />
//     </div>
//   );
// }













// export default function Home() {
//   return (
//     <div className={styles.main}>
//       <h1 className={styles.onboardingTitle}>Reel Talk Onboarding</h1>
//       <UserDetailsForm />
//     </div>
//   );
// }













// import UserDetailsForm from '../components/UserDetailsForm';

// export default function Home() {
//   return (
//     <div>
//       <h1>Reel Talk Onboarding</h1>
//       <UserDetailsForm />
//     </div>
//   );
// }
