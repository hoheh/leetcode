const callLimit = (fn: Function, limit: number): { (...args: any[]): any; reset(): void } => {
    let counter = 0;
    
    const limitedFn = (...args: any[]) => {
        if (counter === limit) {
            return;
        }
        
        counter++;
        return fn(...args);
    };

    limitedFn.reset = () => {
        counter = 0;
    };

    return limitedFn;
};

function log(title: string, message: string) {
    console.log(`${title}: ${message}`);
}

const logLimit = callLimit(log, 5);

logLimit('title', 'message');
logLimit('titl1', 'message');
logLimit('title2', 'message');
logLimit('title3', 'message');
logLimit('title4', 'message');
logLimit.reset();
logLimit('title', 'message');