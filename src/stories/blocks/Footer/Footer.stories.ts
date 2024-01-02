import { BlockTypes, Footer, IconsFooter } from '@blocks/Footer';
import { sunglassesLogo } from '@stories/components/example/logo/sunglassesLogo';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const metaFooter = {
  title: 'sunglassesandframes/Blocks/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default metaFooter;
type Story = StoryObj<typeof metaFooter>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    blocks: [
      {
        type: BlockTypes.LOGO_BLOCK,
        position: {
          desktop: {
            row: 1,
            disposition: 'center',
            column: undefined
          },
          mobile: {
            row: 1,
            disposition: 'center'
          }
        },
        logo: sunglassesLogo(),
        callback: () => console.log('ciao')
      },
      {
        type: BlockTypes.CTA_BLOCK,
        position: {
          desktop: {
            row: 2,
            disposition: undefined,
            column: 1
          },
          mobile: {
            row: 3,
            disposition: undefined
          }
        },
        item: 'WHY US',
        items: [
          {
            icon: IconsFooter.SUNGLASSES_ICON,
            title: 'The one you want? We’ve got it.',
            description: 'Shop over 4000+ different styles',
            cta: 'Discover now',
            callback: () => console.log('ciao'),
            itemColumn: 1
          },
          {
            icon: IconsFooter.CUSTOMER_SERVICE,
            title: 'Need advices or help?',
            description: 'From Mon to Fri, 9AM - 6PM',
            cta: 'Contact us',
            callback: () => console.log('ciao'),
            itemColumn: 1
          },
          {
            icon: IconsFooter.FAST_SHIPPING,
            title: 'You want it, you get it!',
            description: 'Same-day shipping and express delivery',
            cta: 'Read now',
            callback: () => console.log('ciao'),
            itemColumn: 2
          },
          {
            icon: IconsFooter.FIRST_CLASS_SERVICE,
            title: 'Be the first, always!',
            description: 'Early access to new collections',
            cta: 'What’s new',
            callback: () => console.log('ciao'),
            itemColumn: 2
          }
        ]
      },
      {
        type: BlockTypes.NEWSLETTER_BLOCK,
        position: {
          desktop: {
            row: 2,
            disposition: undefined,
            column: 2
          },
          mobile: {
            row: 2,
            disposition: undefined
          }
        },
        title: 'JOIN OUR CLUB',
        subTitle: 'Sign up for promotions, new arrivals alerts and style advices directly in your inbox',
        buttonCta: 'JOIN',
        description: 'By signing up, you consent to receive marketing by email and acknowledge you have read our Privacy Policy. Unsubscribe anytime at the bottom of our emails.',
        callback: () => console.log('ciao'),
      },
      {
        type: BlockTypes.ICONS_BLOCK,
        position: {
          desktop: {
            row: 3,
            disposition: undefined,
            column: 1
          },
          mobile: {
            row: undefined,
            disposition: undefined
          }
        },
        items: [
          {
            icon: IconsFooter.AMEX,
            callback: () => console.log('ciao'),
          },
          {
            icon: IconsFooter.APPLE_PAY,
            callback: () => console.log('ciao'),
          },
          {
            icon: IconsFooter.VISA,
            callback: () => console.log('ciao'),
          },
          {
            icon: IconsFooter.MASTERCARD,
            callback: () => console.log('ciao'),
          },
          {
            icon: IconsFooter.PAY_PAL,
            callback: () => console.log('ciao'),
          },
        ],
      },
      {
        type: BlockTypes.ICONS_BLOCK,
        position: {
          desktop: {
            row: 3,
            disposition: undefined,
            column: 1
          },
          mobile: {
            row: 7,
            disposition: 'left'
          }
        },
        items: [
          {
            icon: IconsFooter.INSTAGRAM,
            callback: () => console.log('ciao'),
          },
          {
            icon: IconsFooter.FACEBOOK,
            callback: () => console.log('ciao')
          },
          {
            icon: IconsFooter.TIKTOK,
            callback: () => console.log('ciao')
          },
          {
            icon: IconsFooter.PINTEREST,
            callback: () => console.log('ciao')
          },
        ],
      },
      {
        type: BlockTypes.MENU_BLOCK,
        position: {
          desktop: {
            row: 3,
            disposition: undefined,
            column: 2
          },
          mobile: {
            row: 4,
            disposition: 'left'
          }
        },
        item: 'SHOP NOW',
        items: [
          {
            label: 'Home',
            callback: () => console.log('ciao')
          },
          {
            label: 'Magazine',
            callback: () => console.log('ciao')
          },
          {
            label: 'Shop by',
            callback: () => console.log('ciao')
          },
          {
            label: 'Designers',
            callback: () => console.log('ciao')
          },
          {
            label: 'How to shop',
            callback: () => console.log('ciao')
          }
        ],
      },
      {
        type: BlockTypes.MENU_BLOCK,
        position: {
          desktop: {
            row: 3,
            disposition: undefined,
            column: 3
          },
          mobile: {
            row: 5,
            disposition: 'left'
          }
        },
        item: 'ASSISTANCE CENTER',
        items: [
          {
            label: 'Contact us',
            callback: () => console.log('ciao')
          },
          {
            label: 'Orders & Deliveries',
            callback: () => console.log('ciao')
          },
          {
            label: 'Payments',
            callback: () => console.log('ciao')
          },
          {
            label: 'Returns & Refunds',
            callback: () => console.log('ciao')
          },
          {
            label: 'FAQ',
            callback: () => console.log('ciao')
          },
          {
            label: 'T&C',
            callback: () => console.log('ciao')
          }
        ],
      },
      {
        type: BlockTypes.MENU_BLOCK,
        position: {
          desktop: {
            row: 3,
            disposition: undefined,
            column: 4
          },
          mobile: {
            row: 6,
            disposition: 'left'
          }
        },
        item: 'ABOUT US',
        items: [
          {
            label: 'About us',
            callback: () => console.log('ciao')
          },
          {
            label: 'Licensed brands',
            callback: () => console.log('ciao')
          },
          {
            label: 'Our Promise',
            callback: () => console.log('ciao')
          }
        ],
      },
      {
        type: BlockTypes.COPYRIGHT_BLOCK,
        position: {
          desktop: {
            row: 3,
            disposition: 'left',
            column: undefined
          },
          mobile: {
            row: 8,
            disposition: 'left'
          }
        },
        label: 'SUNGLASSESANDFRAMES.COM and its logo are trademarks of SONS OF ANARCHY SRL and are registered in numerous jurisdictions around the world'
      }
    ]
  }
};

Default.play = async({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  await expect(canvas.getByRole('img')).toBeInTheDocument();
};
