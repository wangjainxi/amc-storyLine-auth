const express = require('express');

const { storyBaseUrl, routePrefix, proxyPrefix } = require('config')
const router = express.Router();

router.get(`/login`, async (req, res, next) => {
    res.setHeader('type', "text/html;charset=utf8;")
    res.render('user/login', { title: '登陆' })
});

router.post(`/login2`, async (req, res, next) => {
    console.log('req.session', req.headers.cookie)
    const { username, password } = req.body
    console.log(2222, 'login')
    req.session.user = "test"
    const map = {
        "fundCompass": "/pic/homepage/罗盘更新0602/start.html#id=hux8kd&p=目录页&g=1"
    }
    res.redirect(`${proxyPrefix}${map["fundCompass"]}`)

});

module.exports = router