class I18N_PROPS {
  constructor(locale = "en") {
    this.locale = locale;
    this.preEngagementConfig = {
      en: {
        description: "Please provide some information",
        fields: [
          {
            label: "What is your name?",
            type: "InputItem",
            attributes: {
              name: "friendlyName",
              type: "text",
              placeholder: "Jeff Lowson",
              required: true,
            },
          },
          {
            label: "What is your question?",
            type: "TextareaItem",
            attributes: {
              name: "question",
              type: "text",
              placeholder: "I forgot my password.",
              required: true,
              rows: 5,
            },
          },
        ],
        submitLabel: "OK Let's GO!",
      },
      ja: {
        description: "以下の情報をご記入ください",
        fields: [
          {
            label: "お名前",
            type: "InputItem",
            attributes: {
              name: "friendlyName",
              type: "text",
              placeholder: "山田 太郎",
              required: true,
            },
          },
          {
            label: "ご質問内容",
            type: "TextareaItem",
            attributes: {
              name: "question",
              type: "text",
              placeholder: "パスワードがわかりません",
              required: true,
              rows: 5,
            },
          },
        ],
        submitLabel: "チャットを開始",
      },
    };
    this.stringTemplate = {
      en: {
        EntryPointTagline: "Chat with us",
        MessageCanvasTrayContent: `
                <h6>Thanks for chatting with us!</h6>
                <p>If you have any more questions please reach out to us again.</p>`,
        MessageCanvasTrayButton: "START NEW CHAT",
        InvalidPreEngagementMessage:
          "Pre-engagement forms have not been set and are required to initiate the web-chat. " +
          "Please configure these now in setup.",
        InvalidPreEngagementButton: "Learn more",
        PredefinedChatMessageAuthorName: "Bot",
        PredefinedChatMessageBody: "Hi there! How can we help you today?",
        InputPlaceHolder: "Type message",
        TypingIndicator: "{{name}} is typing ... ",
        Read: "Read",
        MessageSendingDisabled: "Message sending has been disabled",
        Today: "TODAY",
        Yesterday: "YESTERDAY",
        WelcomeMessage: "Welcome to customer service",
        Save: "SAVE",
        Reset: "RESET",
        MessageCharacterCountStatus: "{{currentCharCount}} / {{maxCharCount}}",
        SendMessageTooltip: "Send Message",
        FieldValidationRequiredField: "Field required",
        FieldValidationInvalidEmail: "Please provide a valid email address",
      },
      ja: {
        EntryPointTagline: "チャットで問い合わせ",
        MessageCanvasTrayContent: `
            <h6>ありがとうございました</h6>
            <p>もし何かご質問がございましたら、再度ご連絡ください。</p>`,
        MessageCanvasTrayButton: "新しいチャットを始める",
        InvalidPreEngagementMessage:
          "事前のエンゲージメントフォームが設定されておらず、ウェブチャットを開始するために必要となります。 " +
          "これらの設定はセットアップで行ってください。",
        InvalidPreEngagementButton: "詳しくみる",
        PredefinedChatMessageAuthorName: "ボット",
        PredefinedChatMessageBody: "こんにちは！何かお手伝いが必要ですか？",
        InputPlaceHolder: "メッセージをどうぞ",
        TypingIndicator: "{{name}} がタイピング中 ... ",
        Read: "既読",
        MessageSendingDisabled: "メッセージ送信が無効になりました",
        Today: "本日",
        Yesterday: "昨日",
        WelcomeMessage: "ようこそ、Twilio Flex チャットへ",
        Save: "保存",
        Reset: "リセット",
        MessageCharacterCountStatus: "{{currentCharCount}} / {{maxCharCount}}",
        SendMessageTooltip: "メッセージを送信",
        FieldValidationRequiredField: "必須フィールドです",
        FieldValidationInvalidEmail: "正しいメールアドレスを入力してください",
      },
    };
    this.headerTitle = {
      en: {
        titleText: "Twilio Flex Chat",
      },
      ja: {
        titleText: "Flex チャット",
      },
    };
  }

  get PRE_ENGAGEMENT_CONFIG() {
    return this.preEngagementConfig[this.locale];
  }
  get STRING_TEMPLATE() {
    return this.stringTemplate[this.locale];
  }
  get HEADER_TITLE() {
    return this.headerTitle[this.locale];
  }
}
