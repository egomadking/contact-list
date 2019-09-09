# contact-list

## browsable, searchable phonebook project made with Vue

### Uses [Vue](https://vuejs.org/), [Vue CLI](https://cli.vuejs.org/) and stores data at [jsonbin](https://jsonbin.org/)

_For the time being, the json file containing the phonebook data is loaded through [jsonbin](https://jsonbin.org/). Authentication is through username and API key (Not a good setup, I know! This will change as I figure out authentication.) which is not stored in the project repo. An initial dataset will load from the site but in order to save changes to the phonebook, you must create an account with jsonbin. The app will not store any credentialling, nor does it get passed anywhere except jsonbin._

## Installation

1. Clone repo
2. Open a terminal at the root of the directory and type `npm install`
3. After project dependencies install, to work with it in a development context, run `npm run serve`. This will start a local server that live reloads a preview of the app as changes are made to the files in the project.
4. When ready to deploy a finished application, run `npm run build`. Doing so will create a 'dist' folder containing the production-ready code. This can be moved to the desired hosting environment.

## Customize configuration

See [Vue CLI's configuration reference](https://cli.vuejs.org/config/).
