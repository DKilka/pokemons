import type { Meta, StoryObj } from "@storybook/react";
import SelectMenu from "./SelectMenu";
import { useEffect, useState } from "react";

const meta: Meta<typeof SelectMenu> = {
  title: "Components/SelectMenu",
  component: SelectMenu,
  parameters: {
    docs: {
      description: {
        component:
          "The `SelectMenu` component allows users to search and select a Pokemon from a list. It provides an input field for filtering",
      },
    },
  },
  argTypes: {
    options: {
      control: "object",
      description: "Array of Pokemon objects with `name` properties",
    },
    value: { control: "text", description: "Currently selected Pokemon name" },
    search: {
      control: "text",
      description: "Search query to filter Pokemon options",
    },
    onChange: {
      action: "search changed",
      description: "Triggered when search input changes",
    },
    onSelect: {
      action: "option selected",
      description: "Triggered when an option is selected",
    },
  },
};

type Story = StoryObj<typeof SelectMenu>;

const Template: Story = {
  render: (args) => {
    const [search, setSearch] = useState("");
    const [value, setValue] = useState("");

    return (
      <SelectMenu
        {...args}
        search={search}
        value={value}
        onChange={(e) => setSearch(e.target.value)}
        onSelect={setValue}
      />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    options: [
      { name: "Pikachu" },
      { name: "Bulbasaur" },
      { name: "Charmander" },
      { name: "Squirtle" },
    ],
    value: "",
    search: "",
  },
};

export default meta;
