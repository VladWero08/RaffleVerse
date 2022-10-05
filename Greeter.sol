// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

// Import SafeMath online
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/master/contracts/utils/math/SafeMath.sol";

contract Lottery { 
    using SafeMath for uint256;

    // event & emit

    uint public insecureRandomness = 26;
    // name of the raffle
    string lotteryName;
    // public address of the owner
    address public owner;
    // participants list
    address payable[] public players;
    struct lotHist {
        string lotName;
        uint lotDate;
        address payable firstPlace;
        address payable secondPlace;
    } 
    // public registry where the raffles will be hold
    lotHist [] public lotteryHistory;

    constructor() {
        owner = msg.sender;
        lotteryName = "";
    }

    function enter() public payable{
        // return a length function in order to see how long is the input
        // NOTE! You can read untild an error occurs

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
        // send the rest to the owner
        return address(this).balance.div(100).mul(70) + address(this).balance.div(100).mul(25) + address(this).balance.div(100).mul(5);
    }

    function finalizareTombola() public {
        uint firstIndex = getRandomNumber() % players.length;

        // get 70% of the raffle value
        players[firstIndex].transfer(address(this).balance.div(100).mul(70));

        uint secondIndex = getRandomNumber() % (players.length);
        if( firstIndex == secondIndex){
            while( firstIndex == secondIndex) {
                secondIndex = getRandomNumber() % (players.length);
            }
        }

        players[secondIndex].transfer(address(this).balance.div(100).mul(25));
        // send the rest of 5% to the owner of the lottery
        payable(owner).transfer(address(this).balance);
        
        lotteryHistory.push(lotHist(lotteryName, block.timestamp, players[firstIndex], players[secondIndex]));

        // reset the variables so you can create new raffles
        players = new address payable[](0);
        lotteryName = "";
    }

    // ownable library
    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }
}
