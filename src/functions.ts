const toggleShowElement = (element: HTMLElement) => {
    element.classList.toggle('-mt-96')
};

const scrollElement = (id: string) => {
    let element = document.getElementById(id) as HTMLElement
    if (window.location.pathname !== '/'){
        window.location.href = `${window.location.origin}/#${id}`
        setTimeout(() => {
            element = document.getElementById(id) as HTMLElement
            window.scroll({
                top: element.offsetTop + 96
            }) 
        }, 300);
    }
    else{
        window.scroll({
            top: element.offsetTop - 96
        }) 
    }
}

const scrollZero = () => {
    window.scroll({
        top: 0,
    })
}

export { toggleShowElement, scrollElement, scrollZero };
