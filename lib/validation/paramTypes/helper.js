'use strict';

var _ = require('lodash');
var validate = require('./../parameter');
/**
 * Validates the form of the <tt>req</tt> that called validation.
 *
 * @memberOf Validation.ParamTypes
 * @method Validate_ParamType
 * @param {Object} param The Swagger param that was created for this operation
 * @param {Object} value The value that was passed to be validated
 * @param {Object} [models] Optionally, the models that are defined as part of this Swagger API definition
 * @param {Boolean} [allowMultiple=false] True if this <tt>param</tt> allowed multiple and the param type allows multiple, else false
 * @returns {Array} An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
 * containing an object with either an error property (which contains an Array of Error objects)
 * or a value property that contains the value, parsed successfully if validation knows how, else the value unmodified.
 */
var helper = function(param, value, models, allowMultiple) {
  if (allowMultiple) {
    var ret = [];
    _.forEach(value.split(','), function(value) {
      var validate = validate(param, value, models);
      if (validate) {
        ret = ret.concat(validate);
      }
    });
    return ret;
  }
  else {
    return validate(param, value, models);
  }
};
module.exports = exports = helper;
