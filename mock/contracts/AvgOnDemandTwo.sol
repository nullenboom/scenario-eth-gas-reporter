pragma solidity ^0.5.0;

contract AvgOnDemandTwo {
   int256 sum;
   int256 count;
   int256 avg;

   function add(int256 n) public {
       sum = sum + n;
       count = count + 1;
	   avg = sum / count;
   }
   
  function calc() public returns (int256) {
       return avg;
   }
}




