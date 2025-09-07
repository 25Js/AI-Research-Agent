    async function sendQuery() {
      const query = document.getElementById("query").value;

      
      const webhookUrl = "http://localhost:5678/webhook-test/e5dde950-284c-40e0-9e05-232de7670d44";  

    try {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: query, sessionId: "user-123" })
  });

  const result = await response.json();

  // Convert JSON to string
  let text = JSON.stringify(result);

  // Replace \n with real newlines
  text = text.replace(/\\n/g, "\n");

  // Optionally remove outer { } if they exist
    text = text.replace(/output:/i, "");
  text = text.replace(/[{}"]/g, "");

  document.getElementById("response").innerText =  text;

} catch (error) {
  document.getElementById("response").innerText = "Executing your request... " ;
}

    }
