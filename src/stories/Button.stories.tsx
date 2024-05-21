import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { expect, fn, userEvent, within } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    docs: { canvas: { sourceState: "none" } },
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
  parameters: {
    docs: { canvas: { sourceState: "hidden" } },
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

export const IconButton: Story = {
  parameters: {
    controls: { exclude: ["loading", "icon", "label", "onClick"] },
  },
  decorators: [
    (Story, context) => (
      <div className="flex space-x-4">
        <Story args={{ ...context.args, label: "Login with Email", icon: "mail" }} />
        <Story args={{ ...context.args, variant: "outlined", label: "Send", icon: "send" }} />
        <Story args={{ ...context.args, label: "Loading", loading: true, variant: "subtle" }} />
        <Story args={{ ...context.args, label: "Disabled", disabled: true, icon: "delete" }} />
        <Story args={{ ...context.args, icon: "plus", onlyIcon: true, pill: true }} />
        <Story args={{ ...context.args, icon: "plus", variant: "subtle", onlyIcon: true }} />
      </div>
    ),
  ],
};

export const WithInteractions: Story = {
  args: {
    label: "Click",
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    expect(args.onClick).toHaveBeenCalled();
  },
};
