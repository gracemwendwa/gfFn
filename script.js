console.log(`confirm if its working`);
const sendRequest = async (url = "http://localhost:3000/",
    method = 'GET',
    contentType = 'application/json',
    data = undefined) => {
    const response = await fetch(url, {
        method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': contentType
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json();
}


const getReq = async (gevent, mevent) => {
    const res = await sendRequest("http://localhost:3000/", 'GET', 'application/json', undefined);
    console.log({ res: res });
}

const patchReq = async (gevent, mevent) => {
    const res = await sendRequest("http://localhost:3000/", 'PATCH', 'application/json', {});
    console.log({ res: res });

}

const putReq = (gevent, mevent) => { console.log("put", { gevent, mevent }); }

const postReq = (gevent, mevent) => { console.log("post", { gevent, mevent }); }

const deleteReq = (gevent, mevent) => { console.log("delete", { gevent, mevent }); }

document.getElementById("getReq").addEventListener("click", getReq)
document.getElementById("patchReq").addEventListener("click", patchReq)
document.getElementById("putReq").addEventListener("click", putReq)
document.getElementById("postReq").addEventListener("click", postReq)
document.getElementById("deleteReq").addEventListener("click", deleteReq)