const defaultApiUrl = process.env.NODE_ENV === 'production'
  ? 'https://realcloudportback-production.up.railway.app'
  : 'http://127.0.0.1:8000';
const apiBaseUrl = (process.env.REACT_APP_API_URL || defaultApiUrl).replace(/\/+$/, '');

export const getProjects = async () => {
  const response = await fetch(`${apiBaseUrl}/api/projects/`);
  if (!response.ok) {
    throw new Error(`Django returned ${response.status} while loading projects.`);
  }

  return response.json();
};