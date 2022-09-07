// const shoeImg = document.getElementById("shoeimage1");
// shoeImg.style.backgroundImage =
//   'url("https://images.asos-media.com/products/fred-perry-hughes-hi-top-leather-sneakers-in-black/203433481-1-black")';
document.addEventListener("DOMContentLoaded", () => {
  const shoes = document.getElementById("shoes");
  const search = document.getElementById("searchInput");
  getInfo("https://festuswanjohi.github.io/store.json").then((resp) => {
    resp.shoeInfo.forEach((product) => {
      const shoe = document.createElement("div");
      const img = document.createElement("div");
      const description = document.createElement("div");
      const price = document.createElement("div");
      shoe.className = "shoe";
      img.className = "shoe-image";
      description.className = "shoe-description";
      price.className = "shoe-price";
      img.style.backgroundImage = `url(https://${product.imageUrl})`;
      description.textContent = product.name;
      price.textContent = `$${product.price.current.value}`;
      shoe.appendChild(img);
      shoe.appendChild(description);
      shoe.appendChild(price);
      shoes.appendChild(shoe);
    });
    const shoe = document.querySelectorAll("div.shoe");
    shoe.forEach((singleShoe) => {
      search.addEventListener("keyup", () => {
        if (
          !singleShoe.childNodes[1].textContent
            .toLowerCase()
            .startsWith(search.value.toLowerCase().slice(0, 4), 0)
        ) {
          singleShoe.style.display = "none";
        } else {
          singleShoe.style.display = "block";
        }
      });
    });
  });

  async function getInfo(url) {
    const promise = await fetch(url);
    const response = await promise.json();
    return response;
  }
});
