/**
 * Deployment script for FlightDelay
 *
 * @author Christoph Mussenbrock
 * @description Deploy FlightDelayUnderwrite
 * @copyright (c) 2017 etherisc GmbH
 * 
 */

/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */


module.exports = function(deployer) {
  
	var controller = FlightDelayController.address;

	deployer.deploy(FlightDelayUnderwrite, controller, {value: web3.toWei(50, 'ether')}); 

};
