define(function (require) {

    var FiltersRepos = require('repositories/filtersRepository');

    var original = new FiltersRepos('original');
    var cloned = new FiltersRepos('cloned');


    return {
        original: original,
        cloned: cloned,
    };
});