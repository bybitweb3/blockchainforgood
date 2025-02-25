import { SocialLinksEntity } from "@/hooks"

export enum ApproveValue {
  /** 未审核 */
  NOT_SUBMITTED = 0,
  /** 批准 */
  APPROVED = 1,
  /** 拒绝 */
  REJECTED = 2,
  /* 已提交 */
  SUBMITTED = 3
}
export enum EventsRoleValue {
  /** 项目/组织 */
  PROJECT = 2,
  /** 个人 */
  PERSONAL = 3
}

export interface IGetListParams {
  approve: ApproveValue
  events: string
  roleType: EventsRoleValue,
  current: number
  pageSize?: number
}

export type TagEntity = {
  id: number; // id
  sort: number; // 标签排序
  name: string; // 名称
  pages: string; // 标签可用于哪些页面
  updateDate: string; // 更新时间
}

export type OrganizationEntity = {
  approve: number; // 是否审核通过
  id: string; // id
  name: string; // 组织
  logo: string; // Logo
  stage: number; // stage
  intro: string; // intro
  credit: number; // 积分
  address: string; // 钱包地址
  invitationCode: string; // invitationCode
  tags: TagEntity[]; // undefined
  createDate: string; // 创建时间
  updateDate: string; // 更新时间
  type: 0  | 1 | 2;
  links?: SocialLinksEntity[]; // undefined
  email: {
    email: string
  }
  location: string
}
export type UserEntity = {
  id: string; // id
  address: string; // 钱包地址
  avatar: string; // 头像url
  name: string; // username
  invitationCode: string; // invitationCode
  intro: string; // intro
  credit: number; // 积分
  ambassadorCredit: number; // 大使的积分
  tags: TagEntity[]; // undefined
  createDate: string; // 创建时间
  updateDate: string; // 更新时间
}

export type EventsApproveEntity = {
  approve: number; // 是否审核通过
  id: string; // id
  reason: string; // reason
  diyform: string; // diyform 
  diyimage: string;
  checkin: any; // checkin
  type: EventsRoleValue; // 参与类别
  sort: number; // sort
  organization: OrganizationEntity; // undefined
  user: UserEntity; // undefined
  referer: string; // referer 谁邀请来参加这个活动或报名的
  updateDate: string; // 更新时间
  auditDate: string; // 审核时间
}

export enum TabItem {
  ADVISORS = 'Advisors',
  PARTNERS = 'Partners',
  PROJECTS = 'Projects'
}