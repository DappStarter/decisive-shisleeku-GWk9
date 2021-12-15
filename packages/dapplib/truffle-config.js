require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind home harvest opinion bone slide'; 
let testAccounts = [
"0x12905b0bb998cff3610426e42b7a7607f872be7c3995cedbead48df1e0241d51",
"0xcf3aae869f82eb98b5ab3ab7633ad8bb537f76100bfb32721caa916c4c076996",
"0x7318fcb8c27407793697d388a87ede2e1890c2aa688df2884e74aa75034377d1",
"0xb02e56c3cbf8245697831398846336d59f784c85f214af7f3d527c4debc6f480",
"0xe7a0598c6aa4664fbd4f14ed145267bfea21fecb8c60945a591e44e366e319b8",
"0x1dd091a0a5c87e270f91e87a7fadf5be862c3226c7a1d49815b67986be7a0704",
"0xe3d378f812295bd43afcda868d30d8aa9867e5aa1c45c32a83da708250584357",
"0x03a0a0e8c370e0b1629f33e01c1daef92adb03d22da8c6b7089732fe6a674f2e",
"0x51e961caf586f0eea1895c01311d5ebb762980459726c117aeb18589f6e8ebb2",
"0x3ba74905a8915b2d18cd5e4a9b81b27a38c902d348f88776989725a6ac62c307"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

