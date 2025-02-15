# Log-Off: Gaming Addiction Prevention Web App

Log-Off is a smart web app designed to help prevent gaming addiction by turning reduced screen time into a rewarding challenge. It allows guardians to set financial incentives for gamers to play fewer hours, with automated wallet transactions when goals are met. The app also introduces streak-based rewards, where maintaining a controlled-gaming streak boosts financial incentives, making self-control more engaging. With a simple and user-friendly interface, Log-Off makes it easy to track progress, manage rewards, and encourage healthier gaming habits in a fun and motivating way!

## Features

- **User Authentication and Registration:** Users can sign up for an account through ClerkJS.
- **User-Friendly Interface:** Easy to add money to wallets and automated transactions between guardian/child wallets upon successfully achieved goals
- **Addiction Prevention Gamification:** Streaks of no gaming can improve financial incentives for children.

## Getting Started

To get a local copy up and running, follow the prerequisites and steps below.

#### Prerequisites

- React
- NPM
- Git and GitHub
- RiotAPI and Interledger OpenPayments API Keys
- Any code editor (e.g., VS Code, Brackets)

#### Cloning the repository

1. Open your terminal.
2. Navigate to your desired location to place this repository.
3. Clone the repository:
   ```sh
   git clone git@github.com:HackJanitors/logout.git
   ```

#### Running a local copy of Frontend/Backend

1. Once in the repository, `cd frontend` for frontend and `cd backend` for backend
2. Run `npm install`
3. Duplicate `.env.example` and add relevant environment variables
4. Run `npm run dev` in both `frontend` and `backend` folders
