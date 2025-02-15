import { createAuthenticatedClient } from "@interledger/open-payments";
import dotenv from 'dotenv';

dotenv.config()

// const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH
// const KEY_ID = process.env.KEY_ID

//console.log(PRIVATE_KEY_PATH)


const client = await createAuthenticatedClient({
    walletAddressUrl: "https://ilp.interledger-test.dev/logoff",
    privateKey: process.env.PRIVATE_KEY_PATH,
    keyId: process.env.KEY_ID
});

const walletAddress = await client.walletAddress.get({
    url: "https://ilp.interledger-test.dev/logoff",
});

console.log("WALLET ADDRESS:", walletAddress);

// const childWalletAddress = await client.walletAddress.get({
//     url: 'https://happy-life-bank.com/shoe-shop'
// })

// const guardianWalletAddress = await client.walletAddress.get({
//     url: 'https://cloud-nine-wallet.com/alice'
// })


// //create incoming payment
// //child wallet's backend gets grant to create Incoming Payment
// const incomingPaymentGrant = await client.grant.request(
//     { url: childWalletAddress.authServer },
//     {
//         access_token: {
//             access: [
//                 {
//                     type: 'incoming-payment',
//                     actions: ['read-all', 'create']
//                 }
//             ]
//         }
//     }
// )

// //create incoming payment using grant
// const incomingPayment = await client.incomingPayment.create(
//     {
//         url: new URL(childWalletAddress.id).origin,
//         accessToken: incomingPaymentGrant.access_token.value
//     },
//     {
//         walletAddress: childWalletAddress.id,
//         incomingAmount: {
//             assetCode: 'USD',
//             assetScale: 2,
//             value: '5000'
//         },
//         metadata: {
//             externalRef: '#INV2022-8363828',
//             description: 'allowance'
//         }
//     }
// )


// //grant to create quote on guardian's wallet, amount : on interledger network
// const quoteGrant = await client.grant.request(
//     { url: guardianWalletAddress.authServer },
//     {
//         access_token: {
//             access: [
//                 {
//                     type: 'quote',
//                     actions: ['create', 'read']
//                 }
//             ]
//         }
//     }
// )

// const quote = await client.quote.create(
//     {
//         url: new URL(guardianWalletAddress.id).origin,
//         accessToken: quoteGrant.access_token.value
//     },
//     {
//         walletAddress: customerWalletAddress.id,
//         receiver: incomingPayment.id,
//         method: 'ilp'
//     }
// )


// //create ongoing payment grant (requires explicit interaction with guardian: need to give dialog on website for grant of creating
// //ongoing payment from bank)
// //create ongoing payent in guardian's wallet 
// const outgoingPaymentGrant = await client.grant.request(
//     { url: guardianWalletAddress.authServer },
//     {
//         access_token: {
//             access: [
//                 {
//                     type: 'outgoing-payment',
//                     actions: ['read', 'create', 'list'],
//                     identifier: guardianWalletAddress.id,
//                     limits: {
//                         debitAmount: quote.debitAmount, // to authorize an amount up to the quoted amount
//                         receiveAmount: quote.receiveAmount
//                     }
//                 }
//             ]
//         },
//         interact: {
//             start: ['redirect'],
//             finish: {
//                 method: 'redirect',
//                 uri: 'https://online-marketplace.com/complete-payment', // where to redirect the customer after the interaction is completed
//                 //"http://localhost:8000/",
//                 nonce: uuid()
//             }
//         }
//     }
// )

// //guardian approves --> redirected to url in outgoing payment grant --> finalize payment grant
// const finalizedOutgoingPaymentGrant = await client.grant.continue(
//     {
//         accessToken: outgoingPaymentGrant.access_token.value,
//         url: outgoingPaymentGrant.continue.uri
//     },
//     { interact_ref: INTERACT_REF_FROM_URL }
// )



// //guardian approves --> child can create, execute outgoing payment to guaridan
// const outgoingPayment = await client.outgoingPayment.create(
//     {
//         url: new URL(guardianWalletAddress.id).origin,
//         accessToken: finalizedOutgoingPaymentGrant.access_token.value
//     },
//     {
//         walletAddress: guardianWalletAddress.id,
//         quoteId: quote.id,
//         metadata: { description: 'Allowance given' }
//     }
// )