---
abstract:
---

| precursors | [[algebra]] [[discrete math]] [[LA]] [[diff and int calc]] [[probability and stats]]                                                                                               |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| #tags      |                                                                                                                                                                                    |
| level      | #bachelor                                                                                                                                                                          |


# #english-note 

## some great algorithms
### fast inverse square root
```c
float Q_rsqrt( float number ){
	long i;
	float x2, y;
	const float threehalfs = 1.5F;

	x2 = number * 0.5F;
	y  = number;
	i  = * ( long * ) &y;						// evil floating point bit level hacking
	i  = 0x5f3759df - ( i >> 1 );               // what the fuck?
	y  = * ( float * ) &i;
	y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
//	y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

	return y;
}
```

### karatsuba algorithm
let $x$ and $y$ be represented as $n$-digit strings in some base $B$. for any positive integer $m$ less than $n$ 
$$x=x_{1}B^m+x_{0}$$
$$y=y_{1}B^m+y_{0}$$
where $x_{0}, y_{0} <B^m$
$$xy=z_{2}B^{2m}+z_{1}B^m+z_{0}$$
where
- $z_{0}=x_{0}y_{0}$
- $z_{1}=z_{3}-z_{2}-z_{0}$
- $z_{2}=x_{1}y_{1}$
- $z_{3}=(x_{1}+x_{0})(y_{1}+y_{1})$
### FFT
### backpropagation
