import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HelloWorld from './HelloWorld.react';

describe('HelloWorld', () => {

  it('HelloWorld', () => {
    const wrapper = shallow(
      <HelloWorld href="hello.com"/>
    );

    expect(wrapper.contains('Hello, world')).to.be.true;
  });
});