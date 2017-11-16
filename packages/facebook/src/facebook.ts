import { OAuth2 } from '@gaws/utils/oauth2'

export const currentApiVersion = 'v2.10';

export interface FacebookProps {
  marketingApiAccessToken: string
  appId: string
  appSecret: string
}

export class Facebook {
  props: FacebookProps
  baseUrl: string
  tokenUrl: string
  accessToken: string
  marketingApiAccessToken: string

  constructor(props) {
    this.props = props
    this.baseUrl = 'https://graph.facebook.com'
    this.tokenUrl = this.baseUrl + '/oauth/access_token'
    this.accessToken = this.getAccessToken()
    this.marketingApiAccessToken = this.props.marketingApiAccessToken;
  }

  getAccessToken(){
    let response = OAuth2.withClientCredentials(
                     this.tokenUrl,
                     this.props.appId,
                     this.props.appSecret
                    );
    return response.accessToken;
  }

  get(edge, payload, accessToken = this.accessToken){
    let url = `${this.baseUrl}/${edge}?access_token=${accessToken}`;
    for(let field in payload){
      url += `&${field}=${payload[field]}`;
    }

    return UrlFetchApp.fetch(encodeURI(`${url}`))
  }
  
  post(edge, payload, accessToken = this.accessToken){
    let url = `${this.baseUrl}/${edge}`;
    payload['access_token'] = accessToken;
    
    let authHeader = {
      method: 'POST',
      payload: payload
    };
    return UrlFetchApp.fetch(encodeURI(`${url}`), authHeader);
  }

   getSearchResults(query, options?){
    return this.get(`search?q=${query}`, options);
  }
  
  getGraphObject(id, type, options?){
    let url = `${this.baseUrl}/${id}/${type}`;
    for(let i in options){
      url += `&${options[i]}`;
    }
    let authHeader = {
      headers: {
        Authorization: `OAuth ${this.accessToken}`
      }
    };
    return UrlFetchApp.fetch(encodeURI(`${url}`), authHeader);
  }
  
  marketingApiPostRequest(id, payload, edge, apiVersion = currentApiVersion){
    let url = `${this.baseUrl}/${apiVersion}/${id}/${edge}`;
    payload['access_token'] = this.marketingApiAccessToken;
    //Logger.log(payload);
    let authHeader = {
      method: 'POST',
      payload: payload
    };
    return UrlFetchApp.fetch(encodeURI(`${url}`), authHeader);
  }
  
  marketingApiGetRequest(id, payload, edge, apiVersion = currentApiVersion){
    let url = `${this.baseUrl}/${apiVersion}/${id}/${edge}?access_token=${this.marketingApiAccessToken}`;
    
    for(let field in payload){
      url += `&${field}=${payload[field]}`;
    }
    //Logger.log(url);
    return UrlFetchApp.fetch(encodeURI(`${url}`));
  }
  
  getInsights(id, payload, apiVersion = currentApiVersion){
    return this.marketingApiGetRequest(id, payload, 'insights', apiVersion);
  }
  
  createEntity(id, payload, edge, apiVersion = currentApiVersion){
    if(!edge){ edge = ''; }
    return this.marketingApiPostRequest(id, payload, edge, apiVersion);
  }
  
  readEntity(id, payload, edge, apiVersion = currentApiVersion){
    if(!edge){ edge = ''; }
    return this.marketingApiGetRequest(id, payload, edge, apiVersion);
  }
  
  updateEntity(id, payload, edge, apiVersion = currentApiVersion){
    if(!edge){ edge = ''; }
    return this.marketingApiPostRequest(id, payload, edge, apiVersion);
  }
}