import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AidolFashion is ERC1155URIStorage, Ownable {

    mapping(uint => bool) private _hasTokenURI;    
    uint MINT_PRICE = 1 ether ;

    constructor() ERC1155 ("") {}
    
    function changeValue(uint value) public onlyOwner {
        MINT_PRICE = value;
    }

    function mint(uint tokenId, string memory _tokenURI) public payable{
        require(msg.value == MINT_PRICE, "Insufficient Value");
        if(!_hasTokenURI[tokenId]) {
            _setURI(tokenId, _tokenURI);
            _hasTokenURI[tokenId] = true;
        }
            _mint(msg.sender, tokenId, 1, "");
    }

    function magicalTransform() public {
        //CryptoAidolContractsのアドレスを入れて、ここで呼び出すイメージ
    }
}