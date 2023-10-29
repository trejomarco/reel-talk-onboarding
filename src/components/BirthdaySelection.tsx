
import React, { useState } from 'react';
import styles from './BirthdaySelection.module.css';

import princess from '../assets/princess.jpg';
import going30 from '../assets/13going30.jpg';
import thisIs40 from '../assets/thisis40.jpg';
import seventeenAgain from '../assets/17again.jpg';  // Fixed the naming for 17 again
import boyhood from '../assets/boyhood.jpg';
import anotherMovie from '../assets/another-movie.jpg'; // Made the naming more descriptive

import Image from 'next/image';


export default function BirthdaySelection() {
    const [dateOfBirth, setDateOfBirth] = useState(new Date());

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>Welcome User! <br /> Mind sharing your birthdate?</h2>
            </div>
            <div className={styles.descriptionContainer}>
                To personalize your content recommendations and to ensure it's all
                age-appropriate, could you kindly share your date of birth with us?
            </div>
            <div className={styles.inputContainer}>
                <input
                    type="date"
                    value={dateOfBirth.toISOString().substr(0, 10)}
                    onChange={(e) => setDateOfBirth(new Date(e.target.value))}
                />
            </div>
            <div className={styles.movieRecommendationContainer}>
                <h3 className={styles.movieRecommendationHeader}>We love our birthday movies 🎉</h3>

                <div className={styles.movieGrid}>
                    <Image src={princess} alt="Princess" width={72} height={109.03} />
                    <Image src={going30} alt="13 Going 30" width={72} height={109.03} />
                    <Image src={thisIs40} alt="This is 40" width={150} height={225} />
                    <Image src={seventeenAgain} alt="17 Again" width={150} height={225} />
                    <Image src={boyhood} alt="Boyhood" width={150} height={225} />
                    <Image src={anotherMovie} alt="Another Movie" width={150} height={225} />

                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button>Back</button>
                <button>Next</button>
            </div>
        </div>
    );
}






































// import React, { useState } from 'react';
// import styles from './BirthdaySelection.module.css';


// import princess from '../assets/princess.jpg';
// import going30 from '../assets/13going30.jpg';
// import thisIs40 from '../assets/thisis40.jpg';
// // ... Import the rest of the movie images ...
// import 17again from '../assets/17again.jpg';
// import boyhood from '../assets/boyhood.jpg';
// import another from '../assets/another-movie.jpg';


// export default function BirthdaySelection() {
//     const [dateOfBirth, setDateOfBirth] = useState(new Date());

//     return (
//         <div className={styles.container}>
//             <div className={styles.titleContainer}>
//                 <h2>Welcome User! <br /> Mind sharing your birthdate?</h2>
//             </div>
//             <div className={styles.descriptionContainer}>
//                 To personalize your content recommendations and to ensure it's all
//                 age-appropriate, could you kindly share your date of birth with us?
//             </div>
//             <div className={styles.inputContainer}>
//                 <input
//                     type="date"
//                     value={dateOfBirth.toISOString().substr(0, 10)}
//                     onChange={(e) => setDateOfBirth(new Date(e.target.value))}
//                 />
//             </div>




//             <div className={styles.movieRecommendationContainer}>
//                 <h3>We love our birthday movies 🎉</h3>
//                 <div className={styles.movieGrid}>
//                     {/* You can replace the below movie images with the actual images */}
//                     <img src={princess} alt="Princess" />
//                     <img src="../assets/13going30.jpg" alt="13 Going 30" />
//                     <img src="/path/to/thisis40.jpg" alt="This is 40" />
//                     <img src="/path/to/17again.jpg" alt="17 Again" />
//                     <img src="/path/to/boyhood.jpg" alt="Boyhood" />
//                     <img src="/path/to/another-movie.jpg" alt="Another Movie" />
//                 </div>
//             </div>






//             <div className={styles.buttonContainer}>
//                 <button>Back</button>
//                 <button>Next</button>
//             </div>
//         </div>
//     );
// }















































// import React, { useState, useRef } from 'react';
// import styles from './BirthdaySelection.module.css';

// export default function BirthdaySelection() {
//     const [dateOfBirth, setDateOfBirth] = useState(new Date());
//     const inputRef = useRef<HTMLInputElement>(null);  // <-- specify the type here

//     const handleContainerClick = () => {
//         if (inputRef.current) {
//             inputRef.current.click();
//         }
//     };

//     return (
//         <div className={styles.container}>
//             <div className={styles.titleContainer}>
//                 <h2>Welcome User! <br /> Mind sharing your birthdate?</h2>
//             </div>
//             <div className={styles.descriptionContainer}>
//                 To personalize your content recommendations and to ensure it's all
//                 age-appropriate, could you kindly share your date of birth with us?
//             </div>
//             <div className={styles.inputContainer} onClick={handleContainerClick}>
//                 {dateOfBirth.toISOString().substr(0, 10)}
//                 <input
//                     ref={inputRef}
//                     type="date"
//                     value={dateOfBirth.toISOString().substr(0, 10)}
//                     onChange={(e) => setDateOfBirth(new Date(e.target.value))}
//                     className={styles.dateInput}
//                 />
//             </div>
//             <div className={styles.buttonContainer}>
//                 <button>Back</button>
//                 <button>Next</button>
//             </div>
//         </div>
//     );
// }












































// import React, { useState, useRef } from 'react';
// import styles from './BirthdaySelection.module.css';

// export default function BirthdaySelection() {
//     const [dateOfBirth, setDateOfBirth] = useState(new Date());
//     const inputRef = useRef<HTMLInputElement>(null);

//     const handleContainerClick = () => {
//         if (inputRef.current) {
//             inputRef.current.focus();
//         }
//     };

//     return (
//         <div className={styles.container}>
//             <div className={styles.titleContainer}>
//                 <h2>Welcome User! <br /> Mind sharing your birthdate?</h2>
//             </div>
//             <div className={styles.descriptionContainer}>
//                 To personalize your content recommendations and to ensure it's all
//                 age-appropriate, could you kindly share your date of birth with us?
//             </div>
//             <div className={styles.inputContainer} onClick={handleContainerClick} data-date={dateOfBirth.toISOString().substr(0, 10)}>
//                 <input
//                     ref={inputRef}
//                     type="date"
//                     value={dateOfBirth.toISOString().substr(0, 10)}
//                     onChange={(e) => setDateOfBirth(new Date(e.target.value))}
//                 />
//             </div>

//             <div className={styles.buttonContainer}>
//                 <button>Back</button>
//                 <button>Next</button>
//             </div>
//         </div>
//     );
// }


















































// import React, { useState } from 'react';
// import styles from './BirthdaySelection.module.css';

// export default function BirthdaySelection() {
//     const [dateOfBirth, setDateOfBirth] = useState(new Date());

//     const handleContainerClick = () => {
//         const input = document.querySelector('.' + styles.inputContainer + ' input[type="date"]') as HTMLInputElement | null;

//         if (input) {
//             input.focus();
//         }
//     };


//     return (
//         <div className={styles.container}>
//             <div className={styles.titleContainer}>
//                 <h2>Welcome User! <br /> Mind sharing your birthdate?</h2>
//             </div>
//             <div className={styles.descriptionContainer}>
//                 To personalize your content recommendations and to ensure it's all
//                 age-appropriate, could you kindly share your date of birth with us?
//             </div>
//             <div className={styles.inputContainer} onClick={handleContainerClick}>
//                 <input
//                     type="date"
//                     value={dateOfBirth.toISOString().substr(0, 10)}
//                     onChange={(e) => setDateOfBirth(new Date(e.target.value))}
//                 />
//             </div>
//             <div className={styles.buttonContainer}>
//                 <button>Back</button>
//                 <button>Next</button>
//             </div>
//         </div>
//     );
// }










































// import React, { useState } from 'react';
// import styles from './BirthdaySelection.module.css';

// export default function BirthdaySelection() {
//     const [dateOfBirth, setDateOfBirth] = useState(new Date());

//     return (
//         <div className={styles.container}>
//             <div className={styles.titleContainer}>
//                 <h2>Welcome User! <br /> Mind sharing your birthdate?</h2>
//             </div>
//             <div className={styles.descriptionContainer}>
//                 To personalize your content recommendations and to ensure it's all
//                 age-appropriate, could you kindly share your date of birth with us?
//             </div>
//             <div className={styles.inputContainer}>
//                 <input
//                     type="date"
//                     value={dateOfBirth.toISOString().substr(0, 10)}
//                     onChange={(e) => setDateOfBirth(new Date(e.target.value))}
//                 />
//             </div>
//             <div className={styles.buttonContainer}>
//                 <button>Back</button>
//                 <button>Next</button>
//             </div>
//         </div>
//     );
// }


































































// import React, { useState } from 'react';
// import styles from './BirthdaySelection.module.css';

// export default function BirthdaySelection() {
//     const [dateOfBirth, setDateOfBirth] = useState(new Date());

//     return (
//         <div className={styles.container}>
//             <div className={styles.titleContainer}>
//                 <h2 className={styles.title}>Welcome User! <br /> Mind sharing your birthdate?</h2>
//             </div>
//             <div className={styles.descriptionContainer}>
//                 <p className={styles.description}>
//                     To personalize your content recommendations and to ensure it's all
//                     age-appropriate, could you kindly share your date of birth with us?
//                 </p>
//             </div>
//             <div className={styles.inputContainer}>
//                 <input
//                     type="date"
//                     value={dateOfBirth.toISOString().substr(0, 10)}
//                     onChange={(e) => setDateOfBirth(new Date(e.target.value))}
//                 />
//             </div>
//             <div className={styles.buttonContainer}>
//                 <button>Back</button>
//                 <button>Next</button>
//             </div>
//         </div>
//     );
// }










































// import React, { useState } from 'react';
// import styles from './BirthdaySelection.module.css';

// export default function BirthdaySelection() {
//     const [dateOfBirth, setDateOfBirth] = useState(new Date());

//     return (
//         <div className={styles.container}>
//             <div className={styles.titleContainer}>
//                 <h2 className={styles.title}>Mind sharing your birthdate?</h2>
//             </div>
//             <div className={styles.descriptionContainer}>
//                 <p className={styles.description}>
//                     To personalize your content recommendations and to ensure it's all
//                     age-appropriate, could you kindly share your date of birth with us?
//                 </p>
//             </div>
//             <div className={styles.inputContainer}>
//                 <input
//                     type="date"
//                     value={dateOfBirth.toISOString().substr(0, 10)}
//                     onChange={(e) => setDateOfBirth(new Date(e.target.value))}
//                 />
//             </div>
//             <div className={styles.buttonContainer}>
//                 <button>Back</button>
//                 <button>Next</button>
//             </div>
//         </div>
//     );
// }
