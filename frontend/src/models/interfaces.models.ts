import {actionStateEnum} from "./enum.models";

export interface CarouselItem {
    icon?: string,
    acronym: string,
    value: string,
    state: actionStateEnum
}