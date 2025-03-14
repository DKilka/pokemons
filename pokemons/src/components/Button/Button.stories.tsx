import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    title: { control: "text" },
    styles: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    title: "Click Me",
    styles: "bg-gray-400 rounded-lg px-2 outline-none ml-4 h-8 cursor-pointer",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled",
    styles:
      "bg-gray-400 rounded-lg px-2 outline-none ml-4 h-8 disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer",
    disabled: true,
  },
};

export default meta;
