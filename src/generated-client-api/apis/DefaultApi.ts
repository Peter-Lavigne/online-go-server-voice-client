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


import * as runtime from '../runtime';
import {
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
    InlineResponse2002,
    InlineResponse2002FromJSON,
    InlineResponse2002ToJSON,
} from '../models';

export interface ChallengesIdGetRequest {
    id: number;
}

export interface ChallengesPostRequest {
    inlineObject?: InlineObject;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async challengesIdGetRaw(requestParameters: ChallengesIdGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling challengesIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/challenges/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     */
    async challengesIdGet(requestParameters: ChallengesIdGetRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.challengesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async challengesPostRaw(requestParameters: ChallengesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2002>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/challenges`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.inlineObject),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2002FromJSON(jsonValue));
    }

    /**
     */
    async challengesPost(requestParameters: ChallengesPostRequest, initOverrides?: RequestInit): Promise<InlineResponse2002> {
        const response = await this.challengesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async meGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     */
    async meGet(initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.meGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async uiConfigGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2001>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/ui/config`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     */
    async uiConfigGet(initOverrides?: RequestInit): Promise<InlineResponse2001> {
        const response = await this.uiConfigGetRaw(initOverrides);
        return await response.value();
    }

}
