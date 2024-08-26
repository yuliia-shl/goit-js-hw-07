const items = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const h2 = item.querySelector("h2");
    console.log(`Category: ${h2.textContent}`);

    const elem = item.querySelectorAll("li");
    console.log(`Elements: ${elem.length}`);
});
