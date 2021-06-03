import 'setimmediate';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import { POST } from '../types/Types';
import Post from '../components/Post';

describe('Postコンポーネントにpropsがわたされている', () => {
  let dummyProps: POST;
  beforeEach(() => {
    dummyProps = {
      userId: 1,
      id: 1,
      title: 'dummy title 1',
      body: 'dummy body 1',
    };
  });
  it('propsが渡されて表示される', () => {
    render(<Post {...dummyProps} />);
    expect(screen.getByText(dummyProps.id)).toBeInTheDocument();
    expect(screen.getByText(dummyProps.title)).toBeInTheDocument();
  });
});
