
// const polyPkgs = ['@cdr0/sg'];
const polyPkgs = [];

module.exports = require('./get-local-polyrepo')(__dirname, {polyPkgs})('@cdr0/sg') || require('@cdr0/sg');
