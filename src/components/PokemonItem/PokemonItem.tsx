interface PokemonItemProps {
  pokemon: any;
}

const PokemonItem = ({ pokemon }: PokemonItemProps) => {
  return (
    <article className="bg-gray-500 rounded-lg w-full p-4">
      <img
        src={pokemon.sprites.front_default}
        alt={`${pokemon.name} image`}
        className="m-auto scale-150"
      />
      <h2 className="font-bold text-center mb-2 first-letter:uppercase text-2xl">
        {pokemon.name}
      </h2>
      <div>
        <span className="font-bold">Abilities: </span>
        {pokemon.abilities.map((el: any) => {
          return (
            <ul key={crypto.randomUUID()}>
              <li>
                {el.ability.name}, slots: {el.slot}
              </li>
            </ul>
          );
        })}
      </div>
      <h3>
        <span className="font-bold">Base experience: </span>
        {pokemon.base_experience}
      </h3>
      <h3>
        <span className="font-bold">Height: </span>
        {pokemon.height}
      </h3>
      <h3>
        <span className="font-bold">Weight: </span>
        {pokemon.weight}
      </h3>
    </article>
  );
};

export default PokemonItem;
