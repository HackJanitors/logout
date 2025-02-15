import { createAuthenticatedClient } from "@interledger/open-payments";

const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH
const KEY_ID = process.env.KEY_ID

const client = await createAuthenticatedClient({
    walletAddressUrl: "https://online-marketplace.com/usa",
    privateKey: PRIVATE_KEY_PATH,
    keyId: KEY_ID
});

const walletAddress = await client.walletAddress.get({
    url: WALLET_ADDRESS,
});

console.log("WALLET ADDRESS:", walletAddress);
