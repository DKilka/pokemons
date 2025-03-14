import { createPortal } from "react-dom";
import PokemonItem from "../PokemonItem/PokemonItem";
import Button from "../Button/Button";

interface ModalProps {
  name: string;
  surname: string;
  selectedPokemons: { name: string }[];
  isVisible: boolean;
  setModalIsVisible: (el: boolean) => void;
}

const Modal = ({
  name,
  surname,
  selectedPokemons,
  isVisible,
  setModalIsVisible,
}: ModalProps) => {
  if (!isVisible) return null;

  return createPortal(
    <section className="bg-gray-400 w-1/2 h-fit p-4 absolute z-50 top-1/18 left-1/4 rounded-lg">
      <button
        onClick={() => setModalIsVisible(false)}
        className="float-right mr-3 mt-2 cursor-pointer"
      >
        X
      </button>
      <h2 className="mt-8 text-center">
        <span className="font-bold">Name:</span> {name}
      </h2>
      <h2 className="text-center">
        <span className="font-bold">Surname:</span> {surname}
      </h2>
      <ul className="flex justify-center flex-row flex-wrap">
        {selectedPokemons.map((pokemon: any) => {
          return (
            <li className="w-[49%] mr-1 mt-2">
              <PokemonItem pokemon={pokemon} />
            </li>
          );
        })}
      </ul>
      <Button
        title="Confirm"
        onClick={() => window.location.reload()}
        styles="w-full mt-4 p-3 bg-gray-500 rounded-lg cursor-pointer"
      />
    </section>,
    document.body
  );
};

export default Modal;
