type Age = {
  age: number;
};

const Adult = (value: Age) => {
  const { age } = value;
  return <span>{age >= 20 ? "성인" : "미성년"}</span>;
};

export default Adult;
