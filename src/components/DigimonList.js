import DigiCards from "./DigiCards";

function DigimonList(props) {
  // pulling the left-hand side of the props from App.js
  const { digidata } = props;
  console.log(props);

  return (
    <div>
      {/* using {} inside of the return <div> because we want to return JSX - the whole .map() method is JSX */}
      {/* '?' checks to make sure the data is rendered and not null */}
      {digidata.map((digimon) => (
        <DigiCards digimon={digimon} />
      ))}
    </div>
  );
}

export default DigimonList;
