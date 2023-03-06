    function displayCards(){

    let data = JSON.parse(localStorage.getItem("Subscriptions"));

    for (let i = 0; i < data.length; i++) {

    let cards = document.getElementById("cards");
    let card = document.createElement("div");
    card.setAttribute("class", "card mt-3")
    cards.appendChild(card);

    let listParent = document.createElement("ul");
    listParent.setAttribute("class", "list-group ");
    card.appendChild(listParent);

    let listItem1 = document.createElement("li");
    listItem1.setAttribute("class","list-group-item bg-warning")
    listParent.appendChild(listItem1);
    listItem1.textContent = `Name: ${data[i].userName}`

    let listItem2 = document.createElement("li");
    listItem2.setAttribute("class","list-group-item")
    listParent.appendChild(listItem2);
    listItem2.textContent = `Email: ${data[i].userEmail}`

    let listItem3 = document.createElement("li");
    listItem3.setAttribute("class","list-group-item")
    listParent.appendChild(listItem3);
    listItem3.textContent = `Subscription: ${data[i].userSub}`

    let listItem4 = document.createElement("li");
    listItem4.setAttribute("class","list-group-item")
    listParent.appendChild(listItem4);
    listItem4.textContent = `Interests: ${data[i].userInterest}`
}
}

displayCards();

/*Above code inserts a card for each subscriber, and inside card an unordered list with 4 list items. 
It works fine, but there's surely a faster way to do it. */

