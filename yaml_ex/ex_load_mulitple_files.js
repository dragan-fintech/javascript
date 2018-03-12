// load multiple yml files example

const yaml = require('js-yaml');
const fs = require('fs');
const _ = require('lodash');

// load and merge multipe yaml files
try {
  const data1 = yaml.safeLoad(fs.readFileSync('td_linux.yml', 'utf8'));
  const data2 = yaml.safeLoad(fs.readFileSync('td_accounts.yml', 'utf8'));
  const data = _.merge(data1, data2)

  console.log(data);
} catch (e) {
  console.log(e);
}
