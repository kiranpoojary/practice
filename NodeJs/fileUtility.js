var axios = require('axios')


//file url to base64
let urlfileToBase64 = (url) => {
    axios.request({
        method: 'GET',
        url: url,
        responseType: 'arraybuffer',
        reponseEncoding: 'binary'
    }).then(res => {
        data = "data:" + res.headers["content-type"] + ";base64," + Buffer.from(res.data).toString('base64');
        console.log(data);
    })
}


//client posted or not
let clientUsage = () => {
    let fileContent = ""
    axios.request({
        method: 'GET',
        url: "https://"
    }).then(res => {
        if (res.data && res.data.accounts.length > 0) {
            res.data.accounts.map(acc => {
                fileContent = (fileContent) ? fileContent + acc._id + "-" + acc.name + "-" + JSON.stringify(acc.jobpost) + "\n" : acc._id + "-" + acc.name + "-" + JSON.stringify(acc.jobpost) + "\n"
            })
        }
        console.log(fileContent);
    })
}


clientUsage()









