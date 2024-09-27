## ⚠️ Environment Variable Checker

## 📝 Description

A library that ensures required environment variables are defined at runtime. It will throw warnings or errors when key variables are missing or not correctly set.

This library is still in beta and hasn't been thoroughly tested with all Js frameworks/libraries. If you would like to contribute, writing tests, documentation, handling scenarios, please don't hesitate to raise PRs. 

![EB53D3C1-E84A-41C9-9168-17CC690BD25C](https://github.com/user-attachments/assets/c3c7a1a1-cce8-471c-96dc-2f8139978536) 
![60AB8092-4F42-4103-AD3A-6A48157E8CC7](https://github.com/user-attachments/assets/7e49f309-80e0-4e05-8c71-7e47029178ef)

## Getting Started

### 😐 Prerequisites

- node >= 18
- .env file setup in the project. Get a list of all required vars which will be used in the array below. 

### Installing

```
npm i environment-var-checker
```

### 🎬 Executing

Import and execute the library as shown below in a file that is the starting point of the application.

##### Examples:

- index.js/App.js/index.html in React
- main.ts in Angular
- main.js/index.html in Vite, etc

Import

```
import { EnvChecker } from "environment-var-checker";
```

Usage

```
const requiredVars = ["VITE_DB_HOST", "VITE_DB_USER", "VITE_DB_PASS"];
const envChecker = new EnvChecker(requiredVars);
envChecker.check(); 
```

main.jsx - Vite

```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EnvChecker } from "environment-var-checker";

const requiredVars = ["VITE_DB_HOST", "VITE_DB_USER", "VITE_DB_PASS"];
const envChecker = new EnvChecker(requiredVars);
envChecker.check();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## 😮‍💨 Common issues

## 🤓 Version History
- 1.0.0
  - Initial Release
- 1.0.3
  - Added console styling + QoL improvements
