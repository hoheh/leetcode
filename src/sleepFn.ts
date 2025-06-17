async function sleep(millis: number) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t))