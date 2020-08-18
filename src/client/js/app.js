const getTripInfo = async(data) => {
    const postInfo = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const port = process.env.PORT || 3000;
    const infoUrl = `http://localhost:${port}/travelData`;
    const res = await fetch(infoUrl, postInfo);
    try {
        console.log("Trying..");
        console.log('done\n')
        return res.json();
    } catch (err) {
        console.log(err);
    }
};


module.exports = getTripInfo;