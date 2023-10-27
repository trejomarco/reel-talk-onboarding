import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import styles from './UserDetailsForm.module.css';
import ReelOrangeIcon from '../assets/reel-orange-icon.svg'; 

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

<img src={ReelOrangeIcon} className={styles.reelIcon} alt="Reel Icon" />


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
                            Your picture goes here
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


   


//         return (
//             <div className={styles["user-details-form"]}>
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
//                             Your picture goes here
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

//                 <input
//                     className={styles.textfield}
//                     type="text"
//                     placeholder="Display Name"
//                     value={displayName}
//                     onChange={(e) => setDisplayName(e.target.value)}
//                 />
//                 <input
//                     className={styles.textfield}
//                     type="text"
//                     placeholder="Location"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                 />
//             </div>
//         );
//     };

//     export default UserDetailsForm;















// import React, { useState, useCallback } from 'react';
// import Cropper from 'react-easy-crop';
// import styles from './UserDetailsForm.module.css';

// const UserDetailsForm: React.FC = () => {
//     const [displayName, setDisplayName] = useState('');
//     const [location, setLocation] = useState('');
//     const [imageSrc, setImageSrc] = useState<string | null>(null);
//     const [crop, setCrop] = useState({ x: 0, y: 0 });
//     const [zoom, setZoom] = useState(1);

//     const onCropChange = useCallback((newCrop: Point) => {
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
//         <div className={styles.container}>

//             <div className={styles.header}>
//                 <img src="/assets/reel-talk-orange-logo.png" alt="Reel Talk Logo" />
//                 <span className={styles["header-text"]}>Reel Talk Onboarding</span>
//             </div>

//             <div className={styles["image-cropper-container"]}>
//                 {imageSrc ? (
//                     <Cropper
//                         image={imageSrc}
//                         crop={crop}
//                         zoom={zoom}
//                         aspect={1}
//                         onCropChange={onCropChange}
//                         onZoomChange={onZoomChange}
//                     />
//                 ) : (
//                     <div className={styles["image-placeholder"]}>
//                         Your picture goes here
//                     </div>
//                 )}
//             </div>

//             <label className={styles["upload-button"]}>
//                 Upload Image
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     style={{ display: 'none' }}
//                 />
//             </label>

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

// const UserDetailsForm: React.FC = () => {
//     const [displayName, setDisplayName] = useState('');
//     const [location, setLocation] = useState('');
//     const [imageSrc, setImageSrc] = useState<string | null>(null);
//     const [crop, setCrop] = useState({ x: 0, y: 0 });
//     const [zoom, setZoom] = useState(1);

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
//             <div className={styles["image-cropper-container"]}>
//                 {imageSrc ? (
//                     <Cropper
//                         image={imageSrc}
//                         crop={crop}
//                         zoom={zoom}
//                         aspect={1}
//                         onCropChange={onCropChange}
//                         onZoomChange={onZoomChange}
//                     />
//                 ) : (
//                     <div className={styles["image-placeholder"]}>
//                         Your picture goes here
//                     </div>
//                 )}
//             </div>

//             <label className={styles.upload-button}>
//                 Upload Image
//                 <input
//                     type="file"
//                     onChange={handleImageChange}
//                     style={{display: 'none'}}
//                 />
//             </label>

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





















































// import { Point } from 'react-easy-crop';
// import React, { useState, useCallback } from 'react';
// import Cropper from 'react-easy-crop';
// import styles from './UserDetailsForm.module.css';

// const UserDetailsForm: React.FC = () => {
//     const [displayName, setDisplayName] = useState('');
//     const [location, setLocation] = useState('');
//     const [imageSrc, setImageSrc] = useState<string | null>(null);
//     const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
//     const [zoom, setZoom] = useState(1);

//     const onCropChange = useCallback((newCrop: Point) => {
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
//             <div className={styles["image-cropper-container"]}>
//                 {imageSrc ? (
//                     <Cropper
//                         image={imageSrc}
//                         crop={crop}
//                         zoom={zoom}
//                         aspect={1}
//                         onCropChange={onCropChange}
//                         onZoomChange={onZoomChange}
//                     />
//                 ) : (
//                     <div className={styles["image-placeholder"]}>
//                         Your picture goes here
//                     </div>
//                 )}
//             </div>










//             <input
//                 type="file"
//                 onChange={handleImageChange}
//             />
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













// import { Area, Point } from 'react-easy-crop';
// import React, { useState, useCallback } from 'react';
// import Cropper from 'react-easy-crop';
// import styles from './UserDetailsForm.module.css';

// const UserDetailsForm: React.FC = () => {
//     const [displayName, setDisplayName] = useState('');
//     const [location, setLocation] = useState('');
//     const [imageSrc, setImageSrc] = useState<string | null>(null);
//     const [crop, setCrop] = useState({ x: 0, y: 0 });
//     const [zoom, setZoom] = useState(1);

//     const onCropChange = useCallback((newCrop: Point) => {
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
//             <div className={styles["image-cropper-container"]}>
//                 {imageSrc ? (
//                     <Cropper
//                         image={imageSrc}
//                         crop={crop}
//                         zoom={zoom}
//                         aspect={1}
//                         onCropChange={onCropChange}
//                         onZoomChange={onZoomChange}
//                     />
//                 ) : (
//                     <div className={styles["image-placeholder"]}>
//                         Your picture goes here
//                     </div>
//                 )}
//             </div>
//             <input
//                 type="file"
//                 onChange={handleImageChange}
//             />
//             <input
//                 type="text"
//                 placeholder="Display Name"
//                 value={displayName}
//                 onChange={(e) => setDisplayName(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Location"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//             />
//         </div>
//     );

//     // ...

// <input
//     className={styles.textfield}  // Add this
//     type="text"
//     placeholder="Display Name"
//     value={displayName}
//     onChange={(e) => setDisplayName(e.target.value)}
// />
// <input
//     className={styles.textfield}  // Add this
//     type="text"
//     placeholder="Location"
//     value={location}
//     onChange={(e) => setLocation(e.target.value)}
// />

// // ...

// };

// export default UserDetailsForm;


























// import styles from './UserDetailsForm.module.css';

// import { useState } from 'react';

// const UserDetailsForm: React.FC = () => {
//     const [displayName, setDisplayName] = useState('');
//     const [location, setLocation] = useState('');
//     const [previewImage, setPreviewImage] = useState<string | null>(null);

//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files![0];
//         if (file) {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onloadend = () => {
//                 setPreviewImage(reader.result as string);
//             };
//         }
//     };

//     return (
//         <div className={styles["user-details-form"]}>
//             <input
//                 type="text"
//                 placeholder="Display Name"
//                 value={displayName}
//                 onChange={(e) => setDisplayName(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Location"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//             />
//             <input type="file" onChange={handleImageChange} />
//             {previewImage && (
//                 <div className="preview-image">
//                     <img src={previewImage} alt="Uploaded Preview" />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UserDetailsForm;
