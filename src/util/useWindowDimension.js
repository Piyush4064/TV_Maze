import React from "react";

const getwindowDimensons = () => {
    const {innerWidth: width, innerHeight: height}  = window;
    return{ width, height};
}


const useWindowDimension = () => {
    const [windowDimension, setWindowDimension] = React.useState(getwindowDimensons());

    React.useEffect(() => {
        const handleResize = () => {
            setWindowDimension(getwindowDimensons());
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return windowDimension;
}


export default useWindowDimension;
