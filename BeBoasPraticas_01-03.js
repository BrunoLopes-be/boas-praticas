const https = require("https");
const apiUrl = "https://api.chucknorris.io/jokes/random/";

https
  .get(apiUrl, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      try {
        const jsonData = JSON.parse(data);

        console.log("Joke about Chuck Norris: ", jsonData.value);
      } catch (error) {
        console.error("Error processing response", error);
      }
    });
  })
  .on("error", (error) => {
    console.error("Error in HTTP request ", error);
  });
