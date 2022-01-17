import React, { useRef, useCallback } from 'react';
import Webcamp1 from 'react-webcam';
function WebCamp() {
    const webref = useRef(null);
    const showimage = useCallback(() => {
        const img = webref.current.getScreenshot();
        console.log(img);
    }, [webref]);

    return (
        <>
            <h1>hello</h1>
            <Webcamp1 screenshotFormat="image/jpeg" ref={webref} />
            <button onClick={showimage}>clickme</button>
        </>
    );
}

export default WebCamp;
