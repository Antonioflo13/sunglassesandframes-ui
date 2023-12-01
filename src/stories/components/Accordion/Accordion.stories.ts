import { Accordion } from '@components/Accordion';
import type { Meta, StoryObj } from '@storybook/react';

const metaTypography = {
  title: 'sunglassesandframes/Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    accordion: [
      {
        title: 'SECTION TITLE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non sem sed odio eleifend porttitor. Quisque a vulputate odio, ac congue nisl. Sed id augue vel elit placerat porttitor. Sed id dignissim urna.',
        open: true,
      },
      {
        title: 'SECTION TITLE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non sem sed odio eleifend porttitor. Quisque a vulputate odio, ac congue nisl. Sed id augue vel elit placerat porttitor. Sed id dignissim urna.',
        open: false,
      }
    ]
  },
} satisfies Meta<typeof Accordion>;

export default metaTypography;
type Story = StoryObj<typeof metaTypography>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    accordion: [
      {
        title: 'SECTION TITLE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non sem sed odio eleifend porttitor. Quisque a vulputate odio, ac congue nisl. Sed id augue vel elit placerat porttitor. Sed id dignissim urna.',
        open: true,
      },
      {
        title: 'SECTION TITLE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non sem sed odio eleifend porttitor. Quisque a vulputate odio, ac congue nisl. Sed id augue vel elit placerat porttitor. Sed id dignissim urna.',
        open: false,
      }
    ]
  },
};
