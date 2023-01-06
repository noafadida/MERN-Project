"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const conversation_1 = __importDefault(require("../controllers/conversation"));
const message_1 = __importDefault(require("../controllers/message"));
/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: The chat API
 */
router.get("/", conversation_1.default.getConversation);
router.post("/message", message_1.default.addNewMessage);
router.get("/:conversationId", message_1.default.getUserMessages);
module.exports = router;
//# sourceMappingURL=chat_route.js.map