## 1.When and why do we need to use lazy ?
We use lazy loading when we need to reduce the js bundle size in a large application which has lot of components .So we can lazy load only pages and component only when the user wants to or when the user routes to the particular page.

Lazy loading is an essential technique to optimise applications. Especially in larger, more complex applications it can help to reduce load time / downloaded data, help with SEO, expose only code and components required by the user, eg no admin components for regular users. Cleverly implemented it can help with A/B testing or feature toggles.
## 3.Why we got this error. A component got suspended while responding to synchronous input.This will cause the ui to be replaced with loading indicator.To fix updates that suspend should be wrapped with start transition ? How does suspense fix this error?
we got this error because when we are fetching the instamart code but the component code was there it caused the error so we need to the wrap the page route wth `<Suspense>` we can also give a fallback component like loading component to display something when t fetching the code from server 
## 4.Advantages and disadvantages of using code splitting pattern ?
| Advantages of Chunking                 | Dis-advantages of Chunking |
| -------------------------------------- | -------------------------- |
| Able to split large chunk of js files into smaller files | lot of bundle files means lot of requests to the server |
| show only component required to the user | not recommened for using it in small app |
| It has better user experience, faster initial loading | increased complexity in development and  testing processes
## 5.When do we and why do we need suspense
We need to use suspense when impporting the component using lazy loading part . It also helps us to give fallback which displays something until the children gets loaded into the page .We can also use suspense when we want to do data fetching , loading scripts and images other code parts


### some people call this as 

- chunking
- code splitting
- lazy loading
- dynamic bundling
- On demand loading
- Dynamic import