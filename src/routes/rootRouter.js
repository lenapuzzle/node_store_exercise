import express from "express"
import productsRouter from "./productsRouter.js"

const rootRouter = new express.Router()

rootRouter.get("/", (req, res) => {
    // res.send("Hello from the backend")
    // redirecting to /products
    res.redirect("/products")
})

rootRouter.use("/products", productsRouter)

export default rootRouter