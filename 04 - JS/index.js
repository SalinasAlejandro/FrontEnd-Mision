const mainScreen = document.querySelector('.main-screen');

const TYPES = [
    'normal', 'fighting', 'flying',
    'poison', 'ground', 'rock',
    'bug', 'ghost', 'steel',
    'fire', 'water', 'grass',
    'electric', 'psychic', 'ice',
    'dragon', 'dark', 'fairy'
];

const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let name = pokeName.value;
    if (name) {
        name = name.toLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                pokeData("Not Found", "./404.png", "?", null, null);
            } else {
                return res.json();
            }
        }).then((data) => {

            mainScreen.classList.remove('hide');
            for (const type of TYPES) {
                mainScreen.classList.remove(type);
            }
            if (data) {
                pokeData(data.name, data.sprites.front_default, data.types[0].type.name, data.stats, data.abilities);
            }
        });
    }
}

const pokeData = (pokeName, pokeImage, pokeType, pokeStats, pokeAbilities) => {

    const pokemon = document.querySelector(".poke-name");
    const urlImage = document.querySelector('.poke-front-image');
    const type = document.querySelector('.poke-type-one');
    const ps = document.querySelector('.poke-sp');
    const atk = document.querySelector('.poke-atk');
    const def = document.querySelector('.poke-def');
    const spAttack = document.querySelector('.poke-spatk');
    const spDef = document.querySelector('.poke-spdef');
    const speed = document.querySelector('.poke-speed');
    const Movimientos = document.querySelector('.poke-abilities');

    pokemon.textContent = pokeName;
    console.log(pokeImage);
    urlImage.src = pokeImage;
    urlImage.alt = "Imagen de " + pokeName;
    type.textContent = pokeType;

    if (pokeAbilities) {

        mainScreen.classList.add(pokeType);

        ps.textContent = pokeStats[0].base_stat;
        atk.textContent = pokeStats[1].base_stat;
        def.textContent = pokeStats[2].base_stat;
        spAttack.textContent = pokeStats[3].base_stat;
        spDef.textContent = pokeStats[4].base_stat;
        speed.textContent = pokeStats[5].base_stat;

        abilities = "";
        pokeAbilities.forEach(element => {
            abilities += `<li>${element.ability.name}</li>`;
        });
        Movimientos.innerHTML = abilities;
    } else {

        ps.textContent = "?";
        atk.textContent = "?";
        def.textContent = "?";
        spAttack.textContent = "?";
        spDef.textContent = "?";
        speed.textContent = "?";

    }

}