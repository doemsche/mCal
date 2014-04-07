Package.describe({
  summary: "CLNDR.js for Meteor"
});

Package.on_use(function (api, where) {
  api.use(['jquery','minimongo', 'mongo-livedata', 'templating'], 'client');

  api.add_files([ 'moment.js', 'clndr.js',  'meteor-clndr.html', 'meteor-clndr.js', 'clndr.css'], 'client');

  if (api.export) 
    api.export('CLNDR');
});