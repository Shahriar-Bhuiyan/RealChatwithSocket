import chat from "../pages/chat";

export const Samplechats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Don",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Shahriar Bhuiyan",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];


export const SampleUser = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Don",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Don",
    _id: "2",
  },
];


export const sampleNotificaiton = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Shahriar Bhuiyan",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Shagufta Akter Mahek",
    },
    _id: "2",
  },
];



export const SampleMessage = [
  {
    attachments: [
      {
        public_id: "Sha48",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Hello Mera Bhau",
    _id: "123344222",
    sender: {
      _id: "1212",
      name: "Shahriar",
    },
    chat: "chatId",
    createdAt: "2025-02-12T10:41:30",
  },

  {
    attachments: [
      {
        public_id: "Sha48",
        // url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Hello Mera Bhau",
    _id: "123344222",
    sender: {
      _id: "2020",
      name: "Shagufta",
    },
    chat: "chatId",
    createdAt: "2025-02-12T10:41:30",
  },

  {
    attachments: [
      {
        public_id: "Sha48",
        // url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Amar choto pakhi",
    _id: "123344222",
    sender: {
      _id: "1212",
      name: "Shahriar",
    },
    chat: "chatId",
    createdAt: "2025-02-12T10:41:30",
  },
];