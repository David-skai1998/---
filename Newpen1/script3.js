// Пример загрузки товаров и добавления их на страницу
const products = [
    {
        id: 2,
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению // Путь к изображению
    },
    {
        id: 2,
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению // Путь к изображению
    },
    {
        id: 2,
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению // Путь к изображению
    },
    {
        id: 2,
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению // Путь к изображению
    },
    {
        id: 2,
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению // Путь к изображению
    },
    {
        id: 2,
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению // Путь к изображению
    },
    {
        id: 2,
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению // Путь к изображению
    },
    {
        id: 2,
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению // Путь к изображению
    },
    {
        id: 2,
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению // Путь к изображению
    },
    {
        id: 2,
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению // Путь к изображению
    },
    {
        id: 2,
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению // Путь к изображению
    },
    {
        id: 2,
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению // Путь к изображению
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