const products = [
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
    }
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