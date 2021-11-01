"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl");

router.get("/", ctrl.hello);
router.get("/index", ctrl.rehello);
router.get("/login", ctrl.login);
router.get("/map", ctrl.map);
router.get("/introduce", ctrl.introduce);

module.exports = router;