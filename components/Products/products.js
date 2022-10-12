class Products {
    constructor () {
        this.classNameActive = 'products_element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage (element, id) {
       const { pushProduct, products } = LocalStorageUtil.putProducts (id);
        
    }
    render (){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        CATALOG.forEach(({id, name, price, img})=>{
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = 'Добавить в корзину';
            } else {
                activeClass = ' '+ this.classNameActive;
                activeText = 'Удалить из корзины';
            }

        htmlCatalog += `
        <li class="products_element">
            <span class="products_element__name">${name}</span>
            <img class="products_element__img "src="${img}"/>
            <span class="products_element__price">${price.toLocaleString()}</span>
            <button class="products_element__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this '${id}')">
                ${activeText}
            </button>
        </li>
        `; 
        });

        const html = `
            <ul class="products_container"> ${htmlCatalog} </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products ();
productsPage.render();