pragma solidity ^0.5.0;

contract ParityBinaryTwo {
	bool state;
    
 function checkParity(int256 n, int256 m) public {
        state = (n & 0x01) == (m & 0x01);
   }
   
}
