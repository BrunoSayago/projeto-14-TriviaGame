import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import Feedback from '../pages/Feedback';

// describe('Desenvolva testes para atingir 90% de cobertura da tela de Feedbacks', () => {
//   test('a rota esta página seria /feedback', () => {
//     const initialState = {
//       state: 'test',
//     };

//     const { history } = renderWithRouterAndRedux(<Feedback />, initialState, '/feedback');
//     const { location: { pathname } } = history;
//     expect(pathname).toEqual('/feedback');

//     const points = screen.getByText(/pontos:/i);
//     expect(points).toBeInTheDocument();
//     const playAgain = screen.getByRole('button', { name: /play again/i });
//     expect(playAgain).toBeInTheDocument();
//     userEvent.click(playAgain);
//     expect(pathname).toEqual('/');
//   });

//   test('test click ranking', () => {
//     const { history } = renderWithRouterAndRedux(<Feedback />, {}, '/ranking');
//     const { location: { pathname } } = history;
//     expect(pathname).toEqual('/feedback');

//     const inputFeedbacks = screen.getByText('Could be better...');
//     expect(inputFeedbacks).toBeInTheDocument();

//     const ranking = screen.getByRole('button', { name: /ranking/i });
//     expect(ranking).toBeInTheDocument();
//     userEvent.click(ranking);
//     expect(pathname).toBe('/ranking');
//   });

  test('a rota esta página seria /ranking', () => {
    const { history } = renderWithRouterAndRedux(<Feedback />, {}, '/ranking');
    const { location: { pathname } } = history;
    const ranking = screen.getByRole('button', { name: /ranking/i });
    act(() => {
      userEvent.click(ranking);
    });
    expect(pathname).toBe('/ranking');
  });

  test('mensagem well done', () => {
    const initialState = {
      user: {
        user: {
          email: '',
          assertions: 0,
          name: '',
          score: 0,
        },
      },
      game: {
        questions: [],
      },
      player: {
        score: 0,
        assertions: 3,
      },
    };
    renderWithRouterAndRedux(<Feedback />, initialState, '/feedback');
    const inputFeedbacks = screen.getByText('Well Done!');
    expect(inputFeedbacks).toBeInTheDocument();
  });
// });
