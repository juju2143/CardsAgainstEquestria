var changesData = require('../changes.json');
var Cards = require('../lib/cards');

var license = function (req, res) {
    res.render('info/license', {title: 'Licenses'});
};

var about = function (req, res) {
    res.render('info/about', {title: 'À propos'});
};

var changes = function (req, res) {
    res.render('info/changes', {changes: changesData, title: 'Changements'});
};

var contact = function (req, res) {
    res.render('info/contact', {title: 'Contact'});
};

var cards = function (req, res) {
    var deck;
    var type;

    deck = Cards.sets[parseInt(req.query.set)];
    if (!deck) {
        deck = Cards.expansions[parseInt(req.query.expansion)];
        type = 'expansion';
    } else {
        type = 'set';
    }

    res.render('info/cards', {
        sets: Cards.sets, expansions: Cards.expansions,
        deck: deck, type: type, title: deck ? deck.name : 'Cartes'
    });
};

module.exports = function (app) {
    app.get('/info/license', license);
    app.get('/info/about', about);
    app.get('/info/changes', changes);
    app.get('/info/contact', contact);
    app.get('/info/cards', cards);
};
