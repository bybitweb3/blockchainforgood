import { useMemo } from "react";

export enum SocialLinksEnum {
  OTHER = 0,
  WEBSITE = 1,
  GITHUB = 2,
  DISCORD = 3,
  TWITTER = 4,
  TELEGRAM = 5,
  LINKEDIN = 6,
  WECHAT = 7,
  WALLET = 8,
}

export const SocialLinksEnumValue = {
  [SocialLinksEnum.DISCORD]: {
    text: "discord",
  },
  [SocialLinksEnum.GITHUB]: {
    text: "github",
  },
  [SocialLinksEnum.LINKEDIN]: {
    text: "linkedin",
  },
  [SocialLinksEnum.WEBSITE]: {
    text: "website",
  },
  [SocialLinksEnum.TELEGRAM]: {
    text: "telegram",
  },
  [SocialLinksEnum.TWITTER]: {
    text: "twitter",
  },
  [SocialLinksEnum.WECHAT]: {
    text: "wechat",
  },
};

export type SocialLinksEntity = {
  id: number; // id
  link: string; // link
  type: SocialLinksEnum; // type
  show: any; // show
  updateDate: string; // 更新时间
};

export const useGetLink = (links: SocialLinksEntity[]) => {
  return useMemo(() => {
    const link = links?.reduce((pre, next) => {
      return { ...pre, [next.type]: next?.link };
    }, {}) as any;
    const website = link?.[SocialLinksEnum?.WEBSITE];
    if (website) {
      return website.startsWith("http") ? website : `https://${website}`;
    }
    let twitter = link?.[SocialLinksEnum?.TWITTER];
    if (!twitter)
      return (
        Object.keys(SocialLinksEnumValue)?.find((item) => link[item]) || null
      );
    if (twitter?.startsWith("@")) {
      twitter = twitter?.substring(1); // Remove the '@' symbol
    }
    if (twitter?.startsWith("https://") || twitter?.startsWith("http://")) {
      return twitter;
    } else {
      return `https://x.com/${twitter}`;
    }
  }, []);
};
