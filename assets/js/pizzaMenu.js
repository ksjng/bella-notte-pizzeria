const pizzas = [ // https://105.pl/pizzeria-warszawa-targowek/
    {
        name: "01. Solo",
        image: "m_1-1.webp",
        ingredients: "sos, ser mozzarella, oregano",
        price: 35
    },
    {
        name: "02. Weekend",
        image: "m_2-weekend.webp",
        ingredients: "sos, ser mozzarella, pieczarki, oregano",
        price: 37
    },
    {
        name: "03. Time",
        image: "m_3-time.webp",
        ingredients: "sos, ser mozzarella, szynka, oregano",
        price: 38
    },
    {
        name: "04. Worker",
        image: "m_4-worker.webp",
        ingredients: "sos, ser mozzarella, salami pepperoni, oregano",
        price: 41
    },
    {
        name: "05. Enjoy",
        image: "m_5-enjoy.webp",
        ingredients: "sos, ser mozzarella, szynka, pieczarki, oregano",
        price: 42
    },
    {
        name: "06. Vege",
        image: "m_6-vege-1.webp",
        ingredients: "sos, ser mozzarella, brokuły, oliwki czarne, kukurydza, cebula czerwona, papryka kolorowa, oregano",
        price: 44
    },
    {
        name: "07. Havai",
        image: "m_7-havaii.webp",
        ingredients: "sos, ser mozzarella, szynka, ananas, oregano",
        price: 42
    },
    {
        name: "08. Tuna",
        image: "m_8-tunaaa.webp",
        ingredients: "sos, ser mozzarella, tuńczyk, oliwki czarne, kukurydza, cebula czerwona, pieprz kolorowy, oregano",
        price: 46
    }
];

const container = document.getElementById("pizza-grid");

pizzas.forEach(pizza => {

    const item = document.createElement("div");

    item.className = "pizza-col flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 bg-white p-4 rounded shadow";

    item.innerHTML = `
        <img src="assets/img/menu/${pizza.image}" alt="${pizza.name}" class="w-30 h-30 object-cover rounded md:w-32 h-auto text-center" />
        <div class="flex flex-col justify-between text-center md:text-left flex-1 h-full">
            <div>
                <h3 class="text-xl md:text-2xl font-semibold mb-1">${pizza.name}</h3>
                <p class="pizza-ingredients text-md text-gray-600">${pizza.ingredients}</p>
            </div>
            <div class="mt-2 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                <p class="text-md md:text-lg font-semibold text-gray-600">
                    od
                    <span class="font-bold text-orange-500">
                        <span class="pizza-price">${pizza.price.toFixed(2)}</span> 
                        zł
                    </span>
                </p>
                <button type="button" data-modal-target="order-modal" data-modal-toggle="order-modal" class="order-btn bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-1 rounded transition">Zamów</button>
            </div>
        </div>
    `;

    container.appendChild(item);

});

document.addEventListener("click", (e) => {

    if(!e.target.classList.contains("order-btn")) return;
    
    const itemDiv = e.target.closest("div.pizza-col");
    if(!itemDiv) return;
      
    const pizzaName = itemDiv.querySelector("h3").textContent;
    const pizzaImageSrc = itemDiv.querySelector("img").src;
    const pizzaIngredients = itemDiv.querySelector(".pizza-ingredients").textContent;
    const pizzaPrice = itemDiv.querySelector(".pizza-price").textContent;
      
    document.getElementById("modal-pizza-name").textContent = pizzaName;
    document.getElementById("modal-pizza-image").src = pizzaImageSrc;
    document.getElementById("modal-pizza-image").alt = pizzaName;
    document.getElementById("modal-pizza-ingredients").textContent = pizzaIngredients;
    document.getElementById("modal-pizza-price").textContent = pizzaPrice;

});