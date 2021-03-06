/* tslint:disable */
/* eslint-disable */
/**
 * Online Go Server REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ChallengesGameTimeControlParameters
 */
export interface ChallengesGameTimeControlParameters {
    /**
     * 
     * @type {string}
     * @memberof ChallengesGameTimeControlParameters
     */
    system: string;
    /**
     * 
     * @type {string}
     * @memberof ChallengesGameTimeControlParameters
     */
    speed: string;
    /**
     * 
     * @type {number}
     * @memberof ChallengesGameTimeControlParameters
     */
    perMove: number;
    /**
     * 
     * @type {boolean}
     * @memberof ChallengesGameTimeControlParameters
     */
    pauseOnWeekends: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChallengesGameTimeControlParameters
     */
    timeControl: string;
}

export function ChallengesGameTimeControlParametersFromJSON(json: any): ChallengesGameTimeControlParameters {
    return ChallengesGameTimeControlParametersFromJSONTyped(json, false);
}

export function ChallengesGameTimeControlParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChallengesGameTimeControlParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'system': json['system'],
        'speed': json['speed'],
        'perMove': json['per_move'],
        'pauseOnWeekends': json['pause_on_weekends'],
        'timeControl': json['time_control'],
    };
}

export function ChallengesGameTimeControlParametersToJSON(value?: ChallengesGameTimeControlParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'system': value.system,
        'speed': value.speed,
        'per_move': value.perMove,
        'pause_on_weekends': value.pauseOnWeekends,
        'time_control': value.timeControl,
    };
}

