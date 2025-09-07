const { Connection, PublicKey, Keypair } = require('@solana/web3.js');
const anchor = require('@coral-xyz/anchor');

// Your deployed candy machine program ID
const PROGRAM_ID = new PublicKey("GWKWAJscXTyHYYWj31EJhbHvNrDx1KZLwHxZNKLGW6u");

async function initializeCandyMachine() {
    console.log("Initializing your deployed candy machine...");
    console.log("Program ID:", PROGRAM_ID.toString());
    
    // Connect to devnet
    const connection = new Connection("https://api.devnet.solana.com");
    
    // Settings for your 14 football cards
    const settings = {
        price: 0, // Free minting
        itemsAvailable: 14, // Your 14 cards
        goLiveDate: Math.floor(Date.now() / 1000), // Live now
    };
    
    console.log("Settings:", settings);
    console.log("Ready to initialize with your 14 football card metadata URLs");
}

initializeCandyMachine();
