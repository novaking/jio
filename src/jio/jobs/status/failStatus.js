/*jslint indent: 2, maxlen: 80, sloppy: true */
/*global jobStatus: true */
var failStatus = function (spec, my) {
  var that = jobStatus(spec, my);
  spec = spec || {};
  my = my || {};
  // Attributes //
  // Methods //
  that.getLabel = function () {
    return 'fail';
  };

  that.canStart = function () {
    return false;
  };
  that.canRestart = function () {
    return true;
  };
  return that;
};
