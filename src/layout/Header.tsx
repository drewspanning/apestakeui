import { Button, HStack, Text } from "@chakra-ui/react";
import {
  // Mainnet,
  shortenAddress,
  useEthers,
  useLookupAddress,
} from "@usedapp/core";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();
  const { ens } = useLookupAddress(account);

  const connect = async () => {
    // await switchNetwork(Mainnet.chainId);
    activateBrowserWallet();
  };

  return (
    <HStack as="header" width="full" justify="space-around" align="center">
      <Text>{account ? ens ?? shortenAddress(account) : "Not logged in"}</Text>
      <HStack>
        {account ? (
          <Button onClick={deactivate}>Disconnect Wallet</Button>
        ) : (
          <Button onClick={connect}>Connect Wallet</Button>
        )}
        <ThemeToggle />
      </HStack>
    </HStack>
  );
};

export default Header;
