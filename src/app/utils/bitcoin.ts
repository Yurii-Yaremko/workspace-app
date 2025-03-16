export const ONE_BTC = 100000000;

export const formatBTCAmount = (amount: number): string => amount.toFixed(8);

export const calculateTotalAmount = (outputs: any[]): number => {
  return outputs.reduce((sum: number, output: any) => sum + output.value, 0) / ONE_BTC;
};

export const formatAddress = (address: string, maxLength: number = 20): string => {
  return address.length > maxLength ? `${address.slice(0, maxLength)}...` : address;
};