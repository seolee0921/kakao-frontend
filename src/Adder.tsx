import { useState, MouseEvent, ChangeEvent } from "react";
import { KeyboardEvent } from "react";

type AdderType = {
  defaultvalue: number;
};

const Adder = (value: AdderType) => {
  const { defaultvalue } = value;
  const [number, change] = useState<number>(defaultvalue);
  const changeevent = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    {
      event.currentTarget.value !== "" &&
        change(number + parseInt(event.currentTarget.value));
    }
  };
  return (
    <>
      <input type="text" onChange={changeevent} />
      <br />
      <input
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          console.log(event.currentTarget.value);
        }}
      />
      <section>{number}</section>
    </>
  );
};

export default Adder;
