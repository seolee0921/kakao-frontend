import { ChangeEvent, useState, MouseEvent } from "react";

const ConditionalText = () => {
  const [text, setText] = useState<string>("");
  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    /* console.log(event.currentTarget.value); */
    {
      event.currentTarget.value.length > 5
        ? setText(event.currentTarget.value)
        : setText("");
    }
  };

  return (
    <section>
      <input type="text" onChange={updateText} />
      <article>{text}</article>
    </section>
  );
};

export default ConditionalText;
