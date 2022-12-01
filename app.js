//    function to display the data
function getData() {
  const cities = [];
  //    get the data from the json file
  fetch("au.json")
    .then((response) => response.json())
    .then((data) => {
      cities.push(...data);
      //    get the ul element
      const ul = document.querySelector("ul");
      //    loop through the data
      data.forEach((city) => {
        //    create a li element
        const li = document.createElement("li");
        //    add the data to the li element
        li.innerHTML = `
            <h2>${city.city}</h2>
            <p>State: ${city.admin_name}</p>
            <p>Population: ${city.population}</p>
          <p>latitude: ${city.lat}</p>
          <p>longitude: ${city.lng}</p>
            `;
        //    append the li element to the ul element
        ul.appendChild(li);
      });
    });

  console.log(cities);

  //    get the input element and find the data that matches the input city or state
  const input = document.querySelector("#myInput");
  input.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    const li = document.querySelectorAll("li");
    li.forEach((city) => {
      if (city.innerText.toLowerCase().indexOf(value) != -1) {
        city.style.display = "block";
      } else {
        city.style.display = "none";
      }
    });
  });
}

getData();
