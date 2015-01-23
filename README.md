# Fiches de banc

Une application web permettant d'émettre des avis sur les amendements déposés à l'Assemblée Nationale, et de répartir les réponses parmi plusieurs collaborateurs.

## Adding users

Update the `server/private/Users.js` file.

If it is not there, simply duplicate `server/fixtures/Users.js` into `server/private/Users.js` and update the contents.


## Structure

### Packages used

* Meteor Core
  * meteor-platform
* Routing
  * [iron:router](https://github.com/EventedMind/iron-router)
  * [zimme:iron-router-active](https://github.com/zimme/meteor-iron-router-active)
* Collections
  * [aldeed:collection2](https://github.com/aldeed/meteor-collection2)
* Accounts
  * [accounts-password](https://github.com/meteor/meteor/tree/devel/packages/accounts-password)
* UI and UX
  * [fastclick](https://github.com/meteor/meteor/tree/devel/packages/fastclick)
  * [nooitaf:semantic-ui](https://github.com/nooitaf/meteor-semantic-ui)
* Security
  * [browser-policy](https://github.com/meteor/meteor/tree/devel/packages/browser-policy)
  * [matteodem:easy-security](https://github.com/matteodem/meteor-easy-security)
* Development
  * [jquery](https://github.com/meteor/meteor/tree/devel/packages/jquery)
  * [underscore](https://github.com/meteor/meteor/tree/devel/packages/underscore)

### Folder structure

```
client/ 				# Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
	lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    modules/            # Meant for components, such as form and more
	views/			    # Contains all views
	    common/         # General purpose html templates
model/  				# Model files, for each Meteor.Collection
private/                # Private files
public/                 # Public files
routes/                 # All routes
server/					# Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications
    startup/            # On server startup
meteor-boilerplate		# Command line tool
```
