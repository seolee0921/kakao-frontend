type TitleType = {
  title: string;
  subTitle?: string;
};

const Title = (value: TitleType) => {
  const { title, subTitle } = value;
  return (
    <>
      <h1>{title}</h1>
      <hr />
      <h3>{subTitle}</h3>
    </>
  );
};

export default Title;
