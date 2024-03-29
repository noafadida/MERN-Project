"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @swagger
 * tags:
 *   name: User
 *   description: User route
 */
const user_1 = __importDefault(require("../controllers/user"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/:id", user_1.default.getUserById);
router.put("/", user_1.default.upadteUser);
module.exports = router;
//# sourceMappingURL=user_route.js.map