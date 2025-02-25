import {
  EventsRoleValue,
  OrganizationEntity,
  TagEntity,
  UserEntity,
} from "../square/types";

export type EventsEntity = {
  approve: number; // 是否审核通过
  id: string; // id
  name: string; // 事件名称
  cover: string; // 封面图片链接
  code: string; // code
  location: string; // JSON String {"area":"广东省深圳市xxxxxxxx","country":9706961,"latlng":[92.56674288364302,27.75499018811039]}
  assets: string; // 事件的其他图片资源，JSON String [image1, image2, image3]
  intro: string; // 事件简介
  isNeedApproveUser: number; // 是否需要该事件的管理员审核通过用户的报名，还是直接就可以参加该事件
  isNeedApproveProject: number; // 是否需要该事件的管理员审核通过用户的报名，还是直接就可以参加该事件
  isNeedApproveJudge: number; // 是否需要该事件的管理员审核通过用户的报名，还是直接就可以参加该事件
  online: number; // 线上还是线下事件
  categorys: EventsCategoryValue; // 事件的分类，有Demoday Learner Hackthon等
  classs: IEventClassValue; // 也是类别，只不过是Moledao内部举行的还是Moledao支持的的或者外部举办的
  settle: number; // 是否已结算创建应有的积分， 0： 未结算 1: 已结算
  diyform: string; // diyform
  link: string; // 报名链接
  links: string; // 事件外链
  stimestampms: number; // start timestamp
  etimestampms: number; // end timestamp
  content: any; // ContentEntity
  tags: TagEntity[]; // undefined
  belonging: OrganizationEntity; // undefined
  timelines: any[]; // TimelineEntity
  courses: any[]; // CourseEntity
  poaps: any[]; // PoapEntity
  eventApproves: EventsApproveEntity[]; // undefined
  scoreForms: any[]; // ScoreFormsEntity
  updateDate: string; // 更新时间
};
export type EventsApproveEntity = {
  approve: number; // 是否审核通过
  id: string; // id
  reason: string; // reason
  diyform: string; // diyform
  diyimage: string; // JSON String {\"url\":\"/organization/b8849ad23dea4cae8d89ca4910ca38c7.jpeg\",\"style\":{\"transform\":\"scale(0.89)\",\"backgroundColor\":\"#ffffff\"}}
  checkin: any; // checkin
  type: EventsRoleValue; // 参与类别
  sort: number; // sort
  organization: OrganizationEntity; // undefined
  event: EventsEntity; // undefined
  user: UserEntity; // undefined
  referer: string; // referer 谁邀请来参加这个活动或报名的
  updateDate: string; // 更新时间
  auditDate: string; // 审核时间
};
export enum IEventClassValue {
  MOLEDAO = 0,
  SUPPORT = 1,
  OTHER = 2,
  BGA = 3,
}
export enum ApproveValue {
  /** 未审核 */
  NOT_SUBMITTED = 0,
  /** 批准 */
  APPROVED = 1,
  /** 拒绝 */
  REJECTED = 2,
  /* 已提交 */
  SUBMITTED = 3,
}
export enum EventsCategoryValue {
  /** 教育 */
  LEARNER = 1,
  /** 工作 */
  CAREER = 2,
  /** 黑客松 */
  HACKTHON = 3,
  /** demoday */
  DEMODAY = 4,
  /** workshop */
  WORKSHOP = 5,
  /** spotlight */
  SPOTLIGHT = 6,
  /** starter */
  STARTER = 7,
  /** 推特 space */
  TWITTER_SPACE = 8,
  EVENT = 9,
}
