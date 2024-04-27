# CSS

---

CSS, short for Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects like SVG or XHTML). CSS defines how elements should be rendered on screen, on paper, or in other media. It was first proposed by Håkon Wium Lie in 1994 and has since become a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

CSS enables web developers to separate the content and layout of a website from its styling, making it a crucial tool for web design. It allows for the customization of text, colors, layouts, and more, across multiple pages of a website, ensuring consistency and increasing flexibility.

Features of CSS include:

- **Separation of Content from Presentation**: By separating the style from the HTML structure, CSS simplifies HTML code and makes the web pages easier to maintain.
- **Cascading and Specificity**: CSS allows for multiple stylesheets to influence the look of a site, and the rules are applied according to specificity and order, which gives developers fine-grained control over its application.
- **Responsive Design**: With features like media queries, CSS enables the creation of responsive websites that work on a variety of devices and screen sizes.

Example:
```css
/* Example CSS for a simple webpage */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
}

h1 {
    color: #0267C1;
    text-align: center;
}

p {
    margin: 20px;
    line-height: 1.6;
}

/* Responsive styling */
@media (max-width: 600px) {
    body {
        background-color: #fff;
    }

    h1 {
        font-size: 20px;
    }
}
```

CSS has evolved over the years and now supports graphics, animations, and interactions that were previously possible only with JavaScript. As web design continues to evolve, CSS remains a fundamental skill for web developers, providing the tools needed to design visually compelling and user-friendly websites.