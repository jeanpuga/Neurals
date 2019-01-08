var MM = (A, B) =>
    A.map((a, i) =>
        B[0].map((ee, j) =>
            B.map((b, k) => a[k] * b[j])
            .reduce((p, n) => p + n)));