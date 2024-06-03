import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Primitives/Icon",
  tags: ["autodocs"],
  component: Icon,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Example: Story = {
  args: {
    name: "mail",
    variant: "primary",
  },
};
