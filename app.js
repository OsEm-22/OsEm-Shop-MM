let page = document.getElementById("page");
let display = "";
let box = document.getElementById("display-box");
box.style.display = "none";

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((result) => {
    for (let i = 0; i < result.length; i++) {
      display += `<tr onmouseover="detail(${result[i].id})">
                <td>${result[i].title}</td>
                <td>${result[i].id}</td>
                <td>${result[i].price}</td>
                <td>${result[i].rating.rate}</td>
                <td>
                    <a href="${result[i].image}" target="_blank">
                        <img src="${result[i].image}" class="api-image">
                    </a>
                </td>
                </tr>`;
      page.innerHTML = display;
    }
  });

function detail(id) {
  fetch("https://fakestoreapi.com/products/" + id)
    .then((response) => response.json())
    .then((data) => {
      box.innerHTML = `<div class="display-image">
                                <img src="${data.image}" alt="item's photo">
                            </div>
                            <div class="display-texts">
                                <h4>Title ${data.title}</h4>
                                <h5>ID ${data.id}</h5>
                                <h5>Rating ${data.rating.rate}</h5>
                                <h5>Price ${data.price} USD</h5>
                                <a href="${data.image}" target="_blank" 
                                class="btn">Buy Now</a>
                            </div>`;
    });
  box.style.display = "flex";
}
