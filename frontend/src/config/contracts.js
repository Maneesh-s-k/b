export const CONTRACT_ADDRESSES = {
  carbonCreditToken: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
  marketplace: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
  carbonCreditVerifier: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  transferVerifier: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
};

export const NETWORK_CONFIG = {
  chainId: 31337,
  name: 'Hardhat Local',
  rpcUrl: 'http://127.0.0.1:8545',
};

export const SUPPORTED_NETWORKS = {
  31337: {
    name: 'Hardhat Local',
    rpcUrl: 'http://127.0.0.1:8545',
    blockExplorer: null,
  },
  11155111: {
    name: 'Sepolia Testnet',
    rpcUrl: 'https://sepolia.infura.io/v3/YOUR_INFURA_KEY',
    blockExplorer: 'https://sepolia.etherscan.io',
  }
};
