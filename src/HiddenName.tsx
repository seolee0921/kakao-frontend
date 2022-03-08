import { ChangeEvent, useState, MouseEvent } from "react";

const HiddenName = () => {
  const [name, setName] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setSubmit(false);
    const concise: string = event.currentTarget.value;
    {
      concise.length > 2
        ? setName(
            concise[0] +
              "*".repeat(concise.length - 2) +
              concise[concise.length - 1]
          )
        : setName(concise);
    }
  };
  const submitName = (event: MouseEvent<HTMLButtonElement>) => {
    setSubmit(true);
  };

  return (
    <section>
      <input type="text" onChange={updateName} />
      <button onClick={submitName}>제출</button>
      {submit === true && <article>{name}</article>}
    </section>
  );
};
export default HiddenName;
