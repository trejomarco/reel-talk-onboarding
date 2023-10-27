





import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import styles from './UserDetailsForm.module.css';
import Image from 'next/image';
import reelOrangeIcon from '../assets/reel-orange-icon.png';

const UserDetailsForm: React.FC = () => {
    const [displayName, setDisplayName] = useState('');
    const [location, setLocation] = useState('');
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState<number>(1);

    const onCropChange = useCallback((newCrop: { x: number, y: number }) => {
        setCrop(newCrop);
    }, []);

    const onZoomChange = useCallback((newZoom: number) => {
        setZoom(newZoom);
    }, []);

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
        <div className={styles["user-details-form"]}>
            <div className={styles.reelIconContainer}>
                <Image src={reelOrangeIcon} alt="Reel Icon" width={60} height={60} />
            </div>

            <div className={styles["image-section"]}>
                <div className={styles["image-cropper-container"]}>
                    {imageSrc ? (
                        <Cropper
                            image={imageSrc}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={onCropChange}
                            onZoomChange={onZoomChange}
                        />
                    ) : (
                        <div className={styles["image-placeholder"]}>
                            Image
                        </div>
                    )}
                </div>
                <label className={styles['upload-button']}>
                    Upload Image
                    <input
                        type="file"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                </label>
            </div>
            <input
                className={styles.textfield}
                type="text"
                placeholder="Display Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
            />
            <input
                className={styles.textfield}
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
        </div>
    );
};

export default UserDetailsForm;




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





















































