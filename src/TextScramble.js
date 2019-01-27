class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#_';
        this.update = this.update.bind(this);
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);

        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 20);
            const end = Math.floor(Math.random() * 20) + start;
            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    updateLoop(i, n) {
        setTimeout(() => {
            let { from, to, start, end, char } = this.queue[i];

            if (this.frame >= end) {
                this.complete++;
                this.output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) { char = this.randomChar(); this.queue[i].char = char; }
                this.output += `<span class='dud'>${char}</span>`;
            } else {
                this.output += from;
            }

            if (++i < n) this.updateLoop(i, n);
            else {
                this.el.innerHTML = this.output;
                if (this.complete === this.queue.length) { this.resolve(); } else {
                    this.frameRequest = requestAnimationFrame(this.update); this.frame++;
                }
            }
        }, 5);
    }

    update() {
        this.output = '';
        this.complete = 0;
        this.updateLoop(0, this.queue.length);
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

export default TextScramble;