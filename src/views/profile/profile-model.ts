import type {ITab} from "@/domain/interfaces/ITab.interface";
import type {IEvent} from "@/domain/interfaces/response/event.interface";
import type {IOrganization} from "@/domain/interfaces/response/organization.interface";
import type {IEventToSave} from "@/domain/interfaces/response/event-to-save.interface";
import {weekDays} from "@/utiities/constants/weekDays";

import {EventTypes} from "@/utiities/constants/eventTypes";
import type {WeekToSelect} from "@/domain/interfaces/WeekToSelect.interace";
export class ProfileModel {
    user: any;
    organization: IOrganization;
    userType: any;
    tabs: ITab[];
    selectedTabId: number;
    followedEvents: IEvent[]
    eventsByOrg: IEvent[]
    weekDays: WeekToSelect[]
    eventTypes: any[]

    constructor(object?: any) {
        this.user = object && object.user || {};
        this.userType = object && object.userType || {};
        this.tabs = object && object.tabs || [];
        this.selectedTabId = object && object.selectedTabId || 1;
        this.followedEvents = object && object.followedEvents || [];
        this.organization = object && object.organization || {};
        this.eventsByOrg = object && object.eventsByOrg || [];
        this.weekDays = object && object.weekDays || weekDays.map((day: any) => {
            return {
                ...day,
                isActive: day.id === 1 ? true : false
            }
        });
        this.eventTypes = object && object.eventTypes || EventTypes.map((type: any) => {
            return {
                ...type,
                isActive: type.id === 1 ? true : false
            }
        })
    }
}