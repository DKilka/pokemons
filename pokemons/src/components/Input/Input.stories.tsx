import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    labelFor: { control: "text", description: "The id of the input field" },
    title: { control: "text", description: "The label text for the input" },
    styles: { control: "text", description: "Additional styles for the input" },
    type: {
      control: "text",
      description: "Type of the input (text, email, etc.)",
    },
    placeholder: { control: "text", description: "Placeholder text for input" },
    errorMessage: { control: "text", description: "Error message to display" },
    registerValue: {
      control: "text",
      description: "Register field value (name or surname)",
    },
    register: { action: "registered", description: "Register event handler" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A customizable input component for forms, using react-hook-form for validation.",
      },
    },
  },
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    labelFor: "name",
    title: "Enter your name",
    styles: "px-4 py-2",
    type: "text",
    placeholder: "Enter your username",
    errorMessage: "",
    registerValue: "name",
  },
};

export const WithError: Story = {
  args: {
    labelFor: "username",
    title: "Enter your username",
    styles: "px-4 py-2",
    type: "text",
    placeholder: "Enter your username",
    errorMessage: "This field is required",
    registerValue: "email",
  },
};

export default meta;
