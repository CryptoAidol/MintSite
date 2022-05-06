export type Web3State = {
    provider: any
    web3Provider: ethers.providers.Web3Provider | null | undefined
    address: string | null | undefined
    network: ethers.providers.Network | null | undefined
}

export const web3InitialState: Web3ProviderState = {
    provider: null,
    web3Provider: null,
    address: null,
    network: null,
  }