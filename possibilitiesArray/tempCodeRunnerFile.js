function isAllPossibilities(x, n) {
    for (let i = 0; i <= n - 1; i++) {
        if (!x.includes(i)) {
            return false;
        }
    }
    return true;
}