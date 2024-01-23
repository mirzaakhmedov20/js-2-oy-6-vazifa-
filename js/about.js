import { getData } from "./function.js";
const name = document.getElementById("name");
const price = document.getElementById("price");
const year = document.getElementById("year");
const color = document.getElementById("color");
const type = document.getElementById("type");
const desc = document.getElementById("desc");
const img = document.getElementById("img");
const del = document.getElementById("delete");

let elId;
document.addEventListener("DOMContentLoaded", function () {
  let urlIndex = window.location.href.search("id=");

  if (urlIndex > 0) {
     elId = window.location.href.substring(urlIndex + 3);
    if (elId) {
      let data = getData();
      let car = data.find((el) => {
        return el.id == elId;
      });

      name.innerHTML = car.name;
      price.innerHTML = car.price;
      year.innerHTML = car.year;
      color.innerHTML = car.color;
      img.setAttribute("src", car.img);
      type.innerHTML = car.type;
      desc.innerHTML = car.desc;
      console.log(car);
    } else {
      window.location.assign("http://127.0.0.1:5500/index.html");
    }
  } else {
    window.location.assign("http://127.0.0.1:5500/index.html");
  }
});

del && del.addEventListener('click', function () {
    let isDelete = confirm('Rosdan ham ushbu malumotni ochirmoqchimisi');
    if (isDelete) {
        let data = getData();
        data = data.filter(car =>{
            return car.id != elId
        })
        localStorage.setItem('cars',JSON.stringify(data));
        window.location.assign("http://127.0.0.1:5500/index.html");
        // console.log(this);
    }
})