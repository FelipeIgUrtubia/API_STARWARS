const API_URL = "https://swapi.dev/api/people"; //URL BASE, no cambia.
const getCharacters = async (id) => {
    let urlCharacter = API_URL + `/${id}` //URL DINÁMICA.
    const respuesta = await fetch (urlCharacter, {
        method: "GET"
    })
    const respuestaJSON = await respuesta.json();

    return respuestaJSON;
};

const renderCharacters = async () => {
    const personajes = []
    for (let index = 1; index < 16; index++) { 
        const personaje =  await getCharacters(index)//Busca a personaje individual
        personajes.push(personaje)//Guardando a personaje en array "personajes"
    }
    const personajeshtml = []
    personajes.forEach((personaje) => {
        personajeshtml.push(`
            <div class="col"><br>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${personaje.name}
                        </h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                           Estatura: ${personaje.height}, Peso:${personaje.mass}
                        </h6>
                    </div>
                </div>
            </div>
        `);
    })
    const html = personajeshtml.join("")
    const htmlsection = document.getElementById("personajes1")
    htmlsection.innerHTML = html
}
renderCharacters()