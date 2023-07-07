const JOKE_API_BASE_URL = "https://v2.jokeapi.dev/joke";
const TRANSLATE_API_BASE_URL =
  "https://google-translate1.p.rapidapi.com/language/translate/v2";

export const fetchJokes = async (params) => {
  let { category = "Any", language = "en", flag } = params;
  category = category || "Any";
  language = language || "en";
  let url = `${JOKE_API_BASE_URL}/${category}?lang=${language}&type=single&amount=10${
    flag ? `&blacklistFlags=${flag}` : ""
  }`;
  try {
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const translate = async (params) => {
  const { query, target, source } = params;
  const encodedParams = new URLSearchParams();
  encodedParams.set("q", query);
  encodedParams.set("target", target);
  encodedParams.set("source", source);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: encodedParams,
  };

  try {
    const response = await fetch(TRANSLATE_API_BASE_URL, options);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
