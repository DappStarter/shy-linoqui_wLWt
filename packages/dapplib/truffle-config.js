require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure sugar notice dash shift pudding coral light army gentle'; 
let testAccounts = [
"0x957f1a2343b8ff893a14d4a810994a24d4402cb9b5a481b3b9f25688d1561168",
"0x85aabae0a20464decc3ca59abf618dd69ac352e30897b347bf5eb076a23a249c",
"0x20742602305df9322506b6d82f194ea54224f3c62f0e1f47172555952d4dcd30",
"0x2864867a4902d4cbfd62533aa261bfe120173276d7d0c467aba51737049b6c9e",
"0xabbf1650ab8ed117bcbf368c91ea790df4104084cac7f2b2ef1503d8dc53c187",
"0x895c323b7528e568ec4ae32e7f2f7793cb5017cc21b44882b29eded9b722877e",
"0x7ea20058d5ce8f6988baf05c043c49b4961091484893707a3e1d5fec392d71a9",
"0xbc2eef48695070e7e05c6b42de4cd4db4a583d996d1ae427089920cdb1237469",
"0x37e9e5504f603e7e25977b477cb9acf656b530ae9506fdf063ee4e9de99c042c",
"0x1d8f6946f0b7e4327ecad7fc01239cecb6f5cdf772cbffcaaef97aadcbb2a9b6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

