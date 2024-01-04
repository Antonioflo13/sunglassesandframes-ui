import { BlockTypes, Footer } from '@blocks/Footer';
import { sunglassesLogo } from '@stories/components/example/logo/sunglassesLogo';
// import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
// import { within } from '@storybook/testing-library';

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
            disposition: 'left'
          },
          mobile: {
            row: 3,
            disposition: 'left'
          }
        },
        item: 'WHY US',
        items: [
          {
            icon: '/src/stories/assets/sunglasses.svg',
            title: 'The one you want? We’ve got it.',
            description: 'Shop over 4000+ different styles',
            cta: 'Discover now',
            callback: () => console.log('ciao'),
          },
          {
            icon: '/src/stories/assets/fast-shipping.svg',
            title: 'You want it, you get it!',
            description: 'Same-day shipping and express delivery',
            cta: 'Read now',
            callback: () => console.log('ciao'),
          },
          {
            icon: '/src/stories/assets/customer-service.svg',
            title: 'Need advices or help?',
            description: 'From Mon to Fri, 9AM - 6PM',
            cta: 'Contact us',
            callback: () => console.log('ciao'),
          },
          {
            icon: '/src/stories/assets/first-class-service.svg',
            title: 'Be the first, always!',
            description: 'Early access to new collections',
            cta: 'What’s new',
            callback: () => console.log('ciao'),
          }
        ]
      },
      {
        type: BlockTypes.NEWSLETTER_BLOCK,
        position: {
          desktop: {
            row: 2,
            disposition: 'left',
          },
          mobile: {
            row: 2,
            disposition: 'left'
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
            disposition: 'left',
          },
          mobile: {
            row: 6,
            disposition: 'center'
          }
        },
        icons: [
          {
            icon: '/src/stories/assets/amex.svg',
          },
          {
            icon: '/src/stories/assets/amex.svg',
          },
          {
            icon: '/src/stories/assets/amex.svg',
          },
          {
            icon: '/src/stories/assets/amex.svg',
          },
          {
            icon: '/src/stories/assets/amex.svg',
          }
        ],
        socialIcons: [
          {
            icon: '/src/stories/assets/instagram.svg',
            callback: () => console.log('ciao'),
          },
          {
            icon: '/src/stories/assets/instagram.svg',
            callback: () => console.log('ciao')
          },
          {
            icon: '/src/stories/assets/instagram.svg',
            callback: () => console.log('ciao')
          },
          {
            icon: '/src/stories/assets/instagram.svg',
            callback: () => console.log('ciao')
          }
        ]
      },
      {
        type: BlockTypes.MENU_BLOCK,
        position: {
          desktop: {
            row: 3,
            disposition: 'left',
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
            disposition: 'left',
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
            disposition: 'left',
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
            row: 4,
            disposition: 'left',
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

// Default.play = async({ canvasElement }): Promise<void> => {
//   const canvas = within(canvasElement);

//   await expect(canvas.getByRole('img')).toBeInTheDocument();
// };
