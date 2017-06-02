# markdown-to-webpage

I created this module because I wanted a markdown -> HTML converter that actually output a fully wrapped HTML page.

Leveraging [Handlebars](http://handlebarsjs.com/reference.html) and [showdown](https://github.com/showdownjs/showdown), this module will accept a markdown file as input, and inject that into the body tag of an HTML file.

This is kind of like [MKDocs](http://www.mkdocs.org/) or [Jekyll](http://jekyllrb.com/), but way simpler.

I created this because I had a markdown file that I wanted to make into a full webpage. Simple as that.

## Future thoughts

* Ability to pass in different tags you want to put in the head: `link`, `meta`, `script`
* Ability to pass in path to html file for header and footer elements
* Ability to specify a handlebars template to use instead of the provided default
* Needs unit tests...
