const listRef = document.querySelectorAll(".item");
console.log("Number of categories:", listRef.length);


listRef.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.querySelectorAll("li").length); 
});