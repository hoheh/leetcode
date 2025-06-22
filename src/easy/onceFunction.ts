{
    type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
    type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

    function once(fn: Function): OnceFn {
        let hasBeenCalled = false;

        return (...args: JSONValue[]): JSONValue | undefined => {
            if (hasBeenCalled) {
                return undefined;
            }

            hasBeenCalled = true;
            return fn(...args);
        }
    }


    let customFunction = (a: number, b: number, c: number) => (a + b + c);
    let onceFn = once(customFunction);

    console.log(onceFn(1, 2, 3)); // 6
    console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
 
}