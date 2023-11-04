import { InfoBox } from '@blocks/InfoBox/InfoBox';
import { Img } from '@stories/components/ImageWrapper/Img';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const metaInfoBox = {
  title: 'sunglassesandframes/Blocks/InfoBox',
  component: InfoBox,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InfoBox>;

export default metaInfoBox;
type Story = StoryObj<typeof metaInfoBox>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: Img('370x200'),
    title: {
      label: 'PAGE TITLE',
      fontFamily: 'helvetica-medium',
    },
    subtitle: {
      label: 'Page subtitle',
      fontFamily: 'helvetica-regular',
    },
  },
};

export const WithDate: Story = {
  args: {
    children: Img('370x200'),
    title: {
      label: 'PAGE TITLE',
      fontFamily: 'helvetica-medium',
    },
    subtitle: {
      label: 'Page subtitle',
      fontFamily: 'helvetica-regular',
    },
    date: {
      label: '28/10/2023',
      fontFamily: 'helvetica-regular',
    },
  },
};

export const WithDateAndDescription: Story = {
  args: {
    children: Img('370x200'),
    title: {
      label: 'PAGE TITLE',
      fontFamily: 'helvetica-medium',
    },
    subtitle: {
      label: 'Page subtitle',
      fontFamily: 'helvetica-regular',
    },
    description: {
      label:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non sem sed odio eleifend porttitor. Quisque a vulputate odio, ac congue nisl. Sed id augue vel elit placerat porttitor. Sed id dignissim urna.',
      fontFamily: 'helvetica-regular',
    },
    date: {
      label: '28/10/2023',
      fontFamily: 'helvetica-regular',
    },
  },
};

export const WithDescription: Story = {
  args: {
    children: Img('370x200'),
    title: {
      label: 'PAGE TITLE',
      fontFamily: 'helvetica-medium',
    },
    description: {
      label:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non sem sed odio eleifend porttitor. Quisque a vulputate odio, ac congue nisl. Sed id augue vel elit placerat porttitor. Sed id dignissim urna.',
      fontFamily: 'helvetica-regular',
    },
    button: {
      label: 'BUTTONS',
      fontFamily: 'artegra-bold',
      callback: () => console.log('clicked'),
    },
  },
};

Default.play = async({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  await expect(canvas.getByRole('img')).toBeInTheDocument();
};
