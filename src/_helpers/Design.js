import React from "react";

export const doOnresize = () => {
    handleBTN();
    setTimeout(handleBTN, 800);
}

export const handleBTN = () => {
    setTimeout(() => {
        if (window.screen.width <= 992) {
            let windowHeight = window.innerHeight;
            if (document.querySelectorAll('.zl__onboarding')) {
                let elementArray = document.querySelectorAll('.zl__onboarding');
                for (let index = 0; index < elementArray.length; index++) {
                    elementArray[index].style.height = windowHeight;
                }
            }
        }
    }, 50);
}

export const useWindowSize = () => {
    const [size, setSize] = React.useState([0, 0]);
    React.useEffect(() => {
        function updateSize() {
            setSize([window.screen.width, window.innerHeight]);
            doOnresize();
        }

        window.addEventListener('resize', doOnresize);
        doOnresize();
        return () => window.removeEventListener('resize', doOnresize);
    }, []);
    return size;
};
