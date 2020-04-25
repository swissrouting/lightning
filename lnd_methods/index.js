const {addPeer} = require('./peers');
const {cancelHodlInvoice} = require('./invoices');
const {cancelPendingChannel} = require('./onchain');
const {createChainAddress} = require('./address');
const {createHodlInvoice} = require('./invoices');
const {createInvoice} = require('./invoices');
const {fundPendingChannels} = require('./onchain');
const {getAutopilot} = require('./info');
const {getBackup} = require('./offchain');
const {getChainBalance} = require('./onchain');
const {getChannel} = require('./info');
const {getChannelBalance} = require('./offchain');
const {getChannels} = require('./offchain');
const {getInvoice} = require('./invoices');
const {getNetworkCentrality} = require('./info');
const {getNode} = require('./info');
const {getPayment} = require('./offchain');
const {getPeers} = require('./peers');
const {getPendingChainBalance} = require('./onchain');
const {getRouteThroughHops} = require('./offchain');
const {getRouteToDestination} = require('./info');
const {getWalletInfo} = require('./info');
const {getWalletVersion} = require('./info');
const {openChannels} = require('./onchain');
const {payViaPaymentDetails} = require('./offchain');
const {payViaPaymentRequest} = require('./offchain');
const {payViaRequest} = require('./offchain');
const {payViaRoutes} = require('./offchain');
const {setAutopilot} = require('./onchain');
const {settleHodlInvoice} = require('./invoices');
const {subscribeToForwards} = require('./offchain');
const {subscribeToInvoice} = require('./invoices');
const {subscribeToInvoices} = require('./invoices');
const {subscribeToPastPayment} = require('./offchain');
const {subscribeToPayViaDetails} = require('./offchain');
const {subscribeToPayViaRequest} = require('./offchain');
const {subscribeToPayViaRoutes} = require('./offchain');
const {subscribeToProbeForRoute} = require('./offchain');

module.exports = {
  addPeer,
  cancelHodlInvoice,
  cancelPendingChannel,
  createChainAddress,
  createHodlInvoice,
  createInvoice,
  fundPendingChannels,
  getAutopilot,
  getBackup,
  getChainBalance,
  getChannel,
  getChannelBalance,
  getChannels,
  getInvoice,
  getNetworkCentrality,
  getNode,
  getPayment,
  getPeers,
  getPendingChainBalance,
  getRouteThroughHops,
  getRouteToDestination,
  getWalletInfo,
  getWalletVersion,
  openChannels,
  payViaPaymentDetails,
  payViaPaymentRequest,
  payViaRequest,
  payViaRoutes,
  setAutopilot,
  settleHodlInvoice,
  subscribeToForwards,
  subscribeToInvoice,
  subscribeToInvoices,
  subscribeToPastPayment,
  subscribeToPayViaDetails,
  subscribeToPayViaRequest,
  subscribeToPayViaRoutes,
  subscribeToProbeForRoute,
};
