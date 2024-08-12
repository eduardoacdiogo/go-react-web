# Go + React Application
It's a frontend of Ask Me Anything application, it was started using Vite and it's build with React 19 for building interfaces, TypeScript for static type checking, React Router DOM for creating and configuring routing, Lucide React for icons and Sonner for toasts.

## Table of Contents
- [Stack](#stack)
- [Running the project](#running-the-project)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)

## Stack
- **[Vite](https://vitejs.dev)**: Next Generation Frontend Tooling.
- **[React 19](https://react.dev/blog/2024/04/25/react-19)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org)**: JavaScript with static type definitions.
- **[React Router DOM](https://reactrouter.com/en/main)**: Declarative routing for React.
- **[TailwindCSS](https://tailwindcss.com)**: | _Rapidly build modern websites without ever leaving your HTML_.
- **[@tanstack/react-query](https://tanstack.com/query/latest)**: Powerful asynchronous state management for React applications.
- **[Lucide React](https://lucide.dev)**: A collection of beautifully simple, open-source icons.
- **[Sonner](https://sonner.emilkowal.ski)**: A lightweight notification library for React.

## Running the project

### Prerequisites
Ensure that your machine has installed:
- [node.js](https://nodejs.org/en)>=22
- [pnpm](https://pnpm.io)>=9

### Installation

**Step 1 - Clone the repository**
```sh
  git clone https://github.com/[your-user]/[repository-name]
```

**Step 2 - Navigate to repository folder**
```sh
  cd ./[repository-name]
```

**Step 3 - Install dependencies**
```sh
  pnpm install --force # or pnpm i -f
```

### Running

**Step 1 - Config .env**
<br />
Copy and paste the `.en-example` and rename to `.env`, after that in the `.env` add the value to `VITE_APP_API_URL` (the value should be where your backend is running)

**Step 2 - Running the application**
```sh
  pnpm run dev
```
Open in your browser [http://localhost:5173](http://localhost:5173) to view the appliction.

## Project Structure
The project's structure is organized as follows:

```bash
my-vite-react-app/
├── public/                     # Static assets
├── src/                        # Source files
│   ├── assets/                 # Images, fonts, etc.
│   ├── components/             # Reusable components
│   ├── http/                   # Request protocol 
│   ├── hooks/                  # Hooks
│   ├── pages/                  # Page components
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── .eslintrc.cjs               # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── package.json                # Project metadata and scripts
```

## Available Scripts

In the project directory, you can run:

- **`pnpm dev`**: Starts the development server.
- **`pnpm build`**: Bundles the app for production.
- **`pnpm preview`**: Previews the production build.
- **`pnpm lint`**: Lints the source code using ESLint.
