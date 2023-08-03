import express from 'express'
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile("frontPage.html", {root: './public/'})
})

router.get('/login', (req, res) => {
    res.sendFile("loginPage.html", {root: './public/'})
})

router.get('/register')



export default router