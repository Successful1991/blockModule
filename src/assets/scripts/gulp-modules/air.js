let conf = {
    time:{
        from: '2020-03-01',
        to: '2020-04-01'
    },
    data: {
        US: {
            ATA: true,
            ATU: true,
        },
        UK: {
            ATA: true,
            ATU: true,
        },
    },
    day: {
        from: [0,1],
        to: [5,6]
    }
};

function setData(data) {
    fetch('./saveData.php',data)
        .then(res=>console.log(res))
}

// setData(conf);
document.querySelector('js-send').addEventListener('click', function () {
    setData(data);
});