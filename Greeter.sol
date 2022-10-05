// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

//Import SafeMath online
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/master/contracts/utils/math/SafeMath.sol";

contract Lottery { 
    using SafeMath for uint256;

    // event & emit

    uint public insecureRandomness = 26;
    //Numele tombolei
    string lotteryName;
    // Adresa publica a owner-ului
    address public owner;
    // Lista de jucatori
    address payable[] public players;
    struct lotHist {
        string lotName;
        uint lotDate;
        address payable firstPlace;
        address payable secondPlace;
    } 
    //Agenda in care se va pastra istoricul
    lotHist [] public lotteryHistory;

    constructor() {
        owner = msg.sender;
        lotteryName = "";
    }

    function enter() public payable{
        // returnez o functie cu length pentru a sti pana unde se citeste
        // ! poti citi pana la eroare

        require(msg.value == .001 ether);
        // address of player -> payable address
        players.push(payable(msg.sender));
    }

    function setLotteryName(string memory ownerLotName) public{
        lotteryName = ownerLotName;
    }

    function getWinnerByLottery(uint lot) public view returns (address payable){
        return lotteryHistory[lot].firstPlace;
    }

    function getBalance() public view returns (uint){
        return address(this).balance;
    }

    function getPlayers() public view returns (address payable[] memory){
        return players;
    }

    function getRandomNumber() public returns (uint){
        // block.timestamp, msg.data
        insecureRandomness++;
        return uint(keccak256(abi.encodePacked(insecureRandomness)));
    }

    function calcMath() public view returns (uint){
        // Trimit restul la owner
        return address(this).balance.div(100).mul(70) + address(this).balance.div(100).mul(25) + address(this).balance.div(100).mul(5);
    }

    function finalizareTombola() public {
        uint firstIndex = getRandomNumber() % players.length;

        // Calcule inainte de transfer
        players[firstIndex].transfer(address(this).balance.div(100).mul(70));

        uint secondIndex = getRandomNumber() % (players.length);
        if( firstIndex == secondIndex){
            while( firstIndex == secondIndex) {
                secondIndex = getRandomNumber() % (players.length);
            }
        }

        players[secondIndex].transfer(address(this).balance.div(100).mul(25));
        // Trimit restul in loc de 5%
        payable(owner).transfer(address(this).balance);
        
        lotteryHistory.push(lotHist(lotteryName, block.timestamp, players[firstIndex], players[secondIndex]));

        // resetam variabilele pentru a crea tombole noi
        players = new address payable[](0);
        lotteryName = "";
    }

    // Ownable library
    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }
}