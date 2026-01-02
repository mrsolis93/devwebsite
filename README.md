This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deploying with Docker

- Build the docker image: docker build -t mrsolis93/devwebsite-app:v1.0 .
- Push the docker image to the hub from personal computer(change tag if necessary): docker push mrsolis93/devwebsite-app:v1.0
- On VPS, update, install docker, docker-compose, nginx, certbot

    - 
    - sudo apt install certbot python3-certbot-nginx
    - sudo certbot --nginx -d your-domain.com
    - sudo ufw allow 'Nginx Full'

- On VPS login to docker: docker login
- On VPS pull the docker image from the hub(change version if necessary): docker mrsolis/devwebsite-app:v1.01
- On VPS run the docker image: docker run -d --name website mrsolis/devwebsite-app:v1.01



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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
