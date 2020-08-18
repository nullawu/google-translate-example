Requirments
-----------

Need config/google-auth.json and add config/development.json

``` json
{ "projectId": "xxx" }
```

1. Go to https://console.cloud.google.com/apis/dashboard , add new API, search and enable Cloud Translate API
2. https://console.cloud.google.com/apis/api/translate.googleapis.com/credentials Create credential for it, select or create a service account and add key / enable Translate API for key.
3. Download the json file, rename it as config/google-auth.json
4. Get the project id (may from url ?project=xxx, xxx is the id), and create development.json

Local
------

``` bash
node cmd/index.js
# check cmd/dst.html and cmd/dst.txt
```

Test Server
-----------

``` bash
node app.js
# visit localhost:3000/translate
```

Links
------

- doc: https://cloud.google.com/translate/
- quickstart: https://cloud.google.com/translate/docs/quickstarts
