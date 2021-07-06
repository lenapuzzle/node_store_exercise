import fs from 'fs'

const productsPath = "products.json"

class Product {
    constructor({ name, description, price, available }) {
        this.name = name
        this.description = description
        this.price = price
        this.available = available
    }

    static findAll() {
        const productsData = JSON.parse(fs.readFileSync(productsPath)).products
        const products = productsData.map(product => {
            return new Product(product)
        })
        return products
    }

    save() {
        const products = this.constructor.findAll()
        this.available = true
        products.push(this)
        fs.writeFileSync(productsPath, JSON.stringify({ products: products }))
    }
}


export default Product