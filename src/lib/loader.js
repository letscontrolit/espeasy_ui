class Loader {
    constructor() {
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.innerHTML = 'loading';
        document.body.appendChild(loader);
        this.loader = loader;
    }

    show() {
        this.loader.classList.add('show');
    }

    hide() {
        this.loader.classList.add('hide');
        setTimeout(() => {
            this.loader.classList.remove('hide');
            this.loader.classList.remove('show');
        }, 1000);
    }
}

export const loader = new Loader();