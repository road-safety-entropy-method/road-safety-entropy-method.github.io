import {useEffect} from "react";

type TScrollToElementProps = {
    elementId: string;
}

export function ScrollToElement({ elementId }: TScrollToElementProps) {
    useEffect(() => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [elementId]);

    return null;
}