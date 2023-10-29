
import React, { useState, useRef } from 'react';
import styles from './UserDetailsForm.module.css';

const UserDetailsForm: React.FC = () => {
    const [displayName, setDisplayName] = useState<string>('Karl W.');
    const [location, setLocation] = useState<string>('Unknown location');
    const [bio, setBio] = useState<string>('I’m a huge horror movie buff that favors MCU over DC any day. I also love Crime shows and my favorite hero is Spiderman ...');
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
            };
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Customize your profile</h2>
            <p className={styles.description}>Personalizing your profile will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>

            <div className={styles["profile-section"]}>
                <div
                    className={styles["profile-image"]}
                    style={{ backgroundImage: `url(${imageSrc})` }}
                    onClick={() => fileInputRef.current?.click()}
                >
                    {!imageSrc && displayName[0]}
                    <span className={styles["add-icon"]}>+</span>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                        accept="image/*"
                        ref={fileInputRef}
                    />
                </div>

                <div className={styles["profile-details"]}>
                    <h3 className={styles.displayName}>{displayName}</h3>
                    <p>{location}</p>
                    <textarea
                        className={styles.bioTextarea}
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows={3}
                    ></textarea>
                </div>
            </div>

            <div className={styles["action-buttons"]}>
                <button className={`${styles.button} ${styles.cancel}`}>Cancel</button>
                <button className={`${styles.button} ${styles.next}`}>Next</button>
            </div>
        </div>
    );
};

export default UserDetailsForm;






























































// import React, { useState, useRef } from 'react';
// import styles from './UserDetailsForm.module.css';

// const UserDetailsForm: React.FC = () => {
//     const [displayName, setDisplayName] = useState<string>('Karl W.');
//     const [location, setLocation] = useState<string>('Unknown location');
//     const [bio, setBio] = useState<string>('I’m a huge horror movie buff that favors MCU over DC any day. I also love Crime shows and my favorite hero is Spiderman ...');
//     const [imageSrc, setImageSrc] = useState<string | null>(null);
//     const fileInputRef = useRef<HTMLInputElement | null>(null);

//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files![0];
//         if (file) {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onloadend = () => {
//                 setImageSrc(reader.result as string);
//             };
//         }
//     };

//     return (
//         <div className={styles.container}>
//             <h2>Customize your profile</h2>
//             <p>Personalizing your profile will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.</p>

//             <div className={styles["profile-section"]}>
//                 <div
//                     className={styles["profile-image"]}
//                     style={{ backgroundImage: `url(${imageSrc})` }}
//                     onClick={() => fileInputRef.current?.click()}
//                 >
//                     {!imageSrc && displayName[0]}
//                     <span className={styles["add-icon"]}>+</span>
//                     <input
//                         type="file"
//                         onChange={handleImageChange}
//                         style={{ display: 'none' }}
//                         accept="image/*"
//                         ref={fileInputRef}
//                     />
//                 </div>

//                 <div className={styles["profile-details"]}>
//                     <h3>{displayName}</h3>
//                     <p>{location}</p>
//                     <textarea
//                         className={styles.bioTextarea}
//                         value={bio}
//                         onChange={(e) => setBio(e.target.value)}
//                         rows={3}
//                     ></textarea>
//                 </div>
//             </div>

//             <div className={styles["action-buttons"]}>
//                 <button className={styles.cancel}>Cancel</button>
//                 <button className={styles.next}>Next</button>
//             </div>
//         </div>
//     );
// };

// export default UserDetailsForm;






























































































// import React, { useState, useCallback } from 'react';
// import Cropper from 'react-easy-crop';
// import styles from './UserDetailsForm.module.css';
// import Image from 'next/image';
// import reelOrangeIcon from '../assets/reel-orange-icon.png';

// const UserDetailsForm: React.FC = () => {
//     const [displayName, setDisplayName] = useState('');
//     const [location, setLocation] = useState('');
//     const [imageSrc, setImageSrc] = useState<string | null>(null);
//     const [crop, setCrop] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
//     const [zoom, setZoom] = useState<number>(1);

//     const onCropChange = useCallback((newCrop: { x: number, y: number }) => {
//         setCrop(newCrop);
//     }, []);

//     const onZoomChange = useCallback((newZoom: number) => {
//         setZoom(newZoom);
//     }, []);

//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files![0];
//         if (file) {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onloadend = () => {
//                 setImageSrc(reader.result as string);
//             };
//         }
//     };



//     return (
//         <div className={styles["user-details-form"]}>
//             <div className={styles["progress-bar"]}>
//                 {/* Example: 5 steps, step 2 is active */}
//                 <div className={styles["progress-dot"]}></div>
//                 <div className={`${styles["progress-dot"]} ${styles["active"]}`}></div>
//                 <div className={styles["progress-dot"]}></div>
//                 <div className={styles["progress-dot"]}></div>
//                 <div className={styles["progress-dot"]}></div>
//             </div>

//             <h1 className={styles.title}>Customize your profile</h1>
//             <p className={styles.subtitle}>
//                 Personalizing your profile will enable us to suggest like-minded users...
//             </p>

//             <div className={styles["image-section"]}>
//                 K
//                 <div className={styles["add-icon"]}>
//                     +
//                 </div>
//             </div>

//             <div className={styles["name-location"]}>
//                 <h2>Karl W.</h2>
//                 <p>📍 Unknown location</p>
//             </div>

//             <textarea
//                 className={styles.bio}
//                 placeholder="Tell us about yourself..."
//             ></textarea>

//             <div className={styles["button-group"]}>
//                 <button className={`${styles.button} ${styles["cancel-button"]}`}>Cancel</button>
//                 <button className={`${styles.button} ${styles["next-button"]}`}>Next</button>
//             </div>
//         </div>
//     );
// };

// export default UserDetailsForm;

















































































//     return (
//         <div className={styles["user-details-form"]}>
//             <div className={styles.reelIconContainer}>
//                 <Image src={reelOrangeIcon} alt="Reel Icon" width={60} height={60} />
//             </div>

//             <div className={styles["image-section"]}>
//                 <div className={styles["image-cropper-container"]}>
//                     {imageSrc ? (
//                         <Cropper
//                             image={imageSrc}
//                             crop={crop}
//                             zoom={zoom}
//                             aspect={1}
//                             onCropChange={onCropChange}
//                             onZoomChange={onZoomChange}
//                         />
//                     ) : (
//                         <div className={styles["image-placeholder"]}>
//                             Image
//                         </div>
//                     )}
//                 </div>
//                 <label className={styles['upload-button']}>
//                     Upload Image
//                     <input
//                         type="file"
//                         onChange={handleImageChange}
//                         style={{ display: 'none' }}
//                     />
//                 </label>
//             </div>
//             <input
//                 className={styles.textfield}
//                 type="text"
//                 placeholder="Display Name"
//                 value={displayName}
//                 onChange={(e) => setDisplayName(e.target.value)}
//             />
//             <input
//                 className={styles.textfield}
//                 type="text"
//                 placeholder="Location"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//             />
//         </div>
//     );
// };

// export default UserDetailsForm;




// import React, { useState, useCallback } from 'react';
// import Cropper from 'react-easy-crop';
// import styles from './UserDetailsForm.module.css';
// import Image from 'next/image';
// import reelOrangeIcon from '../assets/reel-orange-icon.png';

// const UserDetailsForm: React.FC = () => {
//     const [displayName, setDisplayName] = useState('');
//     const [location, setLocation] = useState('');
//     const [imageSrc, setImageSrc] = useState<string | null>(null);
//     const [crop, setCrop] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
//     const [zoom, setZoom] = useState<number>(1);

//     const onCropChange = useCallback((newCrop: { x: number, y: number }) => {
//         setCrop(newCrop);
//     }, []);

//     const onZoomChange = useCallback((newZoom: number) => {
//         setZoom(newZoom);
//     }, []);

//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files![0];
//         if (file) {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onloadend = () => {
//                 setImageSrc(reader.result as string);
//             };
//         }
//     };

//     return (
//         <div className={styles["user-details-form"]}>
//             <div className={styles.reelIconContainer}>
//                 <Image src={reelOrangeIcon} alt="Reel Icon" width={60} height={60} />
//             </div>

//             <div className={styles["image-section"]}>
//                 <div className={styles["image-cropper-wrapper"]}>
//                     {imageSrc ? (
//                         <Cropper
//                             image={imageSrc}
//                             crop={crop}
//                             zoom={zoom}
//                             aspect={1}
//                             onCropChange={onCropChange}
//                             onZoomChange={onZoomChange}
//                         />
//                     ) : (
//                         <div className={styles["image-placeholder"]}>
//                             Image
//                         </div>
//                     )}
//                 </div>

//                 <label className={styles['upload-button']}>
//                     Upload Image
//                     <input
//                         type="file"
//                         onChange={handleImageChange}
//                         style={{ display: 'none' }}
//                     />
//                 </label>
//             </div>

//             <input
//                 className={styles.textfield}
//                 type="text"
//                 placeholder="Display Name"
//                 value={displayName}
//                 onChange={(e) => setDisplayName(e.target.value)}
//             />
//             <input
//                 className={styles.textfield}
//                 type="text"
//                 placeholder="Location"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//             />

//             {/* New Next button */}
//             <button className={styles['next-button']}>Next</button>
//         </div>
//     );
// };

// export default UserDetailsForm;





















































