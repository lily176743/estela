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
/**
 * 
 * @export
 * @interface InlineResponse401
 */
export interface InlineResponse401 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse401
     */
    error?: string;
}

export function InlineResponse401FromJSON(json: any): InlineResponse401 {
    return InlineResponse401FromJSONTyped(json, false);
}

export function InlineResponse401FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse401 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function InlineResponse401ToJSON(value?: InlineResponse401 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
    };
}


