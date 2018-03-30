import React from 'react';
import renderer from 'react-test-renderer';
import Provider from '../../src/components/Provider'
import Banner from '../../src/components/Banner'

test('Button renders correctly', () => {
  const component = renderer.create(
    <Provider>
      <Banner color='white'>
        <h1>Resin.io</h1>
        <p>
          Resin.io brings the benefits of Linux containers to the IoT. Develop
          iteratively, deploy safely, and manage at scale.
        </p>
      </Banner>
    </Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
