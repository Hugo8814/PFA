export async function apiCall() {
  try {
    const res = await fetch("http://127.0.0.1:9000/api");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
}

apiCall();
