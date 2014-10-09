var Controller = require('controller');

var aptomaAuthHandler = require('node-aptoma-plugin-auth')(
  'brik-video',
  'DrPublish'
);

module.exports = function(app) {
  var controller = Controller();
  controller.app = app;

  controller.define('drpublishIndex', function (req, res) {
    res.render('drpublish/index', app.settings);
  });
  
  controller.define('drpublishAuth', aptomaAuthHandler);
  
  controller.get('/index', 'drpublishIndex');
  controller.get('/authenticate', 'drpbublishAuth');

  return controller;
}