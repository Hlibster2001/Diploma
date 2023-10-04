 const Router = require("express")
 const router = new Router()
 const drugRouter = require('./drugRouter')
 const userRouter = require('./userRouter')
 const typeRouter = require('./typeRouter')


router.use("/user", userRouter)
router.use("/drug", drugRouter)
router.use("/type", typeRouter)


 module.exports = router