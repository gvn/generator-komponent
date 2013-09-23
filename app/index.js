var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var KomponentGenerator = module.exports = function KomponentGenerator() { // (args, options, config)
  yeoman.generators.Base.apply(this, arguments);
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(KomponentGenerator, yeoman.generators.Base);

KomponentGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    type: 'input',
    name: 'constructorName',
    message: 'Constructor name?'
  }, {
    type: 'confirm',
    name: 'isAttributed',
    message: 'Create attribution and metadata header?',
    default: true
  }, {
    when: function (props) {
      return props.isAttributed;
    },
    type: 'input',
    name: 'author',
    message: 'Author?'
  }, {
    type: 'list',
    name: 'tabsOrSpaces',
    choices: ['spaces', 'tabs'],
    default: 'spaces',
    message: 'Tabs or spaces for indentation?'
  }, {
    when: function (props) {
      return props.tabsOrSpaces === 'spaces' ? true : false;
    },
    type: 'input',
    name: 'indendation',
    message: 'Indentation spaces?',
    default: '2'
  }];

  this.prompt(prompts, function (props) {
    this.isAttributed = props.isAttributed;
    this.constructorName = props.constructorName;
    this.author = props.author;
    this.newLine = '\n';

    // Construct the desired tab type
    if (props.tabsOrSpaces === 'spaces') {
      this.tab = '';

      for (var i = 0, ii = parseInt(props.indendation, 10); i < ii; i += 1) {
        this.tab += '';
      }
    } else {
      this.tab = '\t'; // Tab character
    }

    cb();
  }.bind(this));

};

KomponentGenerator.prototype.create = function create() {
  this.template('_template.js', this.constructorName.toLowerCase() + '.js');
};
