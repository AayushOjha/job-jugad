//!FIME:  use safe method for api credentials

const main = async () => {
  console.log(`begning`);

  const { OPEN_AI_API_KEY } = require("../constants/CRED");
  const OpenAI = require("openai");

  var turndownService = new TurndownService();

  if ($(".jobs-box__html-content")) {
    const JD = turndownService.turndown($(".jobs-box__html-content").html());

    console.log(`before ini apenAi`);

    console.log(OPEN_AI_API_KEY);
    const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY, dangerouslyAllowBrowser: true });

    const prompt = `Give me 5 countries whose name start with I`;

    console.log(`before gpt call`);

    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: prompt }],
    //   model: "gpt-3.5-turbo",
    // });

    console.log(`before res`);


    console.log(chatCompletion.choices[0].message.content);

  } else {
    // TDOD: handle error/failure
    // handle things like if the JD is bigger that GPT api can handle
  }
};


main()