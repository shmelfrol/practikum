const express = require('express');
const path =require('path');
const PORT= 3000
const app = express()
app.set('view engine', 'ejs') //подключение шаблонизатора ejs
app.set('views', 'static') //переопределение папки для вьюшки на папку static
app.use(express.static(path.join(__dirname, 'public')));
app.get('/chat/:chatId', (reg, res)=>{
    res.render('index', {title:"Main", active: "chat", chatId : reg.params["chatId"]})
})
app.get('/chat/', (reg, res)=>{
    res.render('index', {title:"Main", active: "chat", chatId : 'x'})
})
app.get('/login', (reg, res)=>{
    res.render('login', {title:"Авторизация", active: "login"})
})
app.get('/reg', (reg, res)=>{
    res.render('reg', {title:"Реистрация", active: "login"})
})
app.get('/settings', (reg, res)=>{
    res.render('settings', {title:"Настройки", active: "settings"})
})
app.get('/contacts', (reg, res)=>{
    res.render('contacts', {title:"Контакты", active: "contacts"})
})
app.get('/test', (reg, res)=>{
    res.render('test', {title:"test", active: "test", chatId : 'x'})
})
app.get('/test/:chatId', (reg, res)=>{
    res.render('test', {title:"Main", active: "test", chatId : reg.params["chatId"]})
})
app.get('*', function(req, res){res.render('404', {active:'x'});});
app.listen(PORT, ()=>{console.log(`my server ${PORT}`)})
