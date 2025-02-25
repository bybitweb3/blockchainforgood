import { ROUTER_PATH } from "@/constants";

export function isOscarPage(pathname: string) {
  return pathname === ROUTER_PATH.OSCAR;
}

export function isIncubationPage(pathname: string) {
  return pathname === ROUTER_PATH.INCUBATION;
}


export function isJointFundPage(pathname: string) {
  return pathname.startsWith(ROUTER_PATH.JOINT_FUND);
}

export function isHackathonPage(pathname: string) {
  return pathname.startsWith(ROUTER_PATH.HACKATHON);
}

export function isProjectPage(pathname: string) {
  return pathname.startsWith(ROUTER_PATH.PROJECT);
}

export function isVotingPage(pathname: string) {
  return pathname.startsWith(ROUTER_PATH.VOTING);
}

export function isSquarePage(pathname: string) {
  return pathname === ROUTER_PATH.SQUARE;
}

export function isOnSiteVotePage(pathname: string) {
  return /\/vote\/*\/*/.test(pathname);
}

export function isHomePage(pathname: string) {
  return pathname === ROUTER_PATH.HOME;
}
