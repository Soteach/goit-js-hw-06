const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listRef = document.querySelector(".gallery");

// const listItems = images.map(({ url, alt, width, heigth }) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("js-gallery-item")
//   const imgEl = document.createElement("img");
//   imgEl.src = url;
//   imgEl.alt = alt;
//   imgEl.width = 360;
//   imgEl.height = 210;
//   itemEl.append(imgEl);
//   listRef.append(itemEl);
//   return listRef;
// });

// --------------З шаблонним рядком ----------------------
const listItems = images.map(({ url, alt, width, heigth }) => { 
  return `<li class="js-gallery-item"><a href=""><img src="${url}" alt="${alt}" width="${width}" heigth"${heigth}"></a></li>`
});

const markup = listItems.join("")
listRef.innerHTML = markup;

