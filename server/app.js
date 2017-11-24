const express = require('express')
const app = express();
const cloudinary = require('cloudinary');
const compression = require('compression');
const { cloud_name, api_key, api_secret } = require('./cloudinary_keys')
const weekCache = (7*86400);

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
  cdn_subdomain: true
});

app.use(compression());
app.use(express.static('./public/' ,
      {
        maxAge : weekCache,
        setHeaders: (res, path) => res.setHeader("Expires", new Date(Date.now() + 2592000000*30).toUTCString())
      }));

app.get('/api/images/', (req, res) => {
  cloudinary.api.resources_by_tag('portraits', result => res.json(result), {"max_results":25, "direction":'asc'});
});


if(!require.main.loaded){
  const port = process.env.PORT || 8080;
  app.listen(port, function(){ console.log(`Listening on ${port}`)});
}
