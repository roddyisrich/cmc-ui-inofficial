const { Connection, PublicKey, Keypair, LAMPORTS_PER_SOL } = require('@solana/web3.js');
const fs = require('fs');

async function airdropDevnetSol() {
    try {
        const connection = new Connection("https://api.devnet.solana.com", 'confirmed');
        
        // Load the wallet we created
        const walletData = JSON.parse(fs.readFileSync('devnet-wallet.json'));
        const wallet = Keypair.fromSecretKey(new Uint8Array(walletData));
        
        console.log("Requesting airdrop for:", wallet.publicKey.toString());
        
        // Request 2 SOL
        const signature = await connection.requestAirdrop(
            wallet.publicKey,
            2 * LAMPORTS_PER_SOL
        );
        
        console.log("Airdrop signature:", signature);
        
        // Wait for confirmation
        await connection.confirmTransaction(signature);
        
        // Check balance
        const balance = await connection.getBalance(wallet.publicKey);
        console.log("New balance:", balance / LAMPORTS_PER_SOL, "SOL");
        
    } catch (error) {
        console.error("Airdrop failed:", error.message);
        console.log("You may need to try again or use a different method");
    }
}

airdropDevnetSol();
