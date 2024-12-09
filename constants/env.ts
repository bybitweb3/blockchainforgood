export enum ENetwork {
  PRODUCTION = "production",
  STAGING = "staging",
  DEVELOPMENT = "development",
  ZFDEV = "zfdev",
}

export const BGA_ENV = (process.env.NEXT_PUBLIC_BGA_ENV ||
  ENetwork.PRODUCTION) as ENetwork;

export const BGA_HOST_URL = {
  [ENetwork.PRODUCTION]: "https://www.blockchainforgood.xyz",
  [ENetwork.DEVELOPMENT]: "http://localhost:3000",
  [ENetwork.STAGING]: "https://test.blockchainforgood.xyz",
  [ENetwork.ZFDEV]: "http://localhost:3000",
}[BGA_ENV];

export const BASE_URL = {
  [ENetwork.PRODUCTION]: "https://api.moledao.io",
  [ENetwork.DEVELOPMENT]: "https://beta.moledao.io",
  [ENetwork.STAGING]: "https://beta.moledao.io",
  [ENetwork.ZFDEV]: "http://localhost:8080",
}[BGA_ENV];

// 资源的base url
export const ASSETS_URL = {
  [ENetwork.PRODUCTION]: "https://api.moledao.io/assets",
  [ENetwork.DEVELOPMENT]: "https://beta.moledao.io/assets",
  [ENetwork.STAGING]: "https://beta.moledao.io/assets",
  [ENetwork.ZFDEV]: "https://beta.moledao.io/assets",
}[BGA_ENV];

// 表单的iframe页面url
export const MOLEDAO_IFRAME_URL = {
  [ENetwork.PRODUCTION]: "https://www.moledao.io",
  [ENetwork.DEVELOPMENT]: "https://beta.moledao.io",
  [ENetwork.STAGING]: "https://beta.moledao.io",
  [ENetwork.ZFDEV]: "http://localhost:5173",
}[BGA_ENV];

// 顾问的title的itemkey
export const ADVISOR_TITLE_ITEMKEY = {
  [ENetwork.PRODUCTION]: "itemkey1363983",
  [ENetwork.DEVELOPMENT]: "itemkey1363983",
  [ENetwork.STAGING]: "itemkey1363983",
  [ENetwork.ZFDEV]: "itemkey7596123",
}[BGA_ENV];

// 合作伙伴事件
export const PARTNER_EVENT_ID = {
  [ENetwork.PRODUCTION]: "230ac677-083f-4240-8f61-6a3e0d504ffd",
  [ENetwork.DEVELOPMENT]: "230ac677-083f-4240-8f61-6a3e0d504ffd",
  [ENetwork.STAGING]: "230ac677-083f-4240-8f61-6a3e0d504ffd",
  [ENetwork.ZFDEV]: "972ac263-0dd9-43cc-97d0-ea7fbe7477f5",
}[BGA_ENV];

// 孵化活动
export const INCUBATION_EVENT_ID = {
  [ENetwork.PRODUCTION]: "79e37236-cdf8-41ef-9337-cfcb7a4e777e",
  [ENetwork.DEVELOPMENT]: "79e37236-cdf8-41ef-9337-cfcb7a4e777e",
  [ENetwork.STAGING]: "79e37236-cdf8-41ef-9337-cfcb7a4e777e",
  [ENetwork.ZFDEV]: "b20ff37a-c94c-4165-9352-fd9667fa5a45",
}[BGA_ENV];

// Oscar 黑客松 ceremony
export const OSCAR_EVENT_ID = {
  [ENetwork.PRODUCTION]: "f7c032b2-5483-4c29-835c-2f399295ac6a",
  [ENetwork.DEVELOPMENT]: "f7c032b2-5483-4c29-835c-2f399295ac6a",
  [ENetwork.STAGING]: "f7c032b2-5483-4c29-835c-2f399295ac6a",
  [ENetwork.ZFDEV]: "5307fa79-c89e-4baf-9651-4622ac740baa",
}[BGA_ENV];

// 奥斯卡黑客松事件ID
export const OSCAR_HACKTHON_EVENT_ID = {
  [ENetwork.PRODUCTION]: "bd238aa5-9005-4165-bdcb-8e88e6ef9be0",
  [ENetwork.DEVELOPMENT]: "bd238aa5-9005-4165-bdcb-8e88e6ef9be0",
  [ENetwork.STAGING]: "bd238aa5-9005-4165-bdcb-8e88e6ef9be0",
  [ENetwork.ZFDEV]: "e4adc0cc-947d-48a7-908b-bde29e52f0ce",
}[BGA_ENV];

export const OSCAR_CONTRIBUTION_AWARD_EVENT_ID = {
  [ENetwork.PRODUCTION]: "72b1661e-19df-47de-b3ed-d8aaad84aba4",
  [ENetwork.DEVELOPMENT]: "72b1661e-19df-47de-b3ed-d8aaad84aba4",
  [ENetwork.STAGING]: "72b1661e-19df-47de-b3ed-d8aaad84aba4",
  [ENetwork.ZFDEV]: "72b1661e-19df-47de-b3ed-d8aaad84aba4",
}[BGA_ENV];

// 黑客松申请事件
export const HACKTHON_APPLY_EVENT_ID = {
  [ENetwork.PRODUCTION]: "38111ab6-907e-4781-b30d-bdeed52d2260",
  [ENetwork.DEVELOPMENT]: "38111ab6-907e-4781-b30d-bdeed52d2260",
  [ENetwork.STAGING]: "38111ab6-907e-4781-b30d-bdeed52d2260",
  [ENetwork.ZFDEV]: "e13993b6-1a72-4db1-9b58-d7adca1389f4",
}[BGA_ENV];

// Oscar投票id
export const OSCAR_VOTE_ID = {
  [ENetwork.PRODUCTION]: "7",
  [ENetwork.DEVELOPMENT]: "7",
  [ENetwork.STAGING]: "7",
  [ENetwork.ZFDEV]: "2",
}[BGA_ENV];

export const ONSITE_VOTE_ID = {
  [ENetwork.PRODUCTION]: "19",
  [ENetwork.DEVELOPMENT]: "19",
  [ENetwork.STAGING]: "19",
  [ENetwork.ZFDEV]: "19",
}[BGA_ENV];

// BGA的一些特殊事件，有些地方的list需要过滤掉他们
export const BGA_SPECIAL_EVENT = [
  PARTNER_EVENT_ID,
  INCUBATION_EVENT_ID,
  OSCAR_EVENT_ID,
  OSCAR_HACKTHON_EVENT_ID,
  HACKTHON_APPLY_EVENT_ID,
];
