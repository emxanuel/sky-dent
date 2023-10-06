import { NavigateFunction } from "react-router-dom";

const toggleShowElement = (element: HTMLElement) => {
    element.classList.toggle('-mt-96')
};

const scrollElement = (id: string, navigate: NavigateFunction) => {
    let element = document.getElementById(id) as HTMLElement
    if (window.location.pathname !== '/'){
        navigate('/')
        setTimeout(() => {
            element = document.getElementById(id) as HTMLElement
            window.scroll({
                top: element.offsetTop - 96
            }) 
        }, 100);
    }
    else{
        window.scroll({
            top: element.offsetTop - 96
        }) 
    }
}

const scrollZero = () => {
    window.scroll({
        top: 0
    })
}

export { toggleShowElement, scrollElement, scrollZero };
