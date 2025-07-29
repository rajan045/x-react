#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the project name from command line arguments
const projectName = process.argv[2];

if (!projectName) {
  console.log(chalk.red('❌ Error: Please provide a project name'));
  console.log(chalk.yellow('Usage: create-x-react-app <project-name>'));
  process.exit(1);
}

// Validate project name
if (!/^[a-zA-Z0-9-_]+$/.test(projectName)) {
  console.log(chalk.red('❌ Error: Project name can only contain letters, numbers, hyphens, and underscores'));
  process.exit(1);
}

const projectPath = path.resolve(projectName);
const templatePath = path.join(__dirname, '..', 'template');

async function createProject() {
  try {
    // Check if directory already exists
    if (fs.existsSync(projectPath)) {
      console.log(chalk.red(`❌ Error: Directory "${projectName}" already exists`));
      process.exit(1);
    }

    console.log(chalk.blue(`🚀 Creating a new React app in ${projectName}...`));

    // Copy template files
    await fs.copy(templatePath, projectPath);

    // Update package.json with project name
    const packageJsonPath = path.join(projectPath, 'package.json');
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = projectName;
    packageJson.version = '0.1.0';
    packageJson.private = true;
    delete packageJson.bin;
    delete packageJson.files;
    delete packageJson.keywords;
    delete packageJson.author;
    delete packageJson.peerDependencies;
    
    // Move peerDependencies to devDependencies
    packageJson.dependencies = {
      "@tailwindcss/vite": "^4.1.11",
      "react": "^19.1.0",
      "react-dom": "^19.1.0",
      "tailwindcss": "^4.1.11"
    };
    
    packageJson.devDependencies = {
      "@eslint/js": "^9.30.1",
      "@types/react": "^19.1.8",
      "@types/react-dom": "^19.1.6",
      "@vitejs/plugin-react-swc": "^3.10.2",
      "eslint": "^9.30.1",
      "eslint-plugin-react-hooks": "^5.2.0",
      "eslint-plugin-react-refresh": "^0.4.20",
      "globals": "^16.3.0",
      "typescript": "~5.8.3",
      "typescript-eslint": "^8.35.1",
      "vite": "^7.0.4"
    };

    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    console.log(chalk.green('✅ Project created successfully!'));
    console.log(chalk.blue('📦 Installing dependencies...'));

    // Install dependencies
    const installProcess = spawn('npm', ['install'], {
      cwd: projectPath,
      stdio: 'inherit',
      shell: true
    });

    installProcess.on('close', (code) => {
      if (code === 0) {
        console.log(chalk.green('\n🎉 Setup complete!'));
        console.log(chalk.yellow('\nTo get started:'));
        console.log(chalk.cyan(`  cd ${projectName}`));
        console.log(chalk.cyan(`  npm run dev`));
        console.log(chalk.yellow('\nHappy coding! 🚀'));
      } else {
        console.log(chalk.red('\n❌ Failed to install dependencies'));
        console.log(chalk.yellow('You can try running npm install manually in the project directory'));
      }
    });

  } catch (error) {
    console.error(chalk.red('❌ Error creating project:'), error.message);
    process.exit(1);
  }
}

createProject(); 