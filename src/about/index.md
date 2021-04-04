---
layout: layouts/posts/singlepostherofit.njk
title: "About This Site"
subtitle: "Hey, it's not that exciting."
# Change the title setting for this in /src/_includes/layouts/posts/singlepostherofit.njk
# to keep the "Other posts" box from appearing at the bottom of this page, since it uses 
# the same layout as posts.
description: "A little about how all this works. Okay, it's exciting in a geeky sort of way and performnt as all get out."
author: Al Sessions
date: 2018-09-14T15:00:00
draft: false
featured_image: netlify.jpg
featured_image_alt: Netlify logo header image
---


This site runs Eleventy and is built on my desktop. 

I push changes to ba GitHub repo (all in VS Code) where Netlify picks them up, runs a build command and aims it all at a subdomain I control. It just happens.


{% lazypicture "theboy.jpg", "A picture of some guy." %}