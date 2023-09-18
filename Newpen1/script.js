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
        name: "PlayStation 5",
        price: 500,
        category: "Игровые приставки",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg", // Путь к изображению
    },
    {
        id: 3,
        name: "ASUS",
        price: 800,
        category: "Мобильные телефоны",
        image: "https://www.ferra.ru/thumb/660x0/filters:quality(75)/imgs/2018/11/23/20/2460990/b6efe9b77c273842126b452498357c3d37396dd0.jpg", // Путь к изображению
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
        name: "ASUS",
        price: 350,
        category: "клавиатура",
        image: "https://play-valorant.ru/wp-content/uploads/2021/04/hyperx-alloy-elite-2-igrovaya-komnata.jpg", // Путь к изображению
    },
    {
        id: 6,
        name: "ASUS",
        price: 200,
        category: "Мыш",
        image: "https://www.ixbt.com/img/n1/news/2021/0/0/Bild4_large.jpg", // Путь к изображению
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
        id: 12,
        name: "LOGITECH",
        price: 450,
        category: "Динамики",
        image: "https://stereo-news.com/wp-content/uploads/2022/03/oooooo.png", // Путь к изображению
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

function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);

    if (productToAdd) {
        cartItems.push(productToAdd);
        updateCart();

        // Применяем класс с анимацией к корзине
        const cart = document.querySelector(".cart");
        cart.classList.add("flash");

        // Удалите класс анимации после окончания анимации
        cart.addEventListener("animationend", () => {
            cart.classList.remove("flash");
        });
    }
}









