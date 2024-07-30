import { Component } from '@angular/core';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
} from '@web3modal/wagmi';
import { mainnet } from '@wagmi/core/chains';

//INSERT WALLETCONNECT PROJECT ID
const WALLET_CONNECT_PROJECT_ID = '';

const config = defaultWagmiConfig({
  chains: [mainnet],
  projectId: WALLET_CONNECT_PROJECT_ID,
  metadata: {
    name: 'Html Example',
    description: 'Html Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  },
  enableInjected: true,
  enableWalletConnect: true,
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  modal: Web3Modal;
  constructor() {
    {
      this.modal = createWeb3Modal({
        wagmiConfig: config,
        projectId: WALLET_CONNECT_PROJECT_ID,
        themeMode: 'light',
      });
    }
  }

  connectWallet() {
    this.modal.open();
  }
}
