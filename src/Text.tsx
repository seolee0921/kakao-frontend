type TextType = {
  text: string;
  type: string;
}

const Text = (textType: TextType) => {
  const { text, type } = textType;
  return (
    <>
      {type === "header" && <h1>{text}</h1>}
      {type === "bold" && <strong>{text}</strong>}
    </>
  );
};

export default Text;