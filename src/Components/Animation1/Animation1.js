import React from 'react';
import { useSpring, animated } from 'react-spring'


const Animation1 = () => {
    const props = useSpring({ to: { opacity: 0.5 }, from: { opacity: 1 } })

    return (
        <div>
            <animated.h1 style={props}>I will fade in</animated.h1>
        </div>
    );
};

export default Animation1;