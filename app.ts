function sumarValores(n1: number | string, n2: number | string) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString()
    } else {
        return n1 + n2
    }
}
