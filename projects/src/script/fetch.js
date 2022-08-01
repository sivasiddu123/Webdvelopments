import fetch from 'node-fetch'
// const url=`https://graph.facebook.com/v13.0/act_171980954777011/insights?pretty=0&fields=campaign_id,campaign_name&filtering=[{"field":"spend","operator":"GREATER_THAN", "value":0}]&level=campaign&time_range={"since":"2022-07-12","until":"2022-07-12"}&limit=800&access_token=EAAGAqSOqBOMBAO6ODNH3T0fCdxVtOfIxZBGuRrZCUGXdynHxiyk40D3A2pFJCyANYJWwki7V4W4NRmA2hcwSoBNeb1x8UAZADKUj1ipgRaeHiKpRUh7SVBrXGPlzBuweBwAbZA3UXHvJRs0NVqedX085gw1IHJbWAKogiIyL1lPpAqJysB2X`
// fetch (url)
// .then((data)=>{
//     // console.log(data.json())
//     return data.json();
// })
// .then((jsondata)=>{
//     console.log(jsondata)
// })
// // console.log(jsondata)
const url=`https://graph.facebook.com/v13.0/act_171980954777011/insights?pretty=0&fields=campaign_id,campaign_name&filtering=[{"field":"spend","operator":"GREATER_THAN", "value":0}]&level=campaign&time_range={"since":"2022-07-12","until":"2022-07-12"}&limit=800&access_token=EAAGAqSOqBOMBABZCjyHcarDI0HEeHlrLD6CpdfywBfDSMvR6ZCWvchsdisbZBksx9ZC2URGATHGUYJvx8NdrSGa4uDuNwZCMOmBWkiBro8hj9ZAU6j2W45mf8Mx07vgkQ9iBCtS7tRGXqOky5SZCzZB9R4ZABwQFKrTOqGAlpWS1rWtA50QLAtlHM`
const responsePromise=fetch(url)
.then((Response)=>{
   return Response.json()
})
.then((Response1)=>{
    console.log(Response1.data)
 });
// .catch((error)=>{
//     console.log(error);
// });
