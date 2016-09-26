/*
 * js-observer - lib/Camelize.js
 * Copyright(c) 2015 ingpdw <ingpdw@gmail.com>
 */

exports = module.exports = class Camelize {
  constructor(){}

  isNumerical( obj ) {
    obj = obj - 0;
    return obj === obj;
  }

  isArray( obj ) {
    return obj instanceof Array;
  }

  toCamel( string ) {
    if ( this.isNumerical( string ) ) {
      return string;
    }

    string = string.replace(/[\-_\s]+(.)?/g, ( match, chr ) => {
      return chr ? chr.toUpperCase() : '';
    });

    return string.substr( 0, 1 ).toLowerCase() + string.substr( 1 );
  }

  convert( obj ){
    let _tmp, _item, _key, _value, _len;

    //isArray?
    if ( this.isArray( obj ) ) {
        _tmp = [];

        for( _item = 0, _len = obj.length; _item < _len; _item++ ) {

            _value = obj[ _item ];

            if ( typeof _value === 'object' )
                _value = this.convert( _value );

            _tmp.push( _value );
        }

    //isObject?
    } else {
        _tmp = {};
        for ( _item in obj ) {
            if ( obj.hasOwnProperty(_item) ) {
                _key = this.toCamel( _item )
                _value = obj[ _item ];
                if ( _value !== null && typeof _value === 'object' )
                    _value = this.convert( _value );

                _tmp[ _key ] = _value;
            }
        }
    }

    return _tmp;
  }
}
