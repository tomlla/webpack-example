function qAll(query) {
    return document.querySelectorAll(query);
}

function q(query) {
    return document.querySelector(query);
}

module.exports = {
    qAll: qAll,
    q: q,
};
