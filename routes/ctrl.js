"use strict";

const hello = (req,res)=> {
    res.render("./index");
};

const rehello = (req,res)=> {
    res.render("./index");
};

const login = (req,res) => {
    res.render("./login");
};

module.exports = {
    hello,
    rehello,
    login
};