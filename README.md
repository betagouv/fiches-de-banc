# Fiches de banc

Une application web permettant d'émettre des avis sur les amendements déposés à l'Assemblée Nationale, et de répartir les réponses parmi plusieurs collaborateurs.


## Usage

Le processus de base est le suivant : en m’identifiant comme conseiller, j’ai un accès direct aux fiches de banc que je dois rédiger. Un compteur m’indique en permanence celles qu’il me reste à traiter, et je peux donc consulter l’application à mon rythme.
En tant qu’assistant, je peux également attribuer des fiches à des conseillers. Tout conseiller peut réattribuer ses fiches s’il connaît un conseiller plus à même de traiter l’amendement.
À tout moment, je peux utiliser le champ de recherche pour lister les fiches de banc associées à un article (« 23 ») ou à d’autres éléments du projet de loi (« titre », « chapitre IV »…). Un compteur m’indique le nombre de fiches restant à rédiger.
Je peux dès lors imprimer les fiches rédigées parmi la liste affichée en cliquant sur « imprimer ». Cette liste conservera toujours l’ordre d’examen de l’Assemblée, ce qui évite les innombrables réordonnancements des liasses  :)
Enfin, en cliquant sur le numéro d’un amendement, j’accède à une vue numérique de la fiche de banc. C’est cette vue numérique qui pourrait être utilisée par le ministre depuis une tablette. Vous noterez également que toute modification est répercutée en temps réel sur toutes les vues. Il devient donc possible de modifier des éléments de langage dix minutes avant la discussion de l’amendement sans devoir courir pour déplacer du papier.


## Running the application

This application uses the [Meteor](https://www.meteor.com) framework. You will need to install Meteor to get this application to work.

### Clone the code

```shell
    $ git clone git://github.com:sgmap/fiches-de-banc.git
    $ cd fiches-de-banc
```

### Select the law project

Update `settings.json` according to the [documentation of the `sgmap:assemblee-nationale` package](https://github.com/sgmap/meteor-assemblee-nationale#identifying-a-project-law).


### Add users

Update the `server/private/Users.js` file.

If it is not there, simply duplicate `server/fixtures/Users.js` into `server/private/Users.js` and update the contents.


### Run the application

`meteor --settings settings.json`


### Deploying

#### On your own server

This application is deployed with [`mupx`](https://github.com/arunoda/meteor-up/tree/mupx).

1. [Install `mupx`](https://github.com/arunoda/meteor-up/tree/mupx).
2. Duplicate the `mup-vagrant.json` file, renaming the copy `mup.json` and setting your own server information.
3. Run `mupx setup` to install the dependencies on the server.
4. Run `mupx deploy` to deploy a production instance, and add `--settings=settings-demo.json` to run an instance with demo users.

#### On Heroku

You can also [deploy this application to Heroku](https://medium.com/@leonardykris/how-to-run-a-meteor-js-application-on-heroku-in-10-steps-7aceb12de234):

```shell
APP_NAME="fiches-de-banc"
heroku login
heroku apps:create $APP_NAME
heroku buildpacks:set https://github.com/jordansissel/heroku-buildpack-meteor.git
heroku addons:create mongolab:sandbox
heroku config:add MONGO_URL=`heroku config | grep MONGODB_URI | cut -d ':' -f 2- | tr -d ' '`
heroku config:add ROOT_URL="https://$APP_NAME.herokuapp.com"
heroku config:add METEOR_SETTINGS="`cat settings.json`"  # use settings-demo.json to run an instance with demo users
git push heroku master
```
