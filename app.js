let promise = new Promise(
    function (resolve, reject) {
        // logic
        // thành công: resolve()
        // thất bại: reject()
        resolve([{
            id: 8,
            name: 'Phát'

        }])
    }
)
promise
    .then(function (course) {
        console.log(course);
    })
    .catch(function () {
        console.log('Failure');
    })
    .finally(function () {
        console.log('Done');
    })