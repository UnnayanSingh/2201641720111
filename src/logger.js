export async function Log(stack, level, pkg, message) {
  const url = "http://20.244.56.144/evaluation-service/logs";

  const clientID = "48bc6083-3f57-48a4-bfd7-a4840f45d540";
  const clientSecret = "shVbewvJjGMPmRVu";
  const basicAuth = btoa(`${clientID}:${clientSecret}`);

  const body = {
    stack,
    level,
    package: pkg,
    message
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${basicAuth}`
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Log failed:", errorText);
      throw new Error(errorText);
    } else {
      const data = await response.json();
      console.log("✅ Log sent:", data);
      return data;
    }
  } catch (error) {
    console.error("⚠️ Logging error:", error);
    throw error;
  }
}
