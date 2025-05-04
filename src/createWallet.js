//importando as dependências
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//definir a rede
//bitcoin - se for rede principal(mainnet)
//testnet - se for rede de testes(testnet)
const network = bitcoin.networks.testnet

//derivação de carteiras HD(Hierarct Deterministic)
const path = `m/49'/1'/0'/0`

//Criando o Mnemônico para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//Criando a raíz da carteira HD
let root = bip32.fromSeed(seed,network) 

//Criando uma conta - par de pvt e pub keys
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2wpkh({
    pubkey: node.publicKey,
    network: network,

}).address

console.log("Carteira Gerada com Sucesso!")
console.log("Endereço: ", btcAddress)
console.log("Chave Privada: ", node.toWIF());    
console.log("Seed: ", mnemonic )