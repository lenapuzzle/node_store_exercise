import express from "express"
import Product from "../models/Product.js"

const productsRouter = express.Router()

productsRouter.get("/", (req, res) => {
    // res.send("test")
    // res.render("products/index")
    // rendering all products 
    res.render("products/index", { products: Product.findAll() })
})

productsRouter.get("/new", (req, res) => {
    res.render("products/new")
})

productsRouter.post("/", (req, res) => {

    const userName = req.body.name
    const userDescription = req.body.description
    const userPrice = req.body.price
    if (userName && userPrice) {
        const newProduct = new Product({
            name: userName,
            description: userDescription,
            price: userPrice
        })
        newProduct.save()
        res.redirect("/products")
    } else {
        res.render("products/new")
    }
})




export default productsRouter