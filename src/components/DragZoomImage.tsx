import React, { useState, useRef } from 'react';
import styles from './DragZoomImage.module.css';

interface DragZoomImageProps {
    src: string;
}

const DragZoomImage: React.FC<DragZoomImageProps> = ({ src }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const handleWheel = (e: React.WheelEvent) => {
        if (e.deltaY < 0) {
            setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3)); // zoom in
        } else {
            setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // zoom out
        }
    };

    return (
        <div className={styles["image-container"]}>
            <img
                ref={imageRef}
                src={src}
                alt="User's profile"
                onWheel={handleWheel}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                }}
            />
        </div>
    );
};

export default DragZoomImage;
