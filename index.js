'use strict';

module.exports = function (reg, handler) {
    return function * (next) {
        // check if `ctx.path` match reg
        var matches = this.path.match(reg);
        if (matches && matches.length) {
            yield handler.apply(this, matches);
        } else {
            // go ahead if not match
            yield next;
        }
    };
};
