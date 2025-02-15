import { createAuthenticatedClient } from "@interledger/open-payments";
import readline from "readline/promises"
import dotenv from 'dotenv';
//import { childWalletId, dailyRate, weeklyRate, monthlyRate } from '../models/child.js';
import guardianWalletId from '../models/guardian.js';



dotenv.config()

const keyId = process.env.KEY_ID



// const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH
// const KEY_ID = process.env.KEY_ID

//console.log(PRIVATE_KEY_PATH)


const handleTransaction = async (rate, guardianWalletId, childWalletId) => {

    const client = await createAuthenticatedClient({
        walletAddressUrl: "https://ilp.interledger-test.dev/logoff",
        privateKey: "private.key",
        keyId: "86cfd73c-8aca-48b8-8a7f-c3d4fa7680aa",
    });

    // const walletAddress = await client.walletAddress.get({
    //     url: "https://ilp.interledger-test.dev/logoff",
    // });

    //console.log("WALLET ADDRESS:", walletAddress);

    //input from frontend
    const childWalletAddress = await client.walletAddress.get({
        //url: 'https://ilp.interledger-test.dev/martinhenz1234'
        url: childWalletId
    })


    //input from frontend
    const guardianWalletAddress = await client.walletAddress.get({
        //url: 'https://ilp.interledger-test.dev/boydanderson'
        url: guardianWalletId
    })


    //create incoming payment
    //child wallet's backend gets grant to create Incoming Payment
    const incomingPaymentGrant = await client.grant.request(
        { url: childWalletAddress.authServer },
        {
            access_token: {
                access: [
                    {
                        type: 'incoming-payment',
                        actions: ['read-all', 'create']
                    }
                ]
            }
        }
    )



    //create incoming payment using grant
    const incomingPayment = await client.incomingPayment.create(
        {
            url: new URL(childWalletAddress.id).origin,
            accessToken: incomingPaymentGrant.access_token.value
        },
        {
            walletAddress: childWalletAddress.id,
            incomingAmount: {
                assetCode: childWalletAddress.assetCode,
                assetScale: childWalletAddress.assetScale,
                value: rate,      //set value
            },
            metadata: {
                externalRef: '#INV2022-8363828',
                description: 'allowance'
            }
        }
    )

    //console.log(incomingPayment)


    //grant to create quote on guardian's wallet, amount : on interledger network
    const quoteGrant = await client.grant.request(
        { url: guardianWalletAddress.authServer },
        {
            access_token: {
                access: [
                    {
                        type: 'quote',
                        actions: ['create', 'read']
                    }
                ]
            }
        }
    )

    const quote = await client.quote.create(
        {
            url: new URL(guardianWalletAddress.id).origin,
            accessToken: quoteGrant.access_token.value,
        },
        {
            walletAddress: guardianWalletAddress.id,
            receiver: incomingPayment.id,
            method: 'ilp',
        }
    )

    //console.log(quote)


    // //create ongoing payment grant (requires explicit interaction with guardian: need to give dialog on website for grant of creating
    // //ongoing payment from bank)
    // //create ongoing payent in guardian's wallet 
    const outgoingPaymentGrant = await client.grant.request(
        { url: guardianWalletAddress.authServer },
        {
            access_token: {
                access: [
                    {
                        type: 'outgoing-payment',
                        actions: ['read', 'create', 'list'],
                        limits: {
                            debitAmount: quote.debitAmount, // to authorize an amount up to the quoted amount
                            receiveAmount: quote.receiveAmount
                        },
                        identifier: guardianWalletAddress.id,
                    }
                ],
            },
            interact: {
                start: ['redirect'],
                // finish: {
                //     method: 'redirect',
                //     uri: 'https://online-marketplace.com/complete-payment', // where to redirect the customer after the interaction is completed
                //     //"http://localhost:8000/",
                //     //nonce: uuid()
                //nonce: NONCE,
                // }
            }
        }
    )

    console.log(outgoingPaymentGrant)

    await readline
        .createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        .question("Please accept grant and press enter...")

    // //guardian approves --> redirected to url in outgoing payment grant --> finalize payment grant
    const finalizedOutgoingPaymentGrant = await client.grant.continue(
        {
            url: outgoingPaymentGrant.continue.uri,
            accessToken: outgoingPaymentGrant.continue.access_token.value,
        },
        //{ interact_ref: INTERACT_REF_FROM_URL }
    )

    console.log(finalizedOutgoingPaymentGrant)

    // //guardian approves --> child can create, execute outgoing payment to guaridan
    const outgoingPayment = await client.outgoingPayment.create(
        {
            //url: new URL(guardianWalletAddress.id).origin,
            url: guardianWalletAddress.resourceServer,
            accessToken: finalizedOutgoingPaymentGrant.access_token.value
        },
        {
            walletAddress: guardianWalletAddress.id,
            quoteId: quote.id,
            metadata: { description: 'Allowance given' }
        }
    )

    console.log(outgoingPayment)

}

export default handleTransaction