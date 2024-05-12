import daisyUi from 'daisyui';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

interface AddVariantArgs {
  modifySelectors: (
    arg: ({ className }: { className: string }) => string,
  ) => void;
  separator: string;
}

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('not-first', (({
        modifySelectors,
        separator,
      }: AddVariantArgs) => {
        modifySelectors(({ className }) => {
          const element = e(`not-first${separator}${className}`);
          return `.${element}:not(:first-child)`;
        });
      }) as never);
    }),
    daisyUi,
  ],
} satisfies Config;
