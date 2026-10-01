const apiBaseUrl = (process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000').replace(/\/+$/, '');

export const getProjects = async () => {
  const response = await fetch(`${apiBaseUrl}/api/projects/`);
  if (!response.ok) {
    throw new Error(`Django returned ${response.status} while loading projects.`);
  }

  return response.json();
};