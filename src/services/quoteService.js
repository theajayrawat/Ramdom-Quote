// src/services/quoteService.js
const BASE_URL = 'https://api.quotable.io';

export const fetchQuote = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error('Failed to fetch quote');
  }
  const data = await response.json();
  return data;
};

export const fetchTags = async () => {
  const response = await fetch(`${BASE_URL}/tags`);
  if (!response.ok) {
    throw new Error('Failed to fetch tags');
  }
  const data = await response.json();
  return data;
};
