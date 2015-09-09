var framework = function(files) {
    files.unshift({
        pattern: require.resolve('chai-spies/chai-spies'),
        included: true,
        served: true,
        watched: false
    });
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-spies': ['factory', framework]};
