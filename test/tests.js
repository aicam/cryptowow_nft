import {expect} from "chai";

describe("NFTMarketplace", () => {
  let deployer, nft;
  beforeEach(async () => {
    const NFT = await ethers.getContractFactory("NFT");
    [deployer] = await ethers.getSigners();

    nft = await NFT.deploy();
  });
  describe("Deployment ", () => {
    it("Track NFT name & symbol", async () => {
      expect(await nft.name()).to.equal("DecentraWoW NFT");
      expect(await nft.symbol()).to.equal("DAPP")
    });
  });
});