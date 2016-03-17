import assert from 'assert';
import React, { Component, PropTypes } from 'react';
import { on, off } from 'console-error-throws-error/toggle';
import { render } from 'enzyme';
import jsdom from 'mocha-jsdom';

class TestComponent extends Component {
  static propTypes = {
    foo: PropTypes.any
  };
  render() {
    return <div>{this.props.foo}</div>;
  }
}

describe('react-transform-hoc with errors', () => {
  before(on);
  after(off);

  jsdom();

  it('tests the happy case', () => {
    const rendered = render(<TestComponent foo="a"/>);
    assert.equal(rendered.html(), '<div>a</div>');
  });

  it('tests the sad case', () => {
    let threw = false;
    try {
      const rendered = render(<TestComponent bar="a"/>);
      console.log(rendered.html());
    } catch (err) {
      assert.equal(err.message, 'Warning: Failed propType: Invalid additional prop(s): [\'bar\'] supplied to restrict(TestComponent).');
      threw = true;
    }
    assert(threw, 'expected an error');
  });
});