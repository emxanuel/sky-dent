const toggleShowElement = (element: HTMLElement) => {
    element.classList.toggle('-mt-96')
};

const scrollElement = (id: string) => {
    const element = document.getElementById(id) as HTMLElement
    window.scroll({
        top: element.offsetTop - 96
    }) 
}

export { toggleShowElement, scrollElement };
