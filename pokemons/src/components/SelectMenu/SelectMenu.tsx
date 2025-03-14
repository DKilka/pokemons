interface SelectMenuProps {
  options: any[];
  value: string;
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (e: string) => void;
}

const SelectMenu = ({
  options,
  value,
  search,
  onChange,
  onSelect,
}: SelectMenuProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor="searchPokemon" className="my-2">
        <h2 className="text-2xl mb-1 ml-1">Choose 4 pokemons</h2>
        <input
          className="bg-gray-400 rounded-lg pl-2 outline-none w-3xs h-8"
          type="text"
          placeholder="Enter pokemon id or name"
          value={search}
          onChange={onChange}
        />
      </label>
      <select
        className="bg-gray-400 rounded-lg pl-2 outline-none h-8 w-3xs"
        value={value}
        onChange={(e) => onSelect(e.target.value)}
      >
        {options?.map((el: any) => {
          return (
            <option key={crypto.randomUUID()} value={el.name}>
              {el.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectMenu;
