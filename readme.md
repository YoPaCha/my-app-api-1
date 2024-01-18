## STACK
    Framework : Express JS
    ORM: Sequelize

## SQL create table in DB
### database records example in ./data.json
    CREATE TABLE articles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        titre VARCHAR(255) NOT NULL,
        description TEXT,
        date DATE
    )

## insert data in DB

    INSERT INTO articles (titre, description, date) VALUES ?