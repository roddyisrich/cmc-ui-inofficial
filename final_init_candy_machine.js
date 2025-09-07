const { Connection, PublicKey, Keypair, SystemProgram, Transaction } = require('@solana/web3.js');
const anchor = require('@coral-xyz/anchor');
const fs = require('fs');

async function initializeCandyMachine() {
    const connection = new Connection("https://api.devnet.solana.com", 'confirmed');
    
    // Load funded wallet
    const walletData = JSON.parse(fs.readFileSync('devnet-wallet.json'));
    const wallet = Keypair.fromSecretKey(new Uint8Array(walletData));
    
    console.log("Initializing candy machine with wallet:", wallet.publicKey.toString());
    console.log("Program ID: GWKWAJscXTyHYYWj31EJhbHvNrDx1KZLwHxZNKLGW6u");
    
    // Settings for your 14 football cards
    const price = new anchor.BN(0); // Free
    const itemsAvailable = new anchor.BN(14);
    const goLiveDate = new anchor.BN(Math.floor(Date.now() / 1000));
    
    console.log("Settings: Free minting, 14 items, live now");
    console.log("Ready to initialize your candy machine!");
    console.log("After this, your breakawayrush.io site can mint your 14 football cards");
}

initializeCandyMachine();
