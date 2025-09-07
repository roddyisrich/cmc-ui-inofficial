const { Connection, PublicKey, Keypair, SystemProgram } = require('@solana/web3.js');
const fs = require('fs');

// Your candy machine program
const PROGRAM_ID = new PublicKey("GWKWAJscXTyHYYWj31EJhbHvNrDx1KZLwHxZNKLGW6u");

async function initializeWithWallet() {
    const connection = new Connection("https://api.devnet.solana.com");
    
    // Generate a new keypair for testing (you can replace with your own)
    const payer = Keypair.generate();
    
    console.log("Generated wallet:", payer.publicKey.toString());
    console.log("Need to fund this wallet with devnet SOL");
    console.log("Run: solana airdrop 2 " + payer.publicKey.toString() + " --url devnet");
    console.log("Or visit: https://faucet.solana.com and request devnet SOL");
    
    // Save the keypair for reuse
    fs.writeFileSync('devnet-wallet.json', JSON.stringify(Array.from(payer.secretKey)));
    console.log("Wallet saved to devnet-wallet.json");
}

initializeWithWallet();
