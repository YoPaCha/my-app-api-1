const db = require('../models');

module.exports = {

    // controller pour récupérer tous les articles
    getArticles: async (req, res) => {

        try {
            // on récupère tous les articles avec la méthode de sequelize findAll()
            const articles = await db.Article.findAll();
            if (articles.length === 0) { 
                return res.status(404).json({
                    success: false,
                    message: "No articles found"
                });
            }
            // on renvoie les articles en json
            return res.status(200).json({
                results: articles,
                success: true
            });
        }

        catch (err) {
            // si une erreur se produit, on renvoie un code 500 avec le message de l'erreur
            res.status(500).json({
                success: false,
                message: err.message
            });
        }

    },

    // controller pour récupérer un article
    getArticle: async (req, res) => { 
            
            try {
                // on récupère l'article avec la méthode de sequelize findByPk()
                const article = await db.Article.findByPk(req.params.id);
                // on renvoie l'article en json
                res.status(200).json({
                    results: article,
                    success: true
                });
            }
    
            catch (err) {
                // si une erreur se produit, on renvoie un code 500 avec le message de l'erreur
                res.status(500).json({ message: err.message });
            }
    }
}