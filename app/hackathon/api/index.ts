
import { http } from "@/lib";
import { IPageData } from "@/app/news/types";
import useSWR from "swr";
import { EventsEntity, EventsCategoryValue, IEventClassValue, ApproveValue } from "../types";
import { BGA_SPECIAL_EVENT } from "@/constants/env";

const API_PATH = {
  GET_LIST: "/events/list",
};


export function useAPIGetList() {
  const url = API_PATH.GET_LIST;
  const querys = {
    page: 1,
    pageSize: 100,
    approve: ApproveValue.APPROVED,
    classs: IEventClassValue.BGA,
    category: EventsCategoryValue.HACKTHON
  }

  const fetcher = async () => {
    const response = (await  http.get(API_PATH.GET_LIST, {
      params: querys,
    })) as IPageData<EventsEntity>

    response.list = response.list.filter((item: EventsEntity) => !BGA_SPECIAL_EVENT?.includes(item?.id));
    return response;
  };

  return useSWR<IPageData<EventsEntity>>(
    [url],
    fetcher
  );
}