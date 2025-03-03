# Full-Stack E-Commerce App

A full-stack e-commerce application built using Next.js, Zustand, js-cookie, Tailwind CSS, and Wix Headless CMS. This project is part of a Next.js shopping app course that explores server actions and headless CMS integration.

## Features

- **Next.js 14** with App Router and Server Actions
- **Wix Headless CMS** for product management
- **Zustand** for state management
- **js-cookie** for cart and user authentication
- **Tailwind CSS** for styling
- **Full authentication system** with protected routes
- **Dynamic product listing and filtering**
- **Cart management and checkout flow**
- **Responsive and optimized UI/UX**

## Notice

The **Checkout and Order API** was not used in this project because it requires a paid Wix account. Since the project was developed on a free account, these features were omitted.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **State Management:** Zustand
- **Backend:** Wix Headless CMS
- **Authentication & Storage:** js-cookie
- **Deployment:** Vercel (recommended)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/terri-miles/next-ecommerce.git
   cd next-ecommerce
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file and add the required API keys and configurations:
   ```env
   NEXT_PUBLIC_WIX_APP_ID=your_wix_app_id
   NEXT_PUBLIC_WIX_CLIENT_ID=your_wix_site_id
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
/ecommerce-app
│── components/         # Reusable UI components
│── pages/              # Next.js pages (app router)
│── hooks/              # Custom hooks
│── store/              # Zustand store for global state
│── styles/             # Tailwind styles
│── utils/              # Utility functions
│── public/             # Static assets
│── .env.local          # Environment variables
│── next.config.js      # Next.js configuration
│── package.json        # Project dependencies
```

## Deployment

1. Deploy to Vercel:
   ```sh
   vercel
   ```
2. Set environment variables on Vercel Dashboard.
3. Push changes to your GitHub repository and let Vercel handle deployments.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---

Happy coding! 🚀

