const inputText = document.getElementById("inputText");
const outputText = document.getElementById("output");
const btnTranslate = document.querySelector(".btn-translate");

async function translate(yourText) {
  const url = "https://text-translator2.p.rapidapi.com/translate";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "d58489da46msh2855eed2d8528e2p1f609ejsn1a84e44d2bdb",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    body: new URLSearchParams({
      source_language: "id",
      target_language: "en",
      text: yourText,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const output = await JSON.parse(result);
    outputText.innerHTML = output.data.translatedText;
  } catch (error) {
    console.error(error);
  }
}

btnTranslate.addEventListener("click", () => {
  translate(inputText.value);
});
