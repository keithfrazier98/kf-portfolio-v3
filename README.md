# Keith's Portfolio

Stack:

- react
- react-query
- graphql
- graphql-request
- JavaScript
- HTML
- Tailwind CSS
- Google Analytics

This is the second portfolio I have created, built after a year of working as a full-stack developer. I felt it neccesarry to rebuild the site entirely after gaining expereince that I didn't have when I built the first one over a year ago (as of Aug 13 2022). This portfolio is aimed to showcase the majority of the key skills I have gained in front-end web development, and keep people (interested in learning about me) engaged with this website rather than having to checkout my GitHub, LinkeIn, and resume all individually.

I chose to feature an "experience" section rather than a projects section, and have individual pages for GitHub information, my resume, and featured projects. There is a small button on the right hand side with a rainbow icon in it, which toggles the background. When the theme is rainbow mode, the background gradient will transition from page to page.

## GitHub

The GitHub section uses their open GraphQL API for fetching my github information. It showcases the readmes of my pinned repositories, an overview list of all my public repositories, and a percentage visual of the languages I use. The requests are cached with react-query, the readmes are rendered with react-markdown and displayed in a carousel with react-carousel, all resulting in a pretty quick setup. (the little flower on the bottom left is for react-query devtools)

![GitHub Screenshot](./src/./images/GitHub_screenshot.png)

## Resume

The resume section uses react-pdf to render the resume, and a has a download link for easy download. Nothing crazy going on there.

## Stack

The stack sections is a simple list of everything I had had the pleasure of learning about in my journey so far. The starred items are where I am most confident in my abilities and have had the most experience.
## Contact

The contact section has a small email form and links to all of my main accounts, or buttons to copy my user tags.The email form uses formspree for react, and intereaction with anything on the left side of the page will trigger a small snackbar to confirm that something was copied, sent, or an error occured (hopefully not). The map on the right is a simple google `<iframe>` that you can copy directly from google maps and inject in your site, no need for an API. Did you know you can do that? I definately didn't, made my day after pondering Google API integration. 

![Contact me](./src/images/contact_me.png)

