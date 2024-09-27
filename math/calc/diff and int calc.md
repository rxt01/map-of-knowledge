
| precursors | [[high school algebra]] [[trig]] |
| ---------- | -------------------------------- |
| status:    | #learnt                          |
| #tags      |                                  |
| level      | #college                         |

# #english-note

## find root of a function using newton's method
$$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$$
## definitions
![limit](real%20anal.md#definition%20of%20the%20limit)
$$f'(x):= \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$$
$$f'(x):=\lim_{t\to 1}\frac{f(tx)-f(x)}{tx-x}$$
$$\int_a^b f(x)dx:=$$

$f(x)$ is continuous at $x=c$ when $\lim_{x\to c}f(x)=f(c)$
## fundamental theorems of calculus
$$\int_{a}^{b}f(x)dx=F(b)-F(a) = F(x)|_{a}^{b}$$
$$\frac{d}{dx}\int_{a}^{x}f(t)dt=f(x)$$

## derivative tricks
$$\frac{d}{dx}e^x := e^x$$
$$\frac{d}{dx}ln(x)= \frac{1}{x}$$
$$sin'(x)=cos(x)$$
$$cos'(x)=-sin(x)$$
$$tan'(x)=sec^2(x)$$
$$cot'(x)=-csc^2(x)$$
$$sec'(x)=tan(x)sec(x)$$
$$csc'(x)=-cot(x)csc(x)$$
### product rule
$$(f(x)g(x))'=f'(x)g(x)+f(x)g'(x)$$
### scalar multiplication
$$\frac{d}{dx}(cf(x))=cf'(x)$$
### addition rule
$$\frac{d}{dx}(f(x)+g(x))=f'(x)+g'(x)$$
### power rule
$$\frac{d}{dx}x^a=ax^{a-1}$$

### quotient rule
$$\left(\frac{f(x)}{g(x)}\right)' = \frac{g(x)f'(x)-f(x)g'(x)}{g(x)^2}$$
$$\frac{d}{dx}\frac{af(x)+b}{cf(x)+d}=\frac{f'(x)(ad-bc)}{(cf(x)+d)^2}$$
### reciprocal rule
$$\frac{d}{dx}\frac{1}{f(x)}=-\frac{f'(x)}{(f(x))^2}$$
$$\frac{d}{dx}\frac{a}{x^n}=-\frac{an}{x^{n+1}}$$
### partial derivative
$$\frac{d}{dx}f(x,y)=-\frac{f_x}{f_y}$$
### inverse trig functions
$$\frac{dy}{dx}=\frac{1}{\frac{dx}{dy}}$$
### chain rule
$$\frac{d}{dx}(f\circ g)(x)=(f'\circ g)(x)g'(x)$$
### mean value theorem
for $f(x)$ differentiable on $(a,b)$ and continuous on $[a,b]$ $\frac{f(b)-f(a)}{b-a}=f'(c)$ at some point $c$ in $(a,b)$


## limit tricks
$$\lim_{n\to \infty}\left(1+\frac{1}{n}\right)^n := e$$
$$\lim_{x\to a}(f(x)+g(x))=\lim_{x\to a}f(x)+\lim_{x\to a}g(x)$$
$$\lim_{x\to a}(cf(x))=c\lim_{x\to a}f(x)$$
$$\lim_{x\to a}(f(x)g(x))=(\lim_{x\to a}f(x))(\lim_{x\to a}g(x))$$
$$\lim_{x \to a}\frac{f(x)}{g(x)}=\frac{\lim_{x \to a}f(x)}{\lim_{x \to a}g(x)}$$
### squeeze theorem 
$$f(x)\le g(x)\le h(x) \land \lim_{x\to a}f(x) = \lim_{x\to a}h(x)=L \implies \lim_{x\to a}g(x)=L$$

### l'Hopital's rule
$$\lim_{x\to a}\frac{f(x)}{g(x)} = \lim_{x\to a}\frac{f'(x)}{g'(x)}$$


## integral tricks
[[trig]]
$$\int f^{-1}(x)dx=xf^{-1}(x)-(F\circ f^{-1})(x)+C$$
$$\int x^n=\frac{x^{n+1}}{n+1}+C$$
$$\int f(x)+g(x)=F(x)+G(x)+C$$
$$\int fg'\ dx = f\circ g - \int f'g\ dx$$
$$\int udv = uv - \int vdu$$
$$\int_a^b f(x)g'(x)dx = f(x)g(x)|_a^b - \int_a^b f'(x)g(x)dx$$
$$\int_a^\infty f(x) dx = \lim_{t\to\infty}\int_a^tf(x)dx = \lim_{t\to\infty} F(x)|_a^t$$
$$\int_{-\infty}^\infty f(x)dx = \lim_{t\to -\infty}\int_t^af(x)dx + \lim_{t\to\infty}\int_a^tf(x)dx $$
$$f(x)\ge g(x)\ge 0 \implies \int_a^b f(x)dx \ge \int_a^bg(x)dx \ge 0$$
$$Archlength = \int_a^b \sqrt{1+(f'(x))^2}dx$$
$$SA = \int_a^b 2\pi f(x)\sqrt{1+(f'(x))^2}dx$$
## extrema
$$extrema(f(x)): 0_s\ of\ f'(x)$$
### 2nd derivative
#### $f'' < 0$
maximum
#### $f'' > 0$ 
minimum
#### $f'' = 0$
inconclusive

## sequences
$(a_n)$
$a_n = f(n)$
$$\lim_{x\to\infty}f(x)=L\implies \lim_{n\to\infty} a_n = L$$
$$\lim_{n\to\infty}f(a_n)=f(\lim_{n\to\infty}a_n)\ for\ f(x)\ continuous $$
## series
$$\sum_{n=1}^\infty a_n$$
$$s_n=\sum_{i=1}^n a_i$$
$$\lim_{n\to\infty}s_n=L \implies \sum_{n=1}^\infty a_n =L$$
### geometric series

$$\sum_{n=1}^\infty ar^{n-1}$$
$$diverges\ when\ |r|\ge 1$$
$$\frac{a}{1-r}\ when\ |r|<1$$
### Harmonic series
$$\sum_{n=1}^\infty \frac{1}{n}$$
diverges

## other
### intermediate value theorem
suppose $f(x)$ is continuous on $[a,b]$. let $N \in [f(a),f(b)] \implies \exists c$ $a\le c\le b$ $f(c)=N$ 


