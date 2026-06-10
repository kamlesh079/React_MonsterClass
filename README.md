# React + Vite Setup Guide for Beginners

## Prerequisites

Before creating a React project, make sure you have:

### 1. Install Node.js

Download and install Node.js from:

https://nodejs.org

After installation, verify it:

```bash
node -v
npm -v
```

You should see version numbers.

### 2. Install VS Code

Download Visual Studio Code:

https://code.visualstudio.com

Install it normally.

---

# Create a New React Project

Open Terminal (Mac/Linux) or Command Prompt (Windows).

Run:

```bash
npm create vite@latest
```

or

```bash
npx create-vite@latest
```

---

## Step 1: Enter Project Name

Example:

```text
Project name:
React_MonsterClass
```

Press Enter.

---

## Step 2: Package Name

Vite automatically suggests a package name.

Example:

```text
Package name:
react-monsterclass
```

Press Enter to accept.

### Note

- Package names must be lowercase.
- No spaces allowed.
- Usually use hyphens (`-`).

---

## Step 3: Select Framework

Choose:

```text
React
```

Use Arrow Keys and press Enter.

---

## Step 4: Select Variant

Choose one:

### Recommended for Beginners

```text
JavaScript
```

### Faster Option

```text
JavaScript + SWC
```

Either is fine.

---

## Step 5: Move Into Project Folder

Example:

```bash
cd React_MonsterClass
```

---

## Step 6: Install Dependencies

Run:

```bash
npm install
```

Wait until installation finishes.

---

## Step 7: Start Development Server

Run:

```bash
npm run dev
```

You will see something like:

```text
VITE v8.x.x ready

Local: http://localhost:5173/
```

---

## Step 8: Open in Browser

Open:

```text
http://localhost:5173/
```

You should see the default React + Vite page.

Congratulations! Your React application is running.

---

# Open Project in VS Code

Inside the project folder run:

```bash
code .
```

If the `code` command doesn't work:

1. Open VS Code
2. Press `Cmd + Shift + P` (Mac)
3. Type:

```text
Shell Command: Install 'code' command in PATH
```

4. Press Enter
5. Try again:

```bash
code .
```

---

# Project Structure

```text
React_MonsterClass/
│
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── index.html
```

## Important Files

### App.jsx

Main React component.

### main.jsx

Application entry point.

### package.json

Contains project information and dependencies.

---

# First React Example

Open:

```text
src/App.jsx
```

Replace contents with:

```jsx
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>My first React application.</p>
    </div>
  );
}

export default App;
```

Save the file.

The browser updates automatically.

---

# Do I Keep Terminal Open?

Yes.

Keep this running:

```bash
npm run dev
```

The terminal hosts the development server.

If you close it, your React app stops.

---

# Stop the Server

Press:

```text
Ctrl + C
```

Then confirm if prompted.

---

# Start Again Later

Open terminal.

Move into project folder:

```bash
cd React_MonsterClass
```

Start server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

# Common Commands

## Install Packages

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

# Troubleshooting

## node command not found

Install Node.js and restart terminal.

## npm command not found

Reinstall Node.js.

## Port already in use

Stop other Vite servers or restart terminal.

## Blank page

Check browser console for errors.

## Module not found

Run:

```bash
npm install
```

again.

---

# Learning Path After Setup

1. JSX
2. Components
3. Props
4. State (`useState`)
5. Events
6. Conditional Rendering
7. Lists and Keys
8. Forms
9. `useEffect`
10. React Router
11. API Calls
12. Context API
13. Custom Hooks
14. Deployment

---

# Happy Coding! 
