// Пример загрузки товаров и добавления их на страницу
const products = [
    {
        id: 1,
        name: "Игровой компьютер",
        price: 1000,
        category: "Компьютеры",
        image: "https://royal-computers.ru/upload/thumbs/podborpages/default/kiber_64aeab.png", // Путь к изображению
    },
    {
        id: 2,
        name: "Игровой компьютер",
        price: 1000,
        category: "Компьютеры",
        image: "https://w7.pngwing.com/pngs/914/573/png-transparent-computer-cases-housings-gaming-computer-personal-computer-gamer-computer-computer-video-game-electronic-device.png", // Путь к изображению
    },
    {
        id: 3,
        name: "B550 GAMING X <rev 1.0>",
        price: 500,
        category: "Материнская плата",
        image: "https://www.gigabyte.com/Image/9816a84e79591cf7972e0397193ca997/Product/25356/png", // Путь к изображению
    },
    {
        id: 4,
        name: "Игровой компьютер",
        price: 1000,
        category: "Компьютеры",
        image: "https://royal-computers.ru/upload/thumbs/podborpages/default/kiber_64aeab.png", // Путь к изображению
    },
    {
        id: 5,
        name: "Игровой компьютер",
        price: 1000,
        category: "Компьютеры",
        image: "https://royal-computers.ru/upload/thumbs/podborpages/default/kiber_64aeab.png", // Путь к изображению
    },
    {
        id: 6,
        name: "Игровой компьютер",
        price: 1000,
        category: "Компьютеры",
        image: "https://royal-computers.ru/upload/thumbs/podborpages/default/kiber_64aeab.png", // Путь к изображению
    },
    {
        id: 7,
        name: "Игровой компьютер",
        price: 1000,
        category: "Компьютеры",
        image: "https://royal-computers.ru/upload/thumbs/podborpages/default/kiber_64aeab.png", // Путь к изображению
    },
    {
        id: 8,
        name: "Asus TUF Gaming A15 FA507RE-HN021 Jaeger Gray (90NR08Y2-M002A0)",
        price: 1555,
        category: "Ноутбук",
        image: "https://i.citrus.world/uploads/shop/d/9/d96861e8f5ec49c1e86932a0243e0303.jpg", // Путь к изображению
    },
    {
        id: 9,
        name: "THUNDEROBOT 911 PLUS XD",
        price: 998,
        category: "ноутбук",
        image: "https://haieronline.ru/upload/iblock/daa/bbpehh9mehehuhfp5obqqc7isu2ivcic/1_8_.png", // Путь к изображению
    },
    {
        id: 10,
        name: "ASUS  ROG Strix G5R Plus 17.3",
        price: 1250,
        category: "Ноутбук",
        image: "https://ir.ozone.ru/s3/multimedia-x/c1000/6651934881.jpg", // Путь к изображению
    },
    {
        id: 11,
        name: "Игровой компьютер",
        price: 1000,
        category: "Компьютеры",
        image: "https://royal-computers.ru/upload/thumbs/podborpages/default/kiber_64aeab.png", // Путь к изображению
    },
    {
        id: 12,
        name: "Игровой компьютер",
        price: 1000,
        category: "Компьютеры",
        image: "https://royal-computers.ru/upload/thumbs/podborpages/default/kiber_64aeab.png", // Путь к изображению
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

