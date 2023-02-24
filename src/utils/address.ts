import { getAddress } from "@ethersproject/address";

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
    try {
      return getAddress(value);
    } catch {
      return false;
    }
  }

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 1): string {
    const parsed = isAddress(address);
    if (!parsed) {
      return "";
    }
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(39 - chars)}`;
  }
  