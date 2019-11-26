// const BaseURL = 'http://localhost:8888/Projects/cookingv2.0/dist/php/'
const BaseURL = 'http://localhost/2019/tsi/dsw/projetos/cookingv2.0/dist/php/'

const Api = {
    URLApi: BaseURL,
    getUrlApi: (path)=>Api.URLApi+path,
    setUrlApi: (urlApi)=>{Api.URLApi=urlApi}
};

export default Api;