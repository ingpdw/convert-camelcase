var CamelCase = require( '..' ),
    assert = require( 'assert' );

var camelCase = new CamelCase;

describe('convert', function() {
  it('object key to camelCase', function() {

    var obj = {my_name: 'pdw'}
    obj = camelCase.convert( obj );

    assert.equal( obj.myName, 'pdw' );
  });

  it('array key to camelCase', function() {

    var obj = {my_name: [ { my_arr: 1 } ] };
    obj = camelCase.convert( obj );

    assert.equal( obj.myName[ 0 ].myArr, 1 );
  });
});
