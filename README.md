"# Projet-Nodejs-Reactjs" 

## npm
```bash
npm install
```
## node 
```bash
npm init
```
```bash
npm start
```

## Les outils et technologies utilisés :
 - [MongoDB](https://www.mongodb.com/home)
 - [Express](https://expressjs.com/)
 - [Reactjs](https://reactjs.org/)
  - [Nodejs](https://nodejs.org/en/download/)
 - [Tailwind](https://tailwindcss.com/)



## Cration Projet backend Api : Le backend de l'application est construit à l'aide de Node.js
   #  Afficher produit
  ```http
  GET Api/Produits/getProduit
```

 # Ajouter produit
  ```http
  Post Api/Produits/addProduit
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**.

| `price` | `float` | **Required**.

| `description` | `string` | **Required**.
  
 # Modifier produit

   ```http
  Put Api/Produits/updateProduit/${id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**.

####  Supprimer produit 
 ```http
  DELETE  Api/Produits/deleteProduit/${id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**.

## Cration Projet frontend  :  le frontend est construit à l'aide de React.
 - Ajouter produit 
  ```http
   /AjouterProduit
```
  - Afficher produit 
   ```http
   /AfficherProduit
```

  - Modifier produit
   
  - Supprimer produit 
  


##  assets
concernant les Assets de ce projet

Create (Créer) : Pour créer un nouvel enregistrement dans la base de données, vous envoyez généralement une requête HTTP POST au serveur avec les données du nouvel enregistrement. Le serveur insère alors les données dans la base de données et renvoie une réponse au client indiquant le statut de l'opération. 
Read (Lire) : Pour lire des données de la base de données, vous envoyez généralement une requête HTTP GET au serveur avec une requête spécifiant les données que vous voulez récupérer. Le serveur renvoie alors les données demandées au client dans la réponse.

Update (Mettre à jour) : Pour mettre à jour un enregistrement existant dans la base de données, vous envoyez généralement une requête HTTP PUT au serveur avec les données mises à jour de l'enregistrement. Le serveur met alors à jour l'enregistrement dans la base de données et renvoie une réponse au client indiquant le statut de l'opération.

Delete (Supprimer) : Pour supprimer un enregistrement de la base de données, vous envoyez généralement une requête HTTP DELETE au serveur avec l'ID de l'enregistrement que vous voulez supprimer. Le serveur supprime alors l'enregistrement de la base de données et renvoie une réponse au client indiquant le statut de l'opération.



