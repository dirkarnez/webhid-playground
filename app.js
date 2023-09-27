(async () => {
         let devices = await navigator.hid.requestDevice({
            filters: [],
        });
        console.log("devices:",devices);
})()
