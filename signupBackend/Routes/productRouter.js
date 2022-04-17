
const router= require("express").Router()
const productCtrl = require("../Controllers/productController");
// const authAdmin = require("../Middlewares/authAdmin");
// const auth = require("../Middlewares/auth");

router.route("/products")
  .get(productCtrl.getProducts)
  .post(productCtrl.createProducts)

router.route("/products/:id")
   .delete(productCtrl.deleteProducts)
   .put(productCtrl.updateProducts)  


module.exports = router;

