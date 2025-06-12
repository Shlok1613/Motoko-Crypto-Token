# 🧠 Decentralized Notes App – Motoko + React + Internet Computer

This project is a simple decentralized notes application built on the **Internet Computer** using **Motoko** (for the backend canister logic) and **React** (for the frontend interface). It also includes **authentication** using DFINITY's `AuthClient`.

> 📌 Built as part of a course to explore Web3 development and understand how decentralized apps (dApps) work under the hood.

---

## 🚀 Features

- 📓 Add and view notes (or data) stored on-chain.
- 🔐 Authentication using Internet Identity (DFINITY AuthClient).
- 🧠 Backend written in Motoko and deployed as a canister.
- ⚛️ Frontend powered by React, connected to the backend using generated interfaces.
- 🛡️ Authenticated users can perform actions linked to their `Principal`.

---

## 🧰 Tech Stack

| Layer         | Tech                          |
|---------------|-------------------------------|
| Frontend      | React, JavaScript             |
| Backend       | Motoko (canister logic)       |
| Auth          | DFINITY `@dfinity/auth-client` |
| Platform      | Internet Computer (ICP)       |
| Dev Tools     | `dfx`, `npm`, `ic-repl`       |

---

## 🧪 Getting Started

### Prerequisites

- Node.js (v16+)
- DFX SDK (from [https://smartcontracts.org](https://smartcontracts.org))

### Local Setup

```bash
# Clone the project
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install frontend dependencies
npm install

# Start the local DFX network
dfx start --background

# Deploy the canister
dfx deploy

# Start the React frontend
npm start
