import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "./types/Form";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import PokemonItem from "./components/PokemonItem/PokemonItem";
import Input from "./components/Input/Input";
import { RegisterFileds } from "./types/RegisterFileds";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";

const App = () => {
  const [pokemonsData, setPokemonsData] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedPokemons, setSelectedPokemons] = useState<{ name: string }[]>(
    []
  );
  const [debouncedQuery, setDebouncedQuery] = useState(search);
  const [selectedPokemonName, setSelectedPokemonName] = useState<string>();
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<Required<Form>>({
    name: "",
    surname: "",
  });
  const reqisterFields: RegisterFileds = {
    required: "This field is required",
    minLength: 2,
    maxLength: 12,
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Only alphabets",
    },
  };

  const { register, handleSubmit, formState } = useForm<Form>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    setModalIsVisible(true);
    setFormData(data);
  };

  const nameError = formState.errors["name"]?.message;
  const surnameError = formState.errors["surname"]?.message;

  const selectPokemon = async () => {
    if (selectedPokemons.length >= 4) return;

    const selected = selectedPokemons.some(
      (el: any) => el.name === selectedPokemonName
    );
    if (selected) return;

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}/`
      );
      setSelectedPokemons((prev) => [...prev, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (search.length > 0) return;

    const getPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const result = await response.data.results;
        setPokemonsData(result);
        setSelectedPokemonName(result[0].name);
      } catch (error) {
        console.error(error);
      }
    };

    getPokemons();
  }, [search]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(search);
    }, 1000);

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    if (!debouncedQuery) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${search}/`
        );
        const result = await response.data;
        setPokemonsData([result]);
        setSelectedPokemonName(result.name);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  console.log(modalIsVisible);

  return (
    <>
      <Modal
        name={formData.name}
        surname={formData.surname}
        selectedPokemons={selectedPokemons}
        isVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
      />
      <main className="flex flex-row w-full">
        <section className="w-1/3 mx-12 h-screen flex justify-around items-center flex-col">
          {selectedPokemons.map((pokemon: any, index) => {
            if (index > 1) return;
            return <PokemonItem key={crypto.randomUUID()} pokemon={pokemon} />;
          })}
        </section>
        <section className="w-1/3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="#"
            className="flex flex-col items-center justify-center  h-screen"
          >
            <Input
              labelFor="name"
              title="Enter your name"
              placeholder="Enter your name"
              register={register}
              registerValue="name"
              errorMessage={nameError}
              registerFileds={reqisterFields}
            />
            <Input
              labelFor="surname"
              title="Enter your surname"
              placeholder="Enter your surname"
              register={register}
              registerValue="surname"
              errorMessage={surnameError}
              registerFileds={reqisterFields}
            />
            <div>
              <SelectMenu
                options={pokemonsData}
                search={search}
                value={selectedPokemonName ?? ""}
                onSelect={setSelectedPokemonName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
              />
              <Button
                title="Select"
                styles="bg-gray-400 rounded-lg px-2 mt-4 w-3xs outline-none h-8 disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer"
                type="button"
                onClick={selectPokemon}
                disabled={selectedPokemons.length > 3}
              />
            </div>
            <Button
              title="Register team"
              type="submit"
              styles="rounded-lg w-3xs bg-gray-400 p-2 mt-10 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer"
              disabled={selectedPokemons.length < 4}
            />
          </form>
        </section>
        <section className="w-1/3 mx-12 h-screen flex justify-around items-center flex-col">
          {selectedPokemons.map((pokemon: any, index) => {
            if (index <= 1 || index > 3) return;
            return <PokemonItem key={crypto.randomUUID()} pokemon={pokemon} />;
          })}
        </section>
      </main>
    </>
  );
};

export default App;
