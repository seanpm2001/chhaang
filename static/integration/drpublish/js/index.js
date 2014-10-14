this.DEBUG = true;
$(document).ready(function() {
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  var name = getParameterByName('appName');
  var auth = getParameterByName('auth');
  var iv = getParameterByName('iv');
  // register name of the app, sent as a paramter in the iframe url
  AppAPI.setAppName(name);
  // authenticate the app, again using variables sent in the iframe url
  AppAPI.doStandardAuthentication("authenticate?auth=" + auth + "&iv=" + iv);
  // Go to plugin after auth success
  AppAPI.addListeners({
    appAuthenticated: function() {
      window.location = './plugin?appName=' + app;
    }
  });
});
