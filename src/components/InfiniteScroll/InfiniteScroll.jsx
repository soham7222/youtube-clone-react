import React, { useRef, useEffect } from "react";

const InfiniteScroll = (props) => {
    const bottomElementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    props.onScrollEnd();
                }
            },
            {
                rootMargin: "10px",
            }
        );
        if (bottomElementRef.current) {
            observer.observe(bottomElementRef.current);
        }
        return () => {
            if (bottomElementRef.current) {
                observer.unobserve(bottomElementRef.current);
            }
        };
    }, [props.onScrollEnd]);

    return (
        <>
            {props.children}
            <div ref={bottomElementRef} />
        </>
    );
}

export default InfiniteScroll;
