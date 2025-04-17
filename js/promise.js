function LoadData(resolve) {
    let data = []
    setTimeout(() => {
        data = ["User1","User2","User3"]
        resolve(data)
    }, 5000);
}

const dataPromise = new Promise((resolve,reject)=>{
    LoadData(resolve)
})

async function getData()  {
    const res = await dataPromise;
    console.log(res)
    console.log("Response Recevied")
}

getData()
console.log("rest of the code")

// const myData = LoadData()
// console.log(myData)