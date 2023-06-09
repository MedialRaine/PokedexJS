const searchButton = document.getElementById("searchButton");
const inputField = document.getElementById("nameInput");
const pokemonProfilePic = document.querySelector(".pokemonProfile");
const nameScreen = document.getElementById("name");
const idPokedex = document.getElementById("numPokeDex");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const type1 = document.getElementById("type1");
const type2 = document.getElementById("type2");
const hp = document.getElementById("healthPoints");
const atk = document.getElementById("attack");
const def = document.getElementById("defense");
const spcAtk = document.getElementById("specialAttack");
const spcDef = document.getElementById("specialDefense");
const speed = document.getElementById("speed");
const move1 = document.getElementById("move1");
const move2 = document.getElementById("move2");
const move3 = document.getElementById("move3");
const move4 = document.getElementById("move4");

const resetFields = () => {
	nameScreen.innerHTML = "";
	idPokedex.innerHTML = "";
	height.innerHTML = "";
	weight.innerHTML = "";
	type1.innerHTML = "";
	type2.innerHTML = "";
	hp.innerHTML = "";
	atk.innerHTML = "";
	def.innerHTML = "";
	spcAtk.innerHTML = "";
	spcDef.innerHTML = "";
	speed.innerHTML = "";
	move1.innerHTML = "";
	move2.innerHTML = "";
	move3.innerHTML = "";
	move4.innerHTML = "";
};

function pseudoRandomNumber() {
	return Math.floor(Math.random() * 101);
}

const getPokemon = (pokemon) => {
	resetFields();

	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			pokemonProfilePic.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
			nameScreen.innerHTML = data.name;
			idPokedex.innerHTML = "Pokédex ID: " + data.id;
			height.innerHTML = `Height: ${data.height * 10} cm`;
			weight.innerHTML = `Weight: ${data.weight / 10} kg`;
			hp.innerHTML = "HP: " + data.stats[0].base_stat;
			atk.innerHTML = "Atk: " + data.stats[1].base_stat;
			def.innerHTML = "Def: " + data.stats[2].base_stat;
			spcAtk.innerHTML = "SpAtk: " + data.stats[3].base_stat;
			spcDef.innerHTML = "SpDef: " + data.stats[4].base_stat;
			speed.innerHTML = "Speed: " + data.stats[5].base_stat;
			move1.innerHTML = "" + data.moves[pseudoRandomNumber(1)].move.name;
			move2.innerHTML = "" + data.moves[pseudoRandomNumber(2)].move.name;
			move3.innerHTML = "" + data.moves[pseudoRandomNumber(3)].move.name;
			move4.innerHTML = "" + data.moves[pseudoRandomNumber(4)].move.name;
			type1.innerHTML = "First Type: " + data.types[0].type.name;
			type2.innerHTML = "Second Type: " + data.types[1].type.name;
		});
};

inputField.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		searchButton.click();
	}
});

searchButton.addEventListener("click", () => getPokemon(inputField.value));
