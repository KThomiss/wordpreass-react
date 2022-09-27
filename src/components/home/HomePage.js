import Heading from "../layout/Heading";

function HomePage() {
  return (
    <>
      <Heading title="Homepage">HomePage</Heading>
      <div className="container">Environment: {process.env.NODE_ENV}</div>
    </>
  );
}

export default HomePage;
