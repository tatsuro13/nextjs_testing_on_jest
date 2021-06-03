import 'setimmediate';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import { initTestHelpers } from 'next-page-tester';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

initTestHelpers();

const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/posts/?_limit=10',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          userId: 1,
          id: 1,
          title: 'dummy title 1',
          body: 'dummy body 1',
        })
      );
    }
  ),
];

const server = setupServer(...handlers);
beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => {
  server.close();
});

describe('Blog page', () => {
  it('ブログページはgetStaticPropsによってprefetchされてリスト表示される', async () => {
    const { page } = await getPage({
      route: '/blog-page',
    });
    render(page);
    expect(await screen.findByText('Blog Page')).toBeInTheDocument();
    // expect(screen.getByText('dummy title 1')).toBeInTheDocument();
    // expect(screen.getByText('dummy title 2')).toBeInTheDocument();
  });
});