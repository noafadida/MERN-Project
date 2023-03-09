/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: Chat route
 */

import express from "express";
import conversation from "../controllers/conversation";
import message from "../controllers/message";
const router = express.Router();

router.get("/conversation/:senderId/:receiverId", conversation.getConversation);
// get user messages
router.get("/message/:conversationId", message.getConversationrMessages);

router.post("/message", message.addNewMessage);

export = router;
