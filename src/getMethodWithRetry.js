function get(url, retryCount = 5) {
    return new Promise((resolve, reject) => {
        const fetchWithRetry = async (retryCount) => {
            try {
                const fetchData = await fetch(url);
                resolve(await fetchData.json());
            } catch (error) {
                if (retryCount >= 1) {
                    fetchWithRetry(retryCount - 1);
                }

                reject(new Error("Заданный URL недоступен"));
            }
        };

        fetchWithRetry(retryCount)
    });
}

get('https://jsonplaceholder.typicaode.com/todos/1').then(data => console.log(data)).catch(error => console.error(error));