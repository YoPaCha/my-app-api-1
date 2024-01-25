const { getArticles } = require("../controllers/articleController");
const db = require("../models/");
const { ARTICLES } = require("./data/articles");
// const faker = require("faker");

jest.mock('../models/', () => (
    {
        Article: {
            findAll: jest.fn()
        }
    }
));

describe("Controller getArticles", () => {
    it("It should return a res 200 with a list of articles as an array of objects", async () => { 
        // Utiliser Faker pour générer des données aléatoires
        // const numberOfArticles = 5;

        const mockup = ARTICLES;
        
        /*
        // Mock the function to return the generated articles
        jest.spyOn(Article, 'find').mockResolvedValueOnce(mockup);

        // Call the function and test the response
        const response = await getArticles();

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(mockup);
        */
        
        // On simule la résolution de la promesse de la méthode findAll()
        db.Article.findAll.mockResolvedValueOnce(mockup.results);
        // On simule les méthodes json() et status() de l'objet res
        const mockJson = jest.fn();
        const mockStatus = jest.fn(() => ({ json: mockJson }));
        // On simule l'objet res
        const res = { status: mockStatus };
        // On simule l'objet req
        const req = {};

        // On appelle la méthode gotArticles
        await getArticles(req, res);

        // on vérifie que la méthode json() renvoie bien le mockup
        expect(mockJson).toHaveBeenCalledWith({
            results: ARTICLES, 
            success: true
        });

        expect(mockStatus).toHaveBeenCalledWith(200);

    });

    it("It should return a res 404 not found with an empty list of articles", async () => {     
        /* const mockup = Array.from( () => ({
            message: "Not found",
            success: false
        })); */
        
        const mockup = [];
        db.Article.findAll.mockResolvedValue(mockup);
        const mockJson = jest.fn();
        const mockStatus = jest.fn(() => ({ json: mockJson }));
        // on simule l'objet res
        const res = { status: mockStatus };
        // on simule l'objet req
        const req = {};
        // on appelle la méthode getArticles
        await getArticles(req, res);

        // vérifier qu'on reçoit le code 404
        expect(mockStatus).toHaveBeenCalledWith(404);
        expect(mockJson).toHaveBeenCalledWith({
            success: false,
            message: "No articles found"
        });
    });

    it("It should return a res 500 error", async () => { 
        const mockup = new Error("Internal server error");
        db.Article.findAll.mockRejectedValue(mockup);
        const mockJson = jest.fn();
        const mockStatus = jest.fn(() => ({ json: mockJson }));
        // on simule l'objet res
        const res = { status: mockStatus };
        // on simule l'objet req
        const req = {};
        // on appelle la méthode getArticles
        await getArticles(req, res);

        // vérifier qu'on reçoit le code 500
        expect(mockStatus).toHaveBeenCalledWith(500);
        expect(mockJson).toHaveBeenCalledWith({
            success: false,
            message: "Internal server error"
        });
    });
});