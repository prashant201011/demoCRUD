const express = require("express");
const router = express.Router();
const controllerapi = require("../controller/controllerapi");

router.get("/api/v3/app", controllerapi.getUser);

router.get("/api/v3/app/:id", controllerapi.getsuser);

router.delete("/api/v3/app/:id", controllerapi.deleteUser);

router.post("/api/v3/app", controllerapi.postUser);

router.patch("/api/v3/app/:id", controllerapi.updateUser);

module.exports = router;
