import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    name: { control: "text", description: "User's first name" },
    surname: { control: "text", description: "User's surname" },
    selectedPokemons: {
      description: "List of selected pokemons",
    },
    isVisible: { control: "boolean", description: "Visibility of the modal" },
    setModalIsVisible: {
      action: "modal visibility toggled",
      description: "Callback to toggle modal visibility",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A modal to display user information and selected pokemons.",
      },
    },
  },
};

type ModalStory = StoryObj<typeof Modal>;

const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    abilities: [
      { ability: { name: "overgrow" }, slot: 1 },
      { ability: { name: "chlorophyll" }, slot: 2 },
    ],
    base_experience: 64,
    height: 7,
    weight: 69,
  },
  {
    id: 4,
    name: "charmander",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    abilities: [
      { ability: { name: "blaze" }, slot: 1 },
      { ability: { name: "solar-power" }, slot: 2 },
    ],
    base_experience: 62,
    height: 6,
    weight: 85,
  },
  {
    id: 7,
    name: "squirtle",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    abilities: [
      { ability: { name: "torrent" }, slot: 1 },
      { ability: { name: "rain-dish" }, slot: 2 },
    ],
    base_experience: 63,
    height: 5,
    weight: 90,
  },
  {
    id: 25,
    name: "pikachu",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    abilities: [
      { ability: { name: "static" }, slot: 1 },
      { ability: { name: "lightning-rod" }, slot: 2 },
    ],
    base_experience: 112,
    height: 4,
    weight: 60,
  },
];

export const Default: ModalStory = {
  args: {
    name: "Nik",
    surname: "Dushenko",
    selectedPokemons: pokemons,
    isVisible: true,
    setModalIsVisible: (visible: boolean) =>
      console.log("Modal visibility changed:", visible),
  },
};

export const Hidden: ModalStory = {
  args: {
    name: "Nik",
    surname: "Dushenko",
    selectedPokemons: pokemons,
    isVisible: false,
    setModalIsVisible: (visible: boolean) =>
      console.log("Modal visibility changed:", visible),
  },
};

export default meta;
