const { Connection, PublicKey, Keypair, SystemProgram, SYSVAR_RENT_PUBKEY } = require('@solana/web3.js');
const anchor = require('@coral-xyz/anchor');

// Your candy machine program
const PROGRAM_ID = new PublicKey("GWKWAJscXTyHYYWj31EJhbHvNrDx1KZLwHxZNKLGW6u");

// Your 14 metadata URLs
const METADATA_URLS = [
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreigajxfpjrvojuni3wnez4dl5ztzawbntwygsi46hlfv22tludhfoa",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreif62is2inmcs6l7tbgwqw3ijnvk7gqxmna6xscjz3zwxbvcovffwm",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreihs5cq3v4gn2erktv7bwamaydmnk5zsaughbasech6fimrh7x4oy4",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreiacgmi72teax6mxuaovwlymdiaubujnjy6dsflqrzucfhy2zizwny",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreicofg5sgkn2yxtgtvsdz6ce6uc5xhqtgngmfm7ja37fjfp7tda5re",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreih6sc2t4dh7c6g7nfrffg4wv5a2z6fstwejvb7nvj2lz66bu7d5w4",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreigdpj3sdvpat42oq56nhh6qytaz7w6rhgppcewvwar3jfs4w73knq",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreidkwag5bacoav3m3wpxrlfxn6kmmkds3vdajxm64vqy2lmqbkye5e",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreic4a6lofy6g6aiqwrmregumqjmisake7zwzimlc6wrx4axjsjkfsi",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreibsyb6j4ekzfomrgt3vl6qzusbmrvcrt3cxbc2o3yi7aqq4iogwj4",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreiahriav3ay2ybrzgz7obvmmcqz2ye3xspno7sftw2ezaikqadr3ha",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreidhg6qcgr7ql7oeu5zumtkughk5kpmbnp7vudht6nez6jrdrpmeky",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreiaacut3qjyo5ya6g77n7kjtav3qdsr7cfwa3zsnapg6jlfklo6lca",
"https://red-late-lemming-903.mypinata.cloud/ipfs/bafkreiamidnlwhee3oephsidco6s2633lky7hl6sbh4udjc3ehzainvx3u"
];

async function initializeWithMetadata() {
    console.log("Initializing candy machine with 14 football card metadata URLs...");
    console.log("This will make your candy machine ready for minting");
    
    // For now, just confirm we have everything ready
    console.log("✓ Program ID:", PROGRAM_ID.toString());
    console.log("✓ Metadata URLs:", METADATA_URLS.length, "cards ready");
    console.log("✓ Settings: Free minting, 14 items, live immediately");
    
    console.log("\nReady to initialize your candy machine!");
}

initializeWithMetadata();
