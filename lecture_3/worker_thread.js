const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) { //메인스레드 - 일을 워커스레드로 분배, 워커스레드의 일을 합쳐 return
    const threads = new Set();      // 중복 값 처리

    // 초기값 처리
    threads.add(new Worker(__filename, {
        workerData : { start : 1},
    }));

    threads.add(new Worker(__filename, {
        workerData : { start : 2},
    }));

    for (let worker of threads) {
        worker.on('message', (value) => console.log('워커로부터', value));
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
            console.log('워커 끝 ~');
            }   
        });
    }
}
else {  //워커스레드
    const data = workerData;
    parentPort.postMessage(data.start + 100);       //101,102

}