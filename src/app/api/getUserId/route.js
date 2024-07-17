export const dynamic = 'force-dynamic' // defaults to force-static

//Input: Get PRF no
//Output: customer record id


export async function POST(request) {

    let json = await request.json()
    //get the prf no
    const prfNo = json['prfno']

    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer patur9N4mKx7GpWZv.da71f016c51cd75abbcea2d3efae8b4dcc2d73af79e75be47183822e8439def1");
    // myHeaders.append("Cookie", "brw=brwb8tzTqMzSEOnxJ; AWSALB=tG4ugsmCvEw0QmkwD5a/xwM4qDNJmxcWkvkvKCJaHyjDBJPBLGK0ghh6w47tHOtRDDWAg7TDF0owjxiycR46RLhQi2p40MjQik2AFBFWK7/vMHaX46HRgEG43Ytw; AWSALBCORS=tG4ugsmCvEw0QmkwD5a/xwM4qDNJmxcWkvkvKCJaHyjDBJPBLGK0ghh6w47tHOtRDDWAg7TDF0owjxiycR46RLhQi2p40MjQik2AFBFWK7/vMHaX46HRgEG43Ytw");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

    let response = await fetch(`https://api.airtable.com/v0/appp80DDZ7FHxqCc1/tblZeEt4ay83MpLcL?filterByFormula=IF(SEARCH(%22${prfNo}%22%2C+prf_card_no)%2CTRUE()%2CFALSE())`, requestOptions)

    
    let answer = false;
    json = await response.json();
    let records = json.records;

    //if user exist
    if(records.length != 0)
    {
        return Response.json({
            message: !answer,
            name: records[0].fields['Name'],
            email: records[0].fields["Email"],
            prf_no: records[0].fields["prf_card_no"],
            expire_date: records[0].fields["expire_date (from test_hqid)"]
        })
    }
    else
    {
        return Response.json({
            message: answer
        });
    }

    /**
     * This is the final version But because of data scheme, we are doing the above way
     */
    // json = await response.json();

    // //if the record is empty
    // if(json.records.length == 0)
    // {
    //     return Response.json(false)
    // }

    // //if the record has an ID
    // let id = json.records[0].id;

    // return Response.json({id: id})
}