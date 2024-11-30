---
abstract: trig over a negative curvature surface
---


| precursors | [[]]     |
| ---------- | -------- |
| status:    | #tolearn |
| #tags      |          |
| level      | #        |
| type       | #        |
# #english-note 
## euler's formula equivalent
$$e^{a+bi}=(\cosh a+\sinh a)(\cos b+i\sin b)$$
## hyperbolic trig functions 
$$\sinh x=\frac{e^x-e^{-x}}{2} = \frac{e^{2x}-1}{2e^x}=\frac{1-e^{-2x}}{2e^-x}=-i\sin(ix)$$
$$\sinh(-x)=-\sinh x$$
$$\cosh x=\frac{e^x+e^{-x}}{2} = \frac{e^{2x}+1}{2e^x}=\frac{1+e^{-2x}}{2e^-x}=\cos(ix)$$
$$\cosh(-x)=\cosh x$$
$$\tanh x=\frac{\sinh x}{\cosh x} = \frac{e^x-e^{-x}}{e^x+e^{-x}} =\frac{e^{2x}-1}{e^{2x}+1}=-i\tan(ix)$$
$$\tanh(-x)=-\tanh x$$
$$\coth x=\frac{\cosh x}{\sinh x} = \frac{e^x+e^{-x}}{e^x-e^{-x}} =\frac{e^{2x}+1}{e^{2x}-1}=i\cot(ix)$$
$$\coth(-x)=-\coth(x)$$
$$\text{sech}\ x=\frac{1}{\cosh x}\frac{2}{e^x+e^{-x}} = \frac{2e^x}{e^{2x}+1}=\frac{2e^-x}{1+e^{-2x}}=\sec(ix)$$
$$\text{sech}(-x)=\text{sech}\ x$$
$$\text{csch}\ x=\frac{1}{\sinh x}\frac{2}{e^x-e^{-x}} = \frac{2e^x}{e^{2x}-1}=\frac{2e^-x}{1-e^{-2x}}=i\csc(ix)$$
$$\text{csch}(-x)=-\ \text{csch}\ x$$
### inverses
$$\text{arsinh}\ x=\ln(x+\sqrt{ x^2+1 })$$
$$\text{arcosh}\ x=\ln(x+\sqrt{ x^2-1 })$$
$$\text{artanh}\ x=\frac{1}{2}\ln\frac{1+x}{1-x}$$
$$\text{arcoth}\ x=\frac{1}{2}\ln\frac{x+1}{x-1}$$
$$\text{arsech}\ x=\ln\frac{1+\sqrt{ 1-x^2 }}{x}$$
$$\text{arcsch}\ x=\ln(\frac{1}{x}+\sqrt{ \frac{1}{x^2}-1 } )$$

### identities
$$\text{arsech}\ x=\text{arcosh}(\frac{1}{x})$$
$$\text{arcsch}\ x=\text{arsinh}(\frac{1}{x})$$
$$\text{arcoth}\ x=\text{artanh}(\frac{1}{x})$$
$$\cosh x+\sinh x=e^x$$
$$\cosh x-\sinh x=e^{-x}$$
$$\cosh^2x-\sinh^2x=1$$
$$\text{sech}^2x=1-\tanh^2x$$
$$\text{csch}^2x=\coth^2x-1$$
### angle operation formulae
#### addition
$$\sinh(x+y)=\sinh x\cosh y+\cosh x\sinh y$$
$$\cosh(x+y)=\cosh x\cosh y+\sinh x\sinh y$$
$$\tanh(x+y)=\frac{\tanh x+\tanh y}{1+\tanh x\tanh y}$$
#### double angle
$$\cosh(2x)=2\cosh^2x-1=2\sinh^2x+1$$
$$\sinh(2x)=2\sinh x\cosh x$$
$$\tanh(2x)=\frac{2\tanh x}{1=\tanh^2x}$$
#### substraction
$$\sinh(x-y)=\sinh x\cosh y-\cosh x\sinh y$$
$$\cosh(x-y)=\cosh x\cosh y-\sinh x\sinh y$$
$$\tanh(x-y)=\frac{\tanh x-\tanh y}{1-\tanh x\tanh y}$$
#### half angle
$$\sinh\frac{x}{2}=\frac{\sinh x}{\sqrt{ 2(\cosh x+1) }}=(\text{sign}\ x) \sqrt{\frac{\cosh x-1}{2}  }$$
$$\cosh\frac{x}{2}=\sqrt{ \frac{\cosh x+1}{2} }$$
$$\tanh\frac{x}{2}=\frac{\sinh x}{\cosh x+1}=(\text{sign}\ x)\sqrt{ \frac{\cosh x-1}{\cosh x+1} }=\frac{e^x-1}{e^x+1}$$

### other formulae
$$\sinh x+\sinh y=2\sinh\frac{x+y}{2}\cosh\frac{x-y}{2}$$
$$\cosh x+\cosh y=2\cosh\frac{x+y}{2}\cosh\frac{x-y}{2}$$
$$\sinh x-\sinh y=2\cosh\frac{x+y}{2}\sinh\frac{x-y}{2}$$
$$\cosh x-\cosh y=2\sinh\frac{x+y}{2}\sinh\frac{x-y}{2}$$
$$\sinh^2x=\frac{1}{2}(\cosh(2x)-1)$$
$$\cosh^2x=\frac{1}{2}(\cosh(2x)+1)$$

### derivatives

$$\sinh' x=\cosh x$$
$$\sinh''x=\sinh x$$
$$\cosh'x=\sinh x$$
$$\cosh''x=\cosh x$$
$$\tanh'x=\text{sech}^2x$$
$$\coth'x=-\text{csch}^2x$$
$$\text{sech}'x=-\tanh x\ \text{sech}\ x$$
$$\text{csch}'x=-\coth x\ \text{csch}\ x$$
$$\text{arsinh}'x =\frac{1}{\sqrt{ x^2+1 }}$$
$$\text{arcosh}'x =\frac{1}{\sqrt{ x^2-1 }}$$
$$\text{artanh}'x=\frac{1}{1-x^2}$$
$$\text{arcoth}'x=\frac{1}{1-x^2}$$
$$\text{arsech}'x=\frac{1}{x\sqrt{ 1-x^2 }}$$
$$\text{arscsh}'x=\frac{1}{|x|\sqrt{ 1+x^2 }}$$
