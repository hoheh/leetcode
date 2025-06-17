const licenseKeyFormatting = (S, k) => {
    const s = S.replace(/-/g, '').toUpperCase();
    const res = [];
    const firstGroupLength = s.length % k || k;
    
    res.push(s.slice(0, firstGroupLength));

    for (let i = firstGroupLength; i < s.length; i+=k) {
        res.push(s.slice(i, i + k));
    }

    return res.join('-');
};

console.log(licenseKeyFormatting('2-4A0r7-4k', 4)); // "24A0-R74K"
console.log(licenseKeyFormatting('2-4A0r7-4k', 3)); // "24-A0R-74K"
