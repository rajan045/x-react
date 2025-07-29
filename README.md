# create-x-react-app

A CLI tool to quickly create React + Vite + TypeScript + Tailwind CSS applications.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React** - The latest React with hooks
- 🔷 **TypeScript** - Full TypeScript support
- 🎨 **Tailwind CSS v4** - Latest version with Vite plugin
- 📦 **Ready to use** - No additional configuration needed
- 🧹 **ESLint** - Code linting with React-specific rules

## Local Development & Testing

### Testing Locally

1. **Link the package globally:**

   ```bash
   npm link
   ```

2. **Create a new project:**

   ```bash
   create-x-react-app my-new-app
   ```

3. **Navigate and start development:**
   ```bash
   cd my-new-app
   npm run dev
   ```

### Unlinking (when done testing)

```bash
npm unlink -g create-x-react-app
```

## Publishing to npm

### 1. Update package info

Edit `package.json` and update:

- `author` field with your name
- `version` field (follow semantic versioning)
- Any other metadata

### 2. Login to npm

```bash
npm login
```

### 3. Publish

```bash
npm publish
```

### 4. After publishing, users can install globally:

```bash
npm install -g create-x-react-app
```

Or use with npx (recommended):

```bash
npx create-x-react-app my-app
```

## Package Structure

```
├── bin/
│   └── cli.js          # Main CLI script
├── template/           # Template files for new projects
│   ├── src/
│   ├── public/
│   ├── package.json    # Template package.json
│   └── ...
└── package.json        # CLI package configuration
```

## Generated Project Structure

```
my-new-app/
├── src/
│   ├── App.tsx         # Main component with Tailwind example
│   ├── main.tsx        # React entry point
│   ├── index.css       # Global styles
│   └── assets/
├── public/             # Static assets
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration with Tailwind
├── tsconfig*.json      # TypeScript configuration
└── package.json        # Project dependencies
```

## What's Included

- React 19 with TypeScript
- Vite for fast development and building
- Tailwind CSS v4 with Vite plugin integration
- ESLint with React and TypeScript rules
- Hot module replacement
- TypeScript strict mode
- Modern ES modules

## Commands in Generated Projects

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT
