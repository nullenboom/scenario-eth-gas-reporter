pragma solidity ^0.5.0;

contract AvgOnDemand {
   int256 sum;
   int256 count;
   
   function add(int256 n) public {
       sum += n;
       count++;
   }
    
   function calc() public returns (int256) {
       return sum / count;
   }
}




