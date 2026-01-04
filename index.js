// index.js
export default function header1(text) {
    const el = document.createElement('h1');
    el.textContent = text;
    return el; // users still append content themselves
}

export function paragraph(text) {
    const el = document.createElement('p');
    el.textContent = text;
    return el;
}

// Automatically adds <title> to <head>
export function title(text) {
    let el = document.querySelector('head title');
    if (!el) {
        el = document.createElement('title');
        document.head.appendChild(el);
    }
    el.textContent = text;
    return el;
}

// Returns an <a> element (user can append)
export function link(url, text) {
    const el = document.createElement('a');
    el.href = url;
    el.textContent = text;
    return el;
}

// Automatically appends CSS to <head>
export function css(code) {
    const el = document.createElement('style');
    el.textContent = code;
    document.head.appendChild(el); // auto-inserted
    return el;
}
export function wait(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
export function font(name) {
    return css(`@import url('https://fonts.googleapis.com/css2?family=${name}');`);
}
