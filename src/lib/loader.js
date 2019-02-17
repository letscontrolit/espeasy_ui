class Loader {
    constructor() {
        this.loader = document.querySelector('.loading');
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