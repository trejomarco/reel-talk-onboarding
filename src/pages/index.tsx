import React from 'react';
import UserDetailsForm from '../components/UserDetailsForm';
import styles from '../styles/Home.module.css'; // Ensure the path is correct






export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.onboardingTitle}>Reel Talk Onboarding</h1>
      <UserDetailsForm />
    </div>
  );
}













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
