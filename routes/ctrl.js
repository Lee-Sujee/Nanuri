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
const map = (req,res) => {
    res.render("./map");
};
const introduce = (req,res) => {
    res.render("./introduce");
};

module.exports = {
    hello,
    rehello,
    login,
    map,
    introduce
};