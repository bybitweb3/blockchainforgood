import { ASSETS_URL, BASE_URL, BGA_HOST_URL, BGA_PROD_HOST_URL, OSCAR_HACKTHON_EVENT_ID } from "./env";
import { ROUTER_PATH } from "./router";

export const API_URL = BASE_URL + "/api";
export const IMAGE_URL = ASSETS_URL;

export const VISITED_PRODUCTION_URL = BGA_PROD_HOST_URL;
export const PARTNER_APPLY_LINK = `${BGA_HOST_URL}${ROUTER_PATH.FORM.ORGANIZATION}`;
export const OSCAR_HACKTHON_APPLY_LINK = `${PARTNER_APPLY_LINK}/${OSCAR_HACKTHON_EVENT_ID}`

export const ORGANIZATION_PATH = "project";
export const INDIVIDUAL_PATH = "individual";
export const JUDGE_OR_SPEAKER_PATH = "judge";