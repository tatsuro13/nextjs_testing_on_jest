import 'setimmediate';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { getPage, initTestHelpers } from 'next-page-tester';

initTestHelpers();

describe('ナビゲーションリンクの遷移', () => {
  it('ナビゲーションバーでページを選択した時ルートに遷移する', async () => {
    const { page } = await getPage({
      route: '/index',
    });
    render(page);

    userEvent.click(screen.getByTestId('blog-nav'));
    expect(await screen.findByText('Blog Page')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('comment-nav'));
    expect(await screen.findByText('Comment Page')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('todo-nav'));
    expect(await screen.findByText('Todo Page')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('home-nav'));
    expect(await screen.findByText('Welcome to Next.js')).toBeInTheDocument();
  });
});
