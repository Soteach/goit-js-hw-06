const listRef = document.querySelectorAll(".item");
console.log("Number of categories:", listRef.length);


listRef.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent);

    // const linkRef = item.querySelector("ul");
    // console.log("Elements:", linkRef.children.length); 
// ---------Спершу знайшов такий метод, тому лишу його. Вже потім у відео побачив як робить Сергій і зробив так само-------------------
    const linkRef = item.querySelectorAll("li");
    console.log("Elements:", item.querySelectorAll("li").length);
});