"use strict";
/**
 * @swagger
 * tags:
 *   name: Post
 *   description: The Posts API
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const post_1 = __importDefault(require("../controllers/post"));
/**
* @swagger
* components:
*   schemas:
*     Post:
*       type: object
*       required:
*         - message
*         - sender
*       properties:
*         message:
*           type: string
*           description: The post text
*         sender:
*           type: string
*           description: The sending user id
*       example:
*         message: 'this is my new post'
*         sender: '12342345234556'
*/
/**
* @swagger
* /post:
*   get:
*     summary: get list of post from server
*     tags: [Post]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: query
*         name: sender
*         schema:
*           type: string
*           description: filter the posts according to the given sender id
*     responses:
*       200:
*         description: the list of posts
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                  $ref: '#/components/schemas/Post'
*
*/
router.get('/', post_1.default.getAllPosts);
/**
* @swagger
* /post/{id}:
*   get:
*     summary: get post by id
*     tags: [Post]
*     parameters:
*       - in: path
*         name: id
*         requiered: true
*         schema:
*           type: string
*           description: the requested post id
*     responses:
*       200:
*         description: the requested post
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Post'
*
*/
router.get('/:id', post_1.default.getPostById);
/**
* @swagger
* /post:
*   post:
*     summary: add a new post
*     tags: [Post]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Post'
*     responses:
*       200:
*         description: the requested post
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Post'
*
*/
router.post('/', post_1.default.addNewPost);
module.exports = router;
//# sourceMappingURL=post_route.js.map