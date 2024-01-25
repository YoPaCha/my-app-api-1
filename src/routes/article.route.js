const express = require('express');
const router = express.Router();
const { getArticles, getArticle } = require('../controllers/article.controller');

// on définit la route pour récupérer tous les articles avec le controller

/**
 * @openapi
 *  
 * /api/articles:
 *   get:
 *     summary: Get all articles
 *     description: Retrieve a list of all articles available in the system.
 *     tags:
 *       - Articles
 *     responses:
 *       200:
 *         description: A list of articles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                 title: 
 *                  type: string
 *                 description:
 *                  type: string        
 *                 date:
 *                  type: string
 *       400:
 *         description: Bad request. Indicates that the request was invalid.
 *       500:
 *         description: Internal server error. Indicates a problem on the server side.
 * 
 */

router.get('/', getArticles);

/**
 * @openapi
 *  
 * /api/articles/{id}:
 *   get:
 *     summary: Get one article
 *     description: Retrieve one article from a foreign key
 *     tags:
 *       - Articles
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: integer
 *        description: The id of the article to retrieve
 *     responses:
 *       200:
 *         description: One article.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 properties:
 *                 title: 
 *                  type: string
 *                 description:
 *                  type: string        
 *                 date:
 *                  type: string
 *       400:
 *         description: Bad request. Indicates that the request was invalid.
 *       500:
 *         description: Internal server error. Indicates a problem on the server side.
 * 
 */

router.get('/:id', getArticle);

module.exports = router;