import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia, sonicBlazeTestnet, sonic} from 'wagmi/chains';
import { http } from 'wagmi';

export const config = getDefaultConfig({
  appName: 'Your App Name',
  projectId: '25eff117c155377330cc02421d6ff95c', // Get one at https://cloud.walletconnect.com
  chains: [mainnet, sepolia, sonicBlazeTestnet, sonic],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [sonicBlazeTestnet.id]: http(),
    [sonic.id]: http()
  },
});