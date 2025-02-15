# Log-Off: NextJS-based Web App for Preventing Gaming Addiction

Log-Off is a NextJS web application designed to help prevent gaming addiction by allowing users to financially incentivize gamers to play fewer hours. The tech stack mainly revolves around NextJs and ShadCN UI for the frontend, Express.js for the backend and MongoDB as the noSQL database. Our app provides several useful features

## Features

- **User Authentication and Registration:** Users can sign up for an account through ClerkJS.
- **User-Friendly Interface:** Easy to add money to wallets and automated transactions between guardian/child wallets upon successfully achieved goals
- **Addiction Prevention Gamification:** Streaks of no gaming can improve financial incentives for children.

## Getting Started

To get a local copy up and running, follow the prerequisites and steps below.

- React
- NPM
- Git and GitHub
- RiotAPI and Interledger OpenPayments API Keys
- Any code editor (e.g., VS Code, Brackets)

### Setup Instructions

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
