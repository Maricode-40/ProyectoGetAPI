const model = document.getElementById(`model`);
// async await
const getDataModel = async () => {
  try {
    //console.log(`soy una flecha);
    const dataFetching = await fetch(`https://swapi.dev/api/films/1`);
    const data = await dataFetching.json();

    data.results.forEach((films) => {
      const characterModel = document.createElement("h2");

      characterModel.innerText = model.name;

      model.appendChild(characterModel);
    });
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
};
//getDataModel();
//.catch((error) => console.log(error))
getDataModel();
