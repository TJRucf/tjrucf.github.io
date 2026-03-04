let currentPokemon = null;
let team = [];

function searchFor(){
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let name = document.getElementById("find").value.toLowerCase();
    
    fetch(url + name)
        .then(response => {
            if (!response.ok) throw new Error("Could not find pokemon... ")
            return response.json();
        })
        .then (data => {
            document.getElementById("headerContent").textContent = data.name;

            const pokeImg = data.sprites.front_default;
            document.querySelector(".image img").src = pokeImg;
            document.querySelector(".image img").alt = data.name

            const pokeAudio = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${data.id}.ogg`;
            document.querySelector(".audio audio").src = pokeAudio;

            const moveList = data.moves.map(m => m.move.name);
            ["move1", "move2", "move3", "move4"].forEach((id, i) => {
                const sel = document.getElementById(id);
                sel.innerHTML = moveList.map((move, idx) => `<option value="${move}" ${idx === i ? "selected" : ""}>${move}</option>`).join("");
        });
            currentPokemon = new Pokemon(data.name, pokeAudio, pokeImg, moveList[0], moveList[1], moveList[2], moveList[3]);
            document.getElementById("AddToTeam").style.display = "block";
    })
        .catch(error => console.log(error));
    
    
}

function Pokemon(name, audio, image, move1, move2, move3, move4){
    this.name = name;
    this.audio = audio;
    this.image = image;
    this.move1 = move1;
    this.move2 = move2;
    this.move3 = move3;
    this.move4 = move4;
}

function makeTeam(){
    document.getElementById("team").innerHTML = team.map(p => `<tr>
            <td><img src="${p.image}" alt="${p.name}"></td>
            <td>
                <ul>
                    <li>${p.move1}</li>
                    <li>${p.move2}</li>
                    <li>${p.move3}</li>
                    <li>${p.move4}</li>
                </ul>
            </td>
        </tr>`
    ).join("");
}

function AddToTeam(){
    if(!currentPokemon)
        return;
    const teamMember = new Pokemon(
        currentPokemon.name,
        currentPokemon.audio,
        currentPokemon.image,
        document.getElementById("move1").value,
        document.getElementById("move2").value,
        document.getElementById("move3").value,
        document.getElementById("move4").value
    );
    team.push(teamMember);
    makeTeam();
}


