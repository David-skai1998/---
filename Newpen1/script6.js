const products = [
    {
        id: 7,
        name: "GIFORCE GTX 1080",
        price: 1800,
        category: "видеокарта",
        image: "https://www.gainward.com/main/event/2017/1080ti_nv/images/p5_01.png", // Путь к изображению
    },
    {
        id: 8,
        name: "GIFORCE GTX",
        price: 550,
        category: "игравые озу",
        image: "https://3dnews.ru/assets/external/illustrations/2020/02/18/1003916/sm.intro.800.jpg", // Путь к изображению
    },
    {
        id: 9,
        name: "GIFORCE GTX",
        price: 150,
        category: "Кейсы для компютеров",
        image: "https://trashbox.ru/nowebp/937582_599262/cougar-conquer-_-5lmr-_6.jpeg", // Путь к изображению
    },
    {
        id: 10,
        name: "inetl",
        price: 750,
        category: "Процессоры",
        image: "https://ichip.ru/blobimgs/uploads/2019/04/intel-core-i9-x-series-skylake.jpg", // Путь к изображению
    },
    {
        id: 11,
        name: "THUNDERXR3",
        price: 900,
        category: "Блок питания",
        image: "https://thunder-x3.ru/upload/iblock/534/thunderx3_plexus_1000_gamer_power_supply_right_bottom.png", // Путь к изображению
    },
    {
        id: 7,
        name: "GIFORCE GTX 1080",
        price: 1800,
        category: "видеокарта",
        image: "https://www.gainward.com/main/event/2017/1080ti_nv/images/p5_01.png", // Путь к изображению
    },
    {
        id: 8,
        name: "GIFORCE GTX",
        price: 550,
        category: "игравые озу",
        image: "https://3dnews.ru/assets/external/illustrations/2020/02/18/1003916/sm.intro.800.jpg", // Путь к изображению
    },
    {
        id: 9,
        name: "GIFORCE GTX",
        price: 150,
        category: "Кейсы для компютеров",
        image: "https://trashbox.ru/nowebp/937582_599262/cougar-conquer-_-5lmr-_6.jpeg", // Путь к изображению
    },
    {
        id: 10,
        name: "inetl",
        price: 750,
        category: "Процессоры",
        image: "https://ichip.ru/blobimgs/uploads/2019/04/intel-core-i9-x-series-skylake.jpg", // Путь к изображению
    },
    {
        id: 11,
        name: "THUNDERXR3",
        price: 900,
        category: "Блок питания",
        image: "https://thunder-x3.ru/upload/iblock/534/thunderx3_plexus_1000_gamer_power_supply_right_bottom.png", // Путь к изображению
    },
    {
        id: 10,
        name: "inetl",
        price: 750,
        category: "Процессоры",
        image: "https://ichip.ru/blobimgs/uploads/2019/04/intel-core-i9-x-series-skylake.jpg", // Путь к изображению
    },
    {
        id: 11,
        name: "THUNDERXR3",
        price: 900,
        category: "Блок питания",
        image: "https://thunder-x3.ru/upload/iblock/534/thunderx3_plexus_1000_gamer_power_supply_right_bottom.png", // Путь к изображению
    },
    // Добавьте больше товаров с изображениями здесь
];
function displayProducts() {
    const productsContainer = document.querySelector(".products");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h2>${product.name}</h2>
            <p>Цена: $${product.price}</p>
            <p>Категория: ${product.category}</p>
            <button data-id="${product.id}" class="buy-button">Купить</button>
        `;

        productsContainer.appendChild(productElement);
    });
}

displayProducts();

const cartItems = []; // Массив для хранения выбранных товаров в корзине

function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);

    if (productToAdd) {
        cartItems.push(productToAdd);
        updateCart();
    }
}

function updateCart() {
    const cartList = document.querySelector(".cart-items");
    cartList.innerHTML = ""; // Очистка текущего списка товаров в корзине

    let total = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
        `;
        cartList.appendChild(listItem);
        total += item.price;
    });

    const cartTotal = document.querySelector(".cart-total");
    cartTotal.textContent = `Итого: $${total}`;
}

const buyButtons = document.querySelectorAll(".buy-button");
buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productId = parseInt(button.getAttribute("data-id"));
        addToCart(productId);
    });
});

updateCart(); // Обновляем корзину при загрузке страницы

updateCart(); // Обновляем корзину при загрузке страницы// JavaScript для добавления класса "neon-effect" к карточкам
document.addEventListener("DOMContentLoaded", function () {
    const productCarts = document.querySelectorAll(".product-cart");
    productCarts.forEach(cart => {
        cart.classList.add("cart-effect");
    });
});