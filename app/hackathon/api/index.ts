import { http } from "@/lib";
import { IPageData } from "@/app/news/types";
import useSWR from "swr";
import {
  EventsEntity,
  EventsCategoryValue,
  IEventClassValue,
  ApproveValue,
  EventsApproveEntity,
} from "../types";
import { BGA_SPECIAL_EVENT } from "@/constants/env";
import { EventsRoleValue } from "@/app/square/types";
import { cursorTo } from "readline";

const API_PATH = {
  GET_LIST: "/events/list",
  GET_EVENT_DETAIL: "/events/details",
  GET_EVENT_APPROVE_LIST: "/eventApprove/list",
};

export function useAPIGetList() {
  const url = API_PATH.GET_LIST;
  const querys = {
    page: 1,
    pageSize: 100,
    approve: ApproveValue.APPROVED,
    classs: IEventClassValue.BGA,
    category: EventsCategoryValue.HACKTHON,
  };

  const fetcher = async () => {
    const response = (await http.get(API_PATH.GET_LIST, {
      params: querys,
    })) as IPageData<EventsEntity>;

    response.list = response.list.filter(
      (item: EventsEntity) => !BGA_SPECIAL_EVENT?.includes(item?.id)
    );
    return response;
  };

  return useSWR<IPageData<EventsEntity>>([url], fetcher);
}

export function useAPIGetEventDetail(id: string) {
  const url = API_PATH.GET_EVENT_DETAIL;
  const querys = {
    id,
  };

  const fetcher = async () => {
    const response = (await http.get(url, {
      params: querys,
    })) as EventsEntity;

    // response.list = response.list.filter(
    //   (item: EventsEntity) => !BGA_SPECIAL_EVENT?.includes(item?.id)
    // );
    return response;
  };

  return useSWR<EventsEntity>([url], fetcher);
}

export function useAPIGetEventApproveList(query: {
  events: string;
  roleType: EventsRoleValue;
  current?: number;
  pageSize?: number;
  email?: number;
}) {
  const url = API_PATH.GET_EVENT_APPROVE_LIST;
  const querys = {
    current: 1,
    pageSize: 100,
    ...query,
  };

  const fetcher = async () => {
    const response = (await http.get(url, {
      params: querys,
    })) as IPageData<EventsApproveEntity>;

    // response.list = response.list.filter(
    //   (item: EventsEntity) => !BGA_SPECIAL_EVENT?.includes(item?.id)
    // );
    return response;
  };

  return useSWR<IPageData<EventsApproveEntity>>([url, query], fetcher);
}
