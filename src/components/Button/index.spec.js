import Button from './';
import TestContainer from '../../utils/TestContainer';

describe('Button', () => {
  it('Should mount with given text', () => {
    const instance = mount(
      <TestContainer>
        <Button>Hi!</Button>
      </TestContainer>
    );
    chaiExpect(instance.find('Button')).to.text('Hi!');
  });
});