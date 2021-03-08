exports.handler = function (context, event, callback) {
  const response = new Twilio.Response();
  response.appendHeader("Access-Control-Allow-Origin", "*");
  response.appendHeader("Content-Type", "application/json");
  response.setBody({
    accountSid: context.ACCOUNT_SID,
    flexFlowSid: context.FLEX_FLOW_SID,
  });
  callback(null, response);
};
