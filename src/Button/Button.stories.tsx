import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { expect, fn, userEvent, within } from '@storybook/test'

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '레이블 혹은 아이콘으로 구성된 버튼을 표시합니다.',
      },
    },
    layout: 'centered',
  },
  args: { onClick: fn() },
}

export default meta
type Story = StoryObj<typeof Button>

export const Example: Story = {
  args: {
    label: 'Button',
    onClick: fn(),
  },
  parameters: {
    docs: {
      source: {
        code: `<Button label="Button" />`,
      },
    },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    expect(args.onClick).toHaveBeenCalled()
  },
}

export const BasicButton: Story = {
  parameters: {
    docs: {
      description: {
        story: '버튼의 생김새를 지정합니다.',
      },
      source: {
        code: `<Button label="Default" />
<Button variant="danger" label="Destructive" />
<Button variant="outlined" label="Cancel" />
<Button variant="subtle" label="Subtle" />
<Button variant="ghost" label="Ghost" />
<Button variant="link" label="Link" />
`,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div className="flex space-x-4">
        <Story args={{ ...context.args, label: 'Default' }} />
        <Story args={{ ...context.args, label: 'Destructive', variant: 'danger' }} />
        <Story args={{ ...context.args, label: 'Cancel', variant: 'outlined' }} />
        <Story args={{ ...context.args, label: 'Subtle', variant: 'subtle' }} />
        <Story args={{ ...context.args, label: 'Ghost', variant: 'ghost' }} />
        <Story args={{ ...context.args, label: 'Link', variant: 'link' }} />
      </div>
    ),
  ],
}

export const ButtonSize: Story = {
  parameters: {
    docs: {
      description: {
        story: '3가지 크기가 지원됩니다.',
      },
      source: {
        code: `<Button size="sm" label="Small" />
<Button label="Medium" />
<Button size="lg" label="Large" />
`,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div className="flex space-x-4 space-y-4 items-baseline">
        <Story args={{ ...context.args, label: 'Small', size: 'sm' }} />
        <Story args={{ ...context.args, label: 'Medium' }} />
        <Story args={{ ...context.args, label: 'Large', size: 'lg' }} />
      </div>
    ),
  ],
}

export const IconButton: Story = {
  parameters: {
    docs: {
      description: {
        story: '버튼에 아이콘을 표시합니다.',
      },
      source: {
        code: `<Button icon="mail" label="Login with Email" />
<Button variant="outlined" icon="send" label="Send" />
<Button variant="subtle" label="Loading" loading />
<Button icon="delete" label="Delete" disabled />
<Button icon="plus" onlyIcon pill />
<Button variant="subtle" icon="plus" onlyIcon />
`,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div className="flex space-x-4">
        <Story args={{ ...context.args, label: 'Login with Email', icon: 'mail' }} />
        <Story args={{ ...context.args, variant: 'outlined', label: 'Send', icon: 'send' }} />
        <Story args={{ ...context.args, label: 'Loading', loading: true, variant: 'subtle' }} />
        <Story args={{ ...context.args, label: 'Delete', disabled: true, icon: 'delete' }} />
        <Story args={{ ...context.args, icon: 'plus', onlyIcon: true, pill: true }} />
        <Story args={{ ...context.args, icon: 'plus', variant: 'subtle', onlyIcon: true }} />
      </div>
    ),
  ],
}

export const OverrideClass: Story = {
  parameters: {
    docs: {
      description: {
        story: '클래스를 덮어 씁니다.',
      },
      source: {
        code: `<Button label="Click me !" className="bg-brown-600 hover:bg-brown-700 active:bg-brown-800" />`,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div className="flex space-x-4">
        <Story
          args={{
            ...context.args,
            label: 'Click me !',
            className: 'bg-brown-600 hover:bg-brown-700 active:bg-brown-800',
          }}
        />
      </div>
    ),
  ],
}
