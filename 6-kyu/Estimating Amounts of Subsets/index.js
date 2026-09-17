function estSubsets(arr) {
    const unique = new Set(arr);
    return 2 ** unique.size - 1;
}