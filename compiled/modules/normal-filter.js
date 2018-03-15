'use strict';

var debounce = require('debounce');

module.exports = function (h) {
    var _this = this;

    return function (classes, id) {

        var search = _this.source == 'client' ? _this.search.bind(_this, _this.data) : _this.serverSearch.bind(_this);

        return h('input', { 'class': classes.input + ' ' + classes.small,
            attrs: { type: 'text',

                placeholder: _this.display('filterPlaceholder'),

                id: id
            },
            domProps: {
                'value': _this.query
            },
            on: {
                'keyup': debounce(search, _this.opts.debounce)
            }
        });
    };
};