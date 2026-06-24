const API_BASE = "http://localhost:3001";
async function safeFetch(endpoint) {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`API error ${res.status}`);
    return res.json();
  } catch (err) {
    console.warn(`[API] Error fetching ${endpoint}:`, err);
    return [];
  }
}

export { safeFetch as s };
