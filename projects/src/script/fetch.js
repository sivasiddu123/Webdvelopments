const url="https://pubconsole.media.net/api/reports/v1/hourly-channel-wise?customer_guid=CF6FF673-0F7A-44BF-8F26-DC2CE5878740&customer_key=8CU2R1JY7&from_date=07/13/2022&to_date=07/13/2022&page_size=30000"
fetch (url)
.then((response)=>{
    return response.json();
})
.then((jsondata)=>{
    console.log(jsondata)
})
console.log(jsondata)
