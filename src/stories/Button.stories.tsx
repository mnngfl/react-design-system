import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Example: Story = {
  args: {
    label: "Button",
  },
};

export const BasicButton: Story = {
  parameters: {
    controls: { exclude: ["variant", "label", "onClick"] },
  },
  decorators: [
    (Story, context) => (
      <div className="flex space-x-4">
        <Story args={{ ...context.args, label: "Default" }} />
        <Story args={{ ...context.args, label: "Destructive", variant: "danger" }} />
        <Story args={{ ...context.args, label: "Cancel", variant: "outlined" }} />
        <Story args={{ ...context.args, label: "Subtle", variant: "subtle" }} />
        <Story args={{ ...context.args, label: "Ghost", variant: "ghost" }} />
        <Story args={{ ...context.args, label: "Link", variant: "link" }} />
      </div>
    ),
  ],
};

export const ButtonSize: Story = {
  parameters: {
    controls: { exclude: ["size", "label", "onClick"] },
  },
  decorators: [
    (Story, context) => (
      <div className="flex space-x-4 space-y-4 items-baseline">
        <Story args={{ ...context.args, label: "Small", size: "sm" }} />
        <Story args={{ ...context.args, label: "Medium" }} />
        <Story args={{ ...context.args, label: "Large", size: "lg" }} />
      </div>
    ),
  ],
};
