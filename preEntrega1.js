class ProductManager {
    constructor(title, descripcion, price, thumbnail, code, stock, cantidad) {
        this.title = title
        this.descripcion = descripcion
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.cantidad = 1
    }
}

const productsManager = [
    new ProductManager('Taza', 'Taza 250 cl', 25, '', 1, 100, ''),
    new ProductManager('Plato', 'Plato Blanco 30cm', 300, '', 2, 100, ''),
    new ProductManager('Cuchara', 'Cuchara de cafe', 150, '', 3, 100, ''),
    new ProductManager('Vaso', 'Vaso 250 cl', 200, '', 4, 100, ''),
    new ProductManager('Copa', 'Copa vino 100 cl', 280, '', 5, 100, ''),
    new ProductManager('Servilleta', 'Servilleta de papel', 100, '', 6, 100, '')
]

const products = []

const addProduct = (code1) => {
    const producto = productsManager.find((prod) => prod.code === parseInt(code1))

    const codeProducts = {
        title: producto.title,
        price: producto.price,
        thumbnail: producto.thumbnail,
        code: producto.code,
        stock: producto.stock,
        cantidad: 1,
        index: producto.index
    }
    const indexProd = products.findIndex((prod) => prod.code === codeProducts.code)
    indexProd === -1 ? products.push(codeProducts) : products[indexProd].cantidad++
    console.log(products);
}

const getProductById = (code2) => {

    const articulo = productsManager.find((prod) => prod.code === parseInt(code2))
    articulo == code2 ? console.log('Not found') : console.log(articulo)
}


// addProduct(1);
// addProduct(2);
// addProduct(5);
// addProduct(2);
// addProduct(2);


// getProductById(3);


