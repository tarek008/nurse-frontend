# Nurse-frontend
nurse-frontend est dédiée à la gestion des infirmières. 
Elle permet de visualiser l'ensemble des infirmières , de trier ces informations selon divers critères et d'effectuer des recherches .

# Preview
Pour voir la version Live de l'application, visitez le site [Libheros_Nurses](https://nurse-frontend-iota.vercel.app/) site.

## Development

1. Configurez la base de données en créant un fichier .env dans le répertoire racine et en ajoutant la configuration suivante :
 ```bash
#PRODUCTION ENVIRONMENT VARIABLES
VUE_APP_ALL_NURSES_ENDPOINT=https://node-mysql-api-libheros.onrender.com/api/allNurses
VUE_APP_SORT_BY_Field_ENDPOINT=https://node-mysql-api-libheros.onrender.com/api/sortNurses
VUE_APP_PAGINATION_ENDPOINT=https://node-mysql-api-libheros.onrender.com/api/pagination
```
2. Installez les dépendances requises :
```bash
npm install
```
3. Lancez le projet:
```bash
npm serve
```

Testing :

Pour exécuter la suite de tests du projet, lancez la commande suivante :
```bash
npx cypress open
```
Ceci exécute les tests unitaires situés dans le dossier `cypress/e2e .


# Structure du projet

Une structure de projet très simple :

- `src`: Ce dossier est le conteneur principal de tout le code de votre application.
  - `views` : Contient les composants de haut niveau associés à une route spécifique. C'est ici que vous placeriez vos pages ou écrans principaux.  
  - `components` : Contient les composants réutilisables qui peuvent être utilisés dans plusieurs vues ou dans d'autres composants.  
  - `router` : Dossier pour stocker toutes les routes de votre application.


# Features
Viewing Nurses: Les utilisateurs peuvent voir toutes les infirmières.  
Sorting Options: Possibilité de trier les infirmières selon différents critères, comme le prénom, le nom de famille et le code postal  
Search Capabilities: Les utilisateurs peuvent effectuer des recherches.  

# Contribution
Les contributions à ce projet sont les bienvenues. Si vous trouvez des problèmes ou avez des suggestions d'amélioration, n'hésitez pas à créer une demande de tirage ou à soumettre un problème sur le dépôt du projet.
