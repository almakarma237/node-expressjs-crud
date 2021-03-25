## Basic project node js : Crud API and test!

1. Créer un serveur avec Node/Express Framework qui tourne sur le port 800
2. Mettre en place une API simple pour stocker, récupérer, modifier, les données ci-dessous dans une base mongodb
3. Tester et documenter chacune des routes d'api, en utilisant n'importe quel Framework de test que vous aimez (mocha, chai, jest, ..)
4. Crée un répertoire pour votre projet nommé "technical-test-node" dans votre répertoire utilisateur local et ensuite committez sur un dépôt git

### Documentations of api
**GET /subscribers** 
return Data 
```
[]
````

**GET /subscribers/:id** ( id: required )
return Data 
```
{
	"_id" : uuid
	"matricule": Number,
	"lastName" : String,
	"firstName" : String,
	"email" : String,
	"phone" : String,
	"address": Array
}
````
**PATCH /subscribers/:id**  ( id: required )
return Data 
```
{
	"_id" : uuid
	"matricule": Number,
	"lastName" : String,
	"firstName" : String,
	"email" : String,
	"phone" : String,
	"address": Array
}
````
**DELETE /subscribers/:id**  ( id: required )
return Data 
```
{
	"_id" : uuid
	"matricule": Number,
	"lastName" : String,
	"firstName" : String,
	"email" : String,
	"phone" : String,
	"address": Array
}
````

**POST /subscribers**  
Example Value Schema
```
{
	"matricule": Number,
	"lastName" : String,
	"firstName" : String,
	"email" : String,
	"phone" : String,
	"address": Array
}
````

return Data 
```
{
	"_id" : uuid
	"matricule": Number,
	"lastName" : String,
	"firstName" : String,
	"email" : String,
	"phone" : String,
	"address": Array
}
```