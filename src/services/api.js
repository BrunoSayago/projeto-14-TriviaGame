export async function getToken() {
  const url = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export async function getTrivia() {
  return null;
}

export async function getQuestions(token) {
  const questionsNumber = 5;
  const url = `https://opentdb.com/api.php?amount=${questionsNumber}&token=${token}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
