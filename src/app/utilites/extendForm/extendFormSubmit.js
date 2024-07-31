export default async function extendFormSubmit(event, currency, supportRegion, files, userInfo, setloading, formFillingPerson, setAmountValidate, setmonthValidate, setmanyChatValidate, fileExist, setfileExist) {
    event.preventDefault();
    setAmountValidate(false);
    setmonthValidate(false)
    setmanyChatValidate(false)
    setloading(true)
    const data = new FormData(event.currentTarget);
    const amount = data.get("amount")
    const month = data.get("month");
    const manychat = data.get('manychat')
    const wallet = JSON.parse(data.get("wallets"))
    const notes = data.get("notes")
    const contactLink = data.get("contactLink")
    console.log("First URL of Image: " + files[0].href)

    //validate month and amount
    if(!/^\d+$/g.test(amount))
    {
      setAmountValidate(true);
      setloading(false)
      return;
    }
    if(!/^\d+$/g.test(month))
    {
      setmonthValidate(true);
      setloading(false)
      return;
    }
    if(!/^\d+$/g.test(manychat))
    {
      setmanyChatValidate(true);
      setloading(false)
      return;
    }

    //check if file exist
    if(files.length == 0)
    {
      setfileExist(false);
      setloading(false)
      return;
    }

    // check if the user exist in mysql
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    let raw = JSON.stringify({
      "name": userInfo.name,
      "email": userInfo.email
      });
  
      let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
      };

    let res = await fetch('/api/InCustomerTable/', requestOptions)
    let ans = await res.json()

    // if the user already in mysql table
    if(Object.hasOwn(ans, 'Name'))
      {
  
        // create a note
        raw = JSON.stringify({
          "note": "hello",
          "agentID": 1
      })
       requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
  
        let note = await fetch('/api/insertNote/', requestOptions)
        note = await note.json();
  
  
        myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log(ans)
       raw = JSON.stringify(
        {
          "CustomerID": ans["CustomerID"],
          "SupportRegionID": 1,
          "WalletID": 1,
          "Amount": amount,
          "AgentID": 2,
          "NoteID": note["id"],
          "TransactionDate": new Date(),
          "Month": month
      }
      )
      
  
  
       requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
  
        let response = await fetch(`/api/extendUser`, requestOptions)
        location.reload()
      }

      else // treat this as new customer but get the requried user information from airtable
    {
      // // get customer information from airtable using name and email
      // raw = JSON.stringify({
      //   "name": userInfo.name, 
      //   "email": userInfo.email
      // })
      // requestOptions = {
      //   method: 'POST',
      //   headers: myHeaders,
      //   body: raw,
      //   redirect: 'follow'
      // };

      // let response = await fetch('/api/checkuser' , requestOptions)
      // response = response.json()
  

      

      // submitpaymentinformation
      raw = JSON.stringify({
        "customerName": userInfo.name, 
        "customerEmail": userInfo.email,
        "agentID": 1,
        "supportRegionID": 1,
        "manyChatID": manychat,
        "contactPhone": "123",
        "amount": amount,
        "month": month,
        "note": notes,
        "walletId": 1,
        "Month": month
      })
      requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      let answ = await fetch('/api/submitPayment/', requestOptions)
      let {status} =  await answ.json()
      console.log(status)
      location.reload()
    }
}