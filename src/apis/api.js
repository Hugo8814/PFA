async function apiCall() {
  const res = await fetch("http://127.0.0.1:9000/api");
  const data = await res.json();
  console.log(data);
}

apiCall();
