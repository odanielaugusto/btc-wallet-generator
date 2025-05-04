<h1 align="center">⚡ Bitcoin HD Wallet — Projeto Acadêmico em Node.js ⚡</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow" alt="project-status"/>
  <img src="https://img.shields.io/badge/Stack-Node.js%20%7C%20TypeScript%20%7C%20BitcoinJS-brightgreen"/>
  <img src="https://img.shields.io/badge/License-MIT-blue"/>
</p>

> **Resumo**  
> Este repositório demonstra, de forma didática, como gerar carteiras **Hierarchical Deterministic (HD)** de Bitcoin utilizando os padrões **BIP‑39** e **BIP‑32** com a biblioteca **bitcoinjs‑lib**. O código foi escrito e documentado como projeto pessoal de um estudante de **Engenharia de Software** com foco em vagas de estágio na área de **blockchain**.

---

## ✨ Motivação

Ao estudar blockchain percebi que muitos tutoriais se limitam a “copiar e colar” scripts prontos, sem explicar o “porquê” das coisas.  
Criei este projeto para:

1. **Consolidar conceitos** de criptografia, BIPs e carteiras HD.  
2. **Expor meu processo de aprendizagem**
3. **Gerar um portfolio** 

---

## 🚀 Funcionalidades

| Status | Módulo | Descrição |
|:-:|---|---|
| ✅ | **Seed Generator** | Cria frases de 12 palavras (BIP‑39) com `bip39.generateMnemonic()` |
| ✅ | **HD Derivation** | Constrói a árvore de chaves (BIP‑32) e exporta até 10 endereços na testnet |
| ✅ | **Address Explorer** | Script que consulta o saldo de cada endereço via API Blockstream |
| ⏳ | **Transaction Builder** | Assinatura e broadcast de transações na testnet com `bitcoinjs-lib` |


---

## 🛠️ Stack Técnica

| Tecnologia | Papel |
|---|---|
| **Node.js  + JavaScript** | Ambiente de execução e tipagem estática |
| **bitcoinjs‑lib** | Geração de chaves, endereços e transações |
| **bip39 / bip32** | Implementações das BIPs oficiais 
---

## 📂 Estrutura do Projeto

```text
.
├── src
│   ├── createWallet.js     

```

---

## ⚡ Hands‑on: executando localmente

```bash
# 1. clone
git clone https://github.com/odanielaugusto/btc-wallet-generator
cd btcwallet

# 2. dependências
npm i

# 3. run
node createWallet.js
```

Saída esperada:

```text
Carteira Gerada com Sucesso!
Endereço: xxxxxxxxxxxxxxxxxxxxx
Chave Privada: xxxxxxxxxxxxxxxxxxxxxx
Seed: xxxxxxxxxxxxxxxxxxxx
```

> **Dica**: Use um *faucet* de testnet para enviar bitcoin falsos e teste.

---

## 🧠 Principais Aprendizados

1. **Criptografia aplicada**: como *hash* + *HMAC‑SHA512* produzem a “árvore” HD.  
2. **Segurança**: por que guardar o *mnemonic* offline e nunca commitar `.env` com chaves.  




---

<p align="center"><i>“Unlocking cryptography, one commit at a time.”</i><br/>
Made with ☕ + 💻 by <b>Um estudante de Engenharia de Software</b></p>
