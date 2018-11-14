yaml = require('js-yaml');
fs = require('fs');

function create_yaml() {
  const apps = require('./apps.js')

  try {
    var doc = yaml.safeDump(apps);
    console.log(doc);
  } catch (e) {
    console.log(e);
  }
}
  
create_yaml()
