let cards;
let container;

let load = function () {
    container = document.getElementById("cards-container");
    cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"];

    cards = double(cards);
    cards = randomize(cards);
    loadOut();
}

let double = function (cards) {
    for (let i = 0; i < cards.length; i++) {
        cards[i + cards.length] = cards[i];
    }
    return cards;
}

let randomize = function (cards) {
    for (let i = 0; i < cards.length; i++) {
        let rand = Math.floor(Math.random() * 16);

        let temp = cards[i];
        cards[i] = cards[rand];
        cards[rand] = temp;
    }
    return cards;
}

let loadOut = function () {
    for (let i = 0; i < 16; i++) {
        let div = document.createElement('div');
        div.innerText = cards[i];
        document.body.appendChild(div);
    }
}
window.onload = load();



