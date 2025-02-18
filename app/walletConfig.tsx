'use client'

// App.tsx
import { createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaDevnet, solanaTestnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})

// 1. Get projectId from https://cloud.reown.com
const projectId = 'a7a10cf7d9423ddd0cf1f4c013e01bfc'

if (!projectId) {
  throw new Error('Project Id is not defined')
}

// 2. Create a metadata object - optional
const metadata = {
  name: 'project_demo',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 3. Create modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana],
  metadata: metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})
