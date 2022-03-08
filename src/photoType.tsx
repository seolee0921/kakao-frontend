type PhotoType = {
  address: string;
  description: string;
};

const Photo = (value: PhotoType) => {
  const { address, description } = value;
  return (
    <>
      <section>
        {/* <img src={address} /> */}
        <p>{address}</p>
      </section>
      <article>
        <code>{description}</code>
      </article>
    </>
  );
};

export default Photo;
