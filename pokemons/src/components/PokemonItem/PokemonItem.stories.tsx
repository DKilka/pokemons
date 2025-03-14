import type { Meta, StoryObj } from "@storybook/react";
import PokemonItem from "./PokemonItem";

const mockPokemon = {
  name: "Pikachu",
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
};

const meta: Meta<typeof PokemonItem> = {
  title: "Components/PokemonItem",
  component: PokemonItem,
  argTypes: {
    pokemon: { control: "object" },
  },
};

type Story = StoryObj<typeof PokemonItem>;

export const Default: Story = {
  args: {
    pokemon: mockPokemon,
  },
};

export default meta;
