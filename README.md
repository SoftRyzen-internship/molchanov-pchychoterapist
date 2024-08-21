This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

- #### component Socials

| Prop      | Default | Description                                                                            |
| --------- | ------- | -------------------------------------------------------------------------------------- |
| `section` | --      | optional, `string`, determines the color scheme based on the section (e.g., 'footer'). |
| `gap`     | 'gap-8' | optional, `string`, adds custom gap between the social icons.                          |

- #### component Logo

| Prop     | Default | Description |
| -------- | ------- | ----------- |
| no props | --      |             |

- #### component Button

| Prop       | Type      | Default  | Description                                                                    |
| ---------- | --------- | -------- | ------------------------------------------------------------------------------ |
| `type`     | string    | 'button' | optional, sets the button type.                                                |
| `onClick`  | function  | --       | required,function that will be called on click; scrolls to a specific section. |
| `children` | ReactNode | --       | required, button content, can be text or element.                              |

- #### component NavMenu

| Prop          | Type     | Default | Description                                                                                           |
| ------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------- |
| `section`     | string   | --      | optional, defines a color scheme depending on the section (for example,'footer', 'burger', 'header'). |
| `toggleModal` | function | --      | optional, function to control the opening/closing of a modal window.                                  |
