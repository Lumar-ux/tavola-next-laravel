export default async function getUser() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/user',{headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}});
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json());
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}