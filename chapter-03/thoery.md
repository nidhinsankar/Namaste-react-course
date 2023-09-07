## 1. What is JSX
      JSX is known as syntax extension for javascript. JSX helps us to write html into react which we use to describe the UI.JSX helps us to produce 'react elements' which we can add into the dom 
      JSX provides syntactical sugar for React.createElement(tagName,props,content)
      using JSX:
      ```
            const myElement = <h1>I Love JSX!</h1>;
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(myElement);
      ```
      without JSX:
      ```
         const myElement = React.createElement('h1',{},"hello world")
         const root = ReactDOM.createRoot(document.getElementById('root'));
         root.render(myElement);
      ```
## 2. Superpowers of JSX
    * Embed javascript expression in JSX.
    * JSX is also an expression.
    * We can write both UI and logic in JSX
    * Specify atributes in JSX
    * JSX represents objects
    * 
## 3. Role of type attribute in script tags
    The type attribute specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags. It has a Default value which is “text/javascript”.

    type attribute can be of the following types:
    text/javascript : It is the basic standard of writing javascript code inside the <script> tag.
    Syntax
    ```<script type="text/javascript"></script>```
    * text/ecmascript : this value indicates that the script is following the EcmaScript standards.
    * module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
    * text/babel : This value indicates that the script is a babel type and required bable to transpile it.
    * text/typescript: As the name suggest the script is written in TypeScript.
## 4. {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent><TitleComponent />}
    {TitleComponent} : this value describes the TitleComponent as a javascript expression or a variable. the {} curly braces is used to embed a javascript expressin or a javascript variable
    {<TitleComponent />}: This value describes the TitleComponent as a javascript function or a component. the <TitleComponent /> represents the value as a react element without any children
    {<TitleComponent><TitleComponent />} : This value describes the TitleComponent as component or a function returning some JSX. The <TitleComponent></TitleComponent> with some children inside it.
