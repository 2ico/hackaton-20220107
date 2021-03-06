// TonWeb is JavaScript SDK (Web and NodeJS) for TON

const TonWeb = require("tonweb");

// For calculations in the blockchain, we use BigNumber (BN.js). https://github.com/indutny/bn.js
// Don't use regular {Number} for coins, etc., it has not enough size and there will be loss of accuracy.

const BN = TonWeb.utils.BN;

// Blockchain does not operate with fractional numbers like `0.5`.
// `toNano` function converts TON to nanoton - smallest unit.
// 1 TON = 10^9 nanoton; 1 nanoton = 0.000000001 TON;
// So 0.5 TON is 500000000 nanoton

const toNano = TonWeb.utils.toNano;

const providerUrl = 'https://testnet.toncenter.com/api/v2/jsonRPC'; // TON HTTP API url. Use this url for testnet
const apiKey = ''; // Obtain your API key in https://t.me/tontestnetapibot
const tonweb = new TonWeb(new TonWeb.HttpProvider(providerUrl, {apiKey})); // Initialize TON SDK

// New secret key can be generated by `tonweb.utils.newSeed()`
seedA = tonweb.utils.newSeed(); // Uint8Array
seedB = tonweb.utils.newSeed(); // Uint8Array

seedA_b64 = TonWeb.utils.bytesToBase64(seedA)
seedB_b64 = TonWeb.utils.bytesToBase64(seedB)

console.log(seedA_b64, seedB_b64)
