import React, { useState } from "react";
import { Card } from "antd";
import LanguageSelector from "./LanguageSelector";
import { translate } from "@/utils/apis";

const headStyle = {
  borderBottom: "1px solid #262626",
  color: "#17d5e1",
};

const JokeItem = ({ joke, language }) => {
  const [translatedText, setTranslatedText] = useState(null);
  const onLanguageSelect = (e) => {
    translate({ query: joke.joke, target: e, source: language }).then((res) => {
      if (
        res &&
        res.data &&
        res.data.translations?.length &&
        res.data.translations[0]?.translatedText
      ) {
        setTranslatedText(res.data.translations[0]?.translatedText);
      }
    });
  };
  return (
    <Card
      title={joke.category}
      headStyle={headStyle}
      size="small"
      className="mb-2 text-slate-300 dark:bg-zinc-800/30 rounded-md dark:border-neutral-800"
      extra={<LanguageSelector onSelect={onLanguageSelect} />}
    >
      {translatedText ? translatedText : joke.joke}
    </Card>
  );
};

export default JokeItem;
