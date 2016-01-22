# Mæcen.dk

## Initial setup
Config vars can be defined in a `config.js` file in a root directory

```
var config = {};

config.BB_ACCESS_TOKEN = your_access_token
config.SITE_ID = your_site_id

module.exports = config;
```


Then simply run `gulp`

## Deploying

The site is hosted on `bitballoon` and uses their npm module to deploy. After filling out the `BB_ACCESS_TOKEN` and `SITE_ID` config vars,
simply run `gulp deploy` 
