import Basket from "../models/BasketModel.js"

export const getBasket = async (req, res) => {
  try {
    const basket = await Basket.findOne({ user: req.user._id }).populate("products.productId")
    res.json({ products: basket ? basket.products : [] })
  } catch (err) {
    res.status(500).json({ message: "Server error" })
  }
}

export const addToBasket = async (req, res) => {
  try {
    const { productId } = req.body
    let basket = await Basket.findOne({ user: req.user._id })
    if (!basket) basket = new Basket({ user: req.user._id, products: [] })

    const product = basket.products.find(p =>
      p.productId && p.productId._id
        ? p.productId._id.toString() === productId
        : p.productId.toString() === productId
    )

    if (product) product.count += 1
    else basket.products.push({ productId, count: 1 })

    await basket.save()
    await basket.populate("products.productId")
    res.json({ products: basket.products })
  } catch (err) {
    console.error("Add to basket error:", err)
    res.status(500).json({ message: "Server error" })
  }
}

export const decrementBasket = async (req, res) => {
  try {
    const { productId } = req.body
    const basket = await Basket.findOne({ user: req.user._id })

    if (!basket) return res.status(404).json({ message: "Basket not found" })

    const product = basket.products.find(p =>
      p.productId && p.productId._id
        ? p.productId._id.toString() === productId
        : p.productId.toString() === productId
    )

    if (product && product.count > 1) {
      product.count -= 1
      await basket.save()
      await basket.populate("products.productId")
      return res.json({ products: basket.products })
    }

    return res.status(400).json({ message: "Cannot decrement below 1" })
  } catch (err) {
    console.error("Decrement error:", err)
    res.status(500).json({ message: "Server error" })
  }
}

export const removeFromBasket = async (req, res) => {
  try {
    const { productId } = req.params
    const basket = await Basket.findOne({ user: req.user._id })

    if (!basket) return res.status(404).json({ message: "Basket not found" })

    basket.products = basket.products.filter(p =>
      p.productId && p.productId._id
        ? p.productId._id.toString() !== productId
        : p.productId.toString() !== productId
    )

    await basket.save()
    await basket.populate("products.productId")
    res.json({ products: basket.products })
  } catch (err) {
    console.error("Remove from basket error:", err)
    res.status(500).json({ message: "Server error" })
  }
}

export const clearBasket = async (req, res) => {
  try {
    await Basket.findOneAndUpdate({ user: req.user._id }, { products: [] }, { new: true })
    res.json({ products: [] })
  } catch (err) {
    res.status(500).json({ message: "Server error" })
  }
}
