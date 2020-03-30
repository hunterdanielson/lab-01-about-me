
import isYes from '../isYes.js';
const test = QUnit.test;

test('yes, y, yeah', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const result = isYes('yes');
    const result1 = isYes('y');
    const result2 = isYes('YES');
    const result3 = isYes('yep');
    const result4 = isYes('yeah');
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, true);
    assert.equal(result1, true);
    assert.equal(result2, true);
    assert.equal(result3, false);
    assert.equal(result4, false);
});
