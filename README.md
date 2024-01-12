## Installation

```bash
$ npm install
```

## Running the app

```bash
# with docker
$ docker-compose up -d

# without docker
$ npm run start:dev
```

## Utilisation CRUD BOOK

```
URI : https://127.0.0.1:3000/book

Ajouter un livre
POST : https://127.0.0.1:3000/book
body : {
    'title' : '...',
    'pages' : 3000,
    'author' : '...'
}

Récuperer tout les livres
GET : https://127.0.0.1:3000/book

Récuperer un livre via son id
GET : https://127.0.0.1:3000/book/id

Mettre à jour un livre via son id
PATCH : https://127.0.0.1:3000/book/id
body : {
    'title' : '...',
    'pages' : 3000,
    'author' : '...'
}

Supprimer un livre via son id
DELETE : https://127.0.0.1:3000/book/id
```

## Utilisation CRUD Author

```
URI : https://127.0.0.1:3000/author

Ajouter un auteur
POST : https://127.0.0.1:3000/author
body : {
    'firstName' : '...',
    'lastName' : '...',
    'age' : 102
}

Récuperer tout les auteurs
GET : https://127.0.0.1:3000/author

Récuperer un auteur via son id
GET : https://127.0.0.1:3000/author/id

Mettre à jour un auteur via son id
PATCH : https://127.0.0.1:3000/author/id
body : {
    'firstName' : '...',
    'lastName' : '...',
    'age' : 103
}

Supprimer un auteur via son id
DELETE : https://127.0.0.1:3000/author/id
```