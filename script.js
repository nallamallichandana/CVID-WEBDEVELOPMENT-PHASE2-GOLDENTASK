const urlInput = document.getElementById('urlInput');
const result = document.getElementById('result');

function shortenLink() {
    // Just a simple simulation by creating a hash.
    // In a real-world scenario, you'd send the URL to the server to get a shortened link.
    const hash = btoa(urlInput.value).substring(0, 8);
    const shortenedLink = `http://short.ly/${hash}`;

    result.innerHTML = `<a href="${shortenedLink}" target="_blank">${shortenedLink}</a>`;
}