import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWithRouterAndRedux';
import App from '../../App';

describe('será avaliado se o arquivo Login.test.js contem 90%', () => {
  test('A rota para esta página é"/"', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  test('é renderizado um elemto para que o usuario insira seu email e nome', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('input-gravatar-email');
    expect(inputEmail).toBeInTheDocument();
    userEvent.type(inputEmail, 'email');

    const inputName = screen.getByTestId('input-player-name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, 'name');

    const buttonEntry = screen.getByTestId('btn-play');
    expect(buttonEntry).toBeDisabled();
    userEvent.type(inputEmail, 'test@gmail.com');
    expect(buttonEntry).toBeEnabled();
    userEvent.click(buttonEntry);

    // const { location: { pathname } } = history;
    // expect(pathname).toBe('/games');
  });
  test('configurações click', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const btmSettings = screen.getByTestId('btn-settings');
    expect(btmSettings).toBeInTheDocument();
    userEvent.click(btmSettings);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/configuracoes');
  });
});
