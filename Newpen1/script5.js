const products = [
    {
        id: 1,
        name: "Sony Playstashion 4",
        price: 270,
        category: "Игровой геймпад",
        image: "https://w7.pngwing.com/pngs/516/502/png-transparent-playstation-2-playstation-4-playstation-3-game-controllers-playstation-mobile-electronics-xbox-playstation-4.png", // Путь к изображению
    },
    {
        id: 2,
        name: "Logitech G413",
        price: 350,
        category: "клавиатура",
        image: "https://3dnews.ru/assets/external/illustrations/2017/04/19/950973/log1.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "Forza",
        price: 200,
        category: "Мыш",
        image: "https://trinityhome.ru/upload/iblock/e7f/ghtewdrg8cw5iqwcob3x0niynq69g9af.jpg", // Путь к изображению
    },
    {
        id: 4,
        name: "ASUS",
        price: 720,
        category: "Игровые наушники",
        image: "https://images.satu.kz/114124802_sven-ap-g890mv-igrovye.jpg", // Путь к изображению
    },
    {
        id: 5,
        name: "Predator X38",
        price: 950,
        category: "Игровой Монитор ",
        image: "https://static.mvideo.ru/media/Promotions/Promo_Page/2020/February/obzor-acer-predator-x35/obzor-acer-predator-x35-top1-t.png", // Путь к изображению
    },
    {
        id: 6,
        name: " Fauteuil Gamer",
        price: 200,
        category: "Игравое Кресло",
        image: "https://e7.pngegg.com/pngimages/717/616/png-clipart-gaming-chair-office-desk-chairs-video-game-dxracer-chair-game-furniture.png", // Путь к изображению
    },
    {
        id: 7,
        name: "Xbox",
        price: 320,
        category: "Игровой Джостик",
        image: "https://donetsk.sidex.ru/images_offers/124/124182/thumb/defender_cobra_r4_1.jpg", // Путь к изображению
    },
    {
        id: 8,
        name: "ASUS",
        price: 350,
        category: "клавиатура",
        image: "https://play-valorant.ru/wp-content/uploads/2021/04/hyperx-alloy-elite-2-igrovaya-komnata.jpg", // Путь к изображению
    },
    {
        id: 9,
        name: "ASUS",
        price: 200,
        category: "Мыш",
        image: "https://www.ixbt.com/img/n1/news/2021/0/0/Bild4_large.jpg", // Путь к изображению
    },
    {
        id: 10,
        name: "ASUS",
        price: 720,
        category: "Игровые наушники",
        image: "https://images.satu.kz/114124802_sven-ap-g890mv-igrovye.jpg", // Путь к изображению
    },
    {
        id: 11,
        name: "ASUS",
        price: 350,
        category: "клавиатура",
        image: "https://play-valorant.ru/wp-content/uploads/2021/04/hyperx-alloy-elite-2-igrovaya-komnata.jpg", // Путь к изображению
    },
    {
        id: 12,
        name: "ASUS",
        price: 200,
        category: "Мыш",
        image: "https://www.ixbt.com/img/n1/news/2021/0/0/Bild4_large.jpg", // Путь к изображению
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