/* tslint:disable */
/* eslint-disable */
/**
 * estela API v1.0 Documentation
 * estela API Swagger Specification
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    JobsMetadata,
    JobsMetadataFromJSON,
    JobsMetadataFromJSONTyped,
    JobsMetadataToJSON,
    Stats,
    StatsFromJSON,
    StatsFromJSONTyped,
    StatsToJSON,
} from './';

/**
 * 
 * @export
 * @interface SpidersJobsStats
 */
export interface SpidersJobsStats {
    /**
     * 
     * @type {Date}
     * @memberof SpidersJobsStats
     */
    date: Date;
    /**
     * 
     * @type {Stats}
     * @memberof SpidersJobsStats
     */
    stats: Stats;
    /**
     * 
     * @type {Array<JobsMetadata>}
     * @memberof SpidersJobsStats
     */
    jobsMetadata: Array<JobsMetadata>;
}

export function SpidersJobsStatsFromJSON(json: any): SpidersJobsStats {
    return SpidersJobsStatsFromJSONTyped(json, false);
}

export function SpidersJobsStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpidersJobsStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': (new Date(json['date'])),
        'stats': StatsFromJSON(json['stats']),
        'jobsMetadata': ((json['jobs_metadata'] as Array<any>).map(JobsMetadataFromJSON)),
    };
}

export function SpidersJobsStatsToJSON(value?: SpidersJobsStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': (value.date.toISOString().substr(0,10)),
        'stats': StatsToJSON(value.stats),
        'jobs_metadata': ((value.jobsMetadata as Array<any>).map(JobsMetadataToJSON)),
    };
}


