# KeepNotes

#### KeepNotes is a free, open-source notes app for the web. Built with VueJS & Vuetify.

#### [Live Site](https://keepnotes11.herokuapp.com/)

#### Setup
```bash
# install dependencies
$ npm install
# serve with hot reload at localhost:8080
$ npm run serve
```

#### Applied
`VueJS` `Vuex` `Material UI` `Vuetify` `Axios` `Google Login`

#### [Backend Source Code](https://github.com/Mohammad1745/keep-notes-backend)

#### Directory Structure
```
.
|--- public
|
|--- assets
|     |--- css
|     |...
|
|--- components
|     |--- notes
|     |--- reusable                              # Reusable vue-components
|
|--- helpers                                     # helper functions and core constants
|--- middleware                                  # to check user authentication
|--- plugins
|--- router
|--- services
|--- store                                       # Vuex store for state management
|     |--- modules
|     |     |--- note
|     |     |--- scratch-pad
|     |...
|
|--- views
...
```