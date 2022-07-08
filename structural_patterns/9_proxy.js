
 function networkFetch(url)
 {
     return `${url} - Get Response Message`;
 }
 const cache = new Set();
 const proxiedFetch = new Proxy(networkFetch,{
     apply(get, thisArg, args){
         const url = args[0]
         if(cache.has(url)){
             return `${url} - Response from cache`
         }else{
             cache.add(url);
             return Reflect.apply(get, thisArg, args)
         }
     }
 })
 console.log('www.react.io');
 console.log('www.angular.io');
 console.log('www.react.io');