const logo = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg"
export const App = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-red-800">
      Hello world!
    </h1>
      <img alt="duck" src={logo} />
      </main>
  );
}

export default App;
