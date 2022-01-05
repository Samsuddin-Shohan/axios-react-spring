import React from 'react';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Animation2 = () => {
    const [flip, set] = useState(false);
    const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    // config: config.molasses,
    onRest: () => set(!flip),
  });
    return (
        <div>
            <animated.h1 style={props}>hello</animated.h1>
        </div>
    );
};

export default Animation2;