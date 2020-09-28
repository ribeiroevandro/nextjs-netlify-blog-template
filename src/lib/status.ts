import status from "../../meta/status.yml";

export type StatusContent = {
  readonly slug: string;
  readonly name: string;
};

const stateMap: { [key: string]: StatusContent } = generateStateMap();

function generateStateMap(): { [key: string]: StatusContent } {
  let result: { [key: string]: StatusContent } = {};
  for (const state of status.status) {
    result[state.slug] = state;
  }
  return result;
}

export function getState(slug: string) {
  return stateMap[slug];
}

export function listStatus(): StatusContent[] {
  return status.status;
}
