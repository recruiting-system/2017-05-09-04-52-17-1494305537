require('should');
const numberMapToWord = require('../src/number-map-to-word');

describe('number_map_to_word_over_26', function () {
  const collection_a = [1, 13, 27, 30, 25, 27];
  const collection_b = ['a', 'm', 'aa', 'ad', 'y', 'aa'];

  it('字母表映射2', function () {
    const result = numberMapToWord(collection_a);
    result.should.eql(collection_b);
  });
});
