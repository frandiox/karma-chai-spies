var path = require('path');

var framework = function(files) {
    files.unshift({
        pattern: path.resolve(require.resolve('chai-spies')).replace(/\/[^\/]*$/, '/chai-spies.js'),
        included: true,
        served: true,
        watched: false
    });
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-spies': ['factory', framework]};
