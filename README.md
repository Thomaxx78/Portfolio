Hi all,

In this second part, I will explain how I deploy my site on Internet:

First of all I creat a repesitory on Github and link it with my portfolio code, Github Is gonna be really important for the deployement.
Once done, I decide to use Vercel. Vercel provides an easy-to-use experience for developers and makes it simple to deploy sites that are both fast and delightful for users.
On Vercel, I had to add a new project and import in it my linked repesitory of the portfolio. After that our site is deployed !
But were not done with Vercel, we also have to add a running checks.
And for that Im using checkly, checkly monitor and validate your crucial site transactions. Automatically collect error traces, screenshots and performance metrics with every browser check you run.
So I linked checkly with my Vercel deployement and github too, had to commit and actualize Vercel and it was done.

In this third part, I will explain the extension and applications related to my repesitory:

Zapier automates your work across 5000+ app integrations. I use it to send me a discord message on my Dev server and it tells me when: - I or someone commit - I have a github notification

Imgbot who's not currently working, its not sending any pr.

CodeFactor who instantly performs Code Review with every GitHub Commit or PR.
