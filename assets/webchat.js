(async () => {
  "use strict";

  const WebChat = Twilio.FlexWebChat;
  const i18n = new I18N_PROPS("en"); // 'en' or 'ja'

  // Get environment variables via Functions
  const axiosConfig = {
    method: "POST",
    url: "./config",
    headers: {
      "Content-Type": "application/json",
    },
    data: {},
  };
  let accountSid, flexFlowSid;
  await axios(axiosConfig)
    .then((res) => {
      const json = res.data;
      accountSid = json.accountSid || "";
      flexFlowSid = json.flexFlowSid || "";
    })
    .catch((err) => {
      console.error(err);
      return false;
    });

  const appConfig = {
    accountSid: accountSid,
    flexFlowSid: flexFlowSid,
    startEngagementOnInit: false,
    preEngagementConfig: i18n.PRE_ENGAGEMENT_CONFIG,
  };
  // Object.assign(appConfig.preEngagementConfig, i18n.PRE_ENGAGEMENT_CONFIG);

  // Chat window configuration
  const mainHeaderProps = {
    titleText: i18n.HEADER_TITLE.titleText,
    closeCallback: () => {
      console.log(`closeChatWindow`);
      WebChat.Actions.invokeAction("MinimizeChat");
    },
  };
  Object.assign(WebChat.MainHeader.defaultProps, mainHeaderProps);

  // Label for chat button
  const entryPointProps = WebChat.EntryPoint.defaultProps;
  entryPointProps.tagline = i18n.ENTRY_POINT.tagline;

  // Use pre-engagement form
  const messagingCanvasProps = {
    predefinedMessage: false,
  };
  Object.assign(WebChat.MessagingCanvas.defaultProps, messagingCanvasProps);

  WebChat.createWebChat(appConfig).then((webchat) => {
    const { manager } = webchat;

    //Posting question from preengagement form as users first chat message
    WebChat.Actions.on("afterStartEngagement", (payload) => {
      const { question } = payload.formData;
      if (!question) return;

      const { channelSid } = manager.store.getState().flex.session;
      manager.chatClient
        .getChannelBySid(channelSid)
        .then((channel) => channel.sendMessage(question));
    });

    // Changing string template
    Object.assign(manager.strings, i18n.STRING_TEMPLATE);

    // Render WebChat
    webchat.init();
  });
})();
