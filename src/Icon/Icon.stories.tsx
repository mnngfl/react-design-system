import { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Primitives/Icon",
  tags: ["autodocs"],
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: "SVG 아이콘을 표시합니다.",
      },
    },
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
