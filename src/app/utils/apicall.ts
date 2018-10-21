import axios from 'axios'

export class Api {
    public Get(url: string) {
        return (this.APIbody(url, 'GET', []));
    }
    public GetWithCallBack(url: string, CallBackFunction: any): any {

        return (this.APICallback(url, 'GET', [], CallBackFunction));
       
    }
    public PostWithCallBack(url: string, paramdata: any, CallBackFunction: any): any {
       
        return (this.APICallback(url, 'POST', paramdata, CallBackFunction))
    }

    public Post(url: string, paramdata: any) {
        return (this.APIbody(url, 'POST', paramdata));
    }
    public Delete(url: string, paramdata: any) {
        return (this.APIbody(url, 'DELETE', paramdata));
    }
    private APICallback(paramurl: string, invoketype: string, paramdata: any, callbackFunction: any) {
        let data;
        axios({
            headers: { "Content-type": "application/json" },
            method: invoketype,
            responseType: 'json',
            url: paramurl,
            data: paramdata
        }).
            then(response => {
              return (callbackFunction(response.data));
            })
            .catch(error => {
                console.log(error);
        
            });
        return data;
    }
    private APIbody(paramurl: string, invoketype: string, paramdata: any) {
        let data;
        axios({
            headers: { "Content-type": "application/json" },
            method: invoketype,
            responseType: 'json',
            url: paramurl,
            data: paramdata
        }).
            then(response => {
                data = response.data;
            })
            .catch(error => {
                data = error.data;
                console.log(data);
            });
        return data;
    }
}