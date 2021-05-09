let cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"];

let load = function () {
    cards = cards.concat(cards)
    let div = document.createElement("div")

    for (let i = 0; i < cards.length; i++) {
        let rand = Math.floor(Math.random() * 16);

        let temp = cards[i];
        cards[i] = cards[rand];
        cards[rand] = temp;
    }

    for (let i = 0; i < 16; i++) {
        let div = document.createElement("div");
        div.className = "div";
        div.innerText = cards[i];
        document.body.appendChild(div);
    }


}
window.onload = load;