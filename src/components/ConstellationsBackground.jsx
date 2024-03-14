import React, { useEffect, useState } from 'react';

const ConstellationsBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();
    }, []);

    const generateStars = () => {
        const numStars = 790; 
        const minSize = 1;
        const maxSize = 3;
        const colors = ['#ffffff', '#cccccc'];
        const newStars = [];

        for (let i = 0; i < numStars; i++) {
            const size = Math.random() * (maxSize - minSize) + minSize;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            newStars.push({ size, color, x, y });
        }

        setStars(newStars);
    };

    return (
        <div className="constellations fixed inset-0 z-0 bg-black">
            <svg className="stars" style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%' }}>
                {stars.map((star, index) => (
                    <circle
                        key={index}
                        cx={`${star.x}%`}
                        cy={`${star.y}%`}
                        r={star.size / 2}
                        fill={star.color}
                    />
                ))}
            </svg>
        </div>
    );
};

export default ConstellationsBackground;
