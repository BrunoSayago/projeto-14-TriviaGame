import React from 'react';
 import { screen } from '@testing-library/react';
 import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App'
import Feedback from '../pages/Feedback'



describe('Desenvolva testes para atingir 90% de cobertura da tela de Feedbacks', () => {
  test('a rota esta página seria /feedback', () => {
    const initialState = {
      state:'test'
    };

   const { history } = renderWithRouterAndRedux(<Feedback />, initialState, '/feedback');
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/feedback');

    const points = screen.getByText(/pontos:/i)
    expect(points).toBeInTheDocument();
    const playAgain = screen.getByRole('button', { name: /play again/i });
    expect(playAgain).toBeInTheDocument();
    userEvent.click(playAgain);
    expect(pathname).toEqual('/');
  });

  test('', () => {

  });
});
