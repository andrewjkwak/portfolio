---
path: /blog/learning-d3
date: 2020-10-11T21:56:09.410Z
title: Journey to Master D3.js
description: D3.js is a JavaScript library to manipulate documents based on data.
---
![Scatterplot](/assets/d3-scatterplot.png "Scatterplot using D3")

## What is D3.js?

D3.js is a JavaScript library used to manipulate documents based on data.  It helps you display beautiful, digestible interface, given a dataset using HTML, SVG, and CSS.  

To see examples of what's possible on D3, check out this [link](https://observablehq.com/@d3/gallery).  

While there are other great data visualization libraries built around d3 to simplify the entire process of creating charts and graphs such as chart.js and React Charts, D3 offers so many powerful tools that allows you to customize your program **exactly** to your liking.

Some of the things you can do with D3 are: 

* Adding, removing, or updating HTML / SVG elements
* Animating your SVG or HTML more precisely using d3.transition
* Implementing interactions, such as zooming, panning, dragging, etc.
* Working with geographical data (creating wonderful visualizations using GeoJSON)



## Why I Chose D3.js?

The main reason why I started learning D3 is simply because I really enjoy using it.  It definitely has a steeper learning curve compared to other data visualization libraries out there, but it's enjoyable to learn every process of how a chart gets created and know exactly how it works, rather than getting most of the operations encapsulated.  Also, while most of what I've been doing could've been done easily in another library, I am primarily focusing on the long-term gains where I could create beautiful and intricate visualizations that would not be possible without D3.



## What I've Learned So Far...

Even though I am a frontend developer, I haven't really used SVG that much throughout my career.  I've learned a lot about all the different types of SVGs available and their properties.  

Also, I'm learning more about graphs and charts and knowing when to use certain charts to display data in an intuitive way.  For example, the basic scatterplot I've posted above displays the relationship between obesity and income.  The reason why I chose to display the data using a scatterplot was to look at the relationship between two different metrics.  From the picture, you could clearly see a decline with obesity rate as income rate increases.  

Surprisingly, another important thing I learned is DOM manipulation.  As I mainly use React when developing now, all of the DOM manipulation gets handled by React.  I haven't had the opportunity to just use pure HTML/CSS and JavaScript in a while and D3 has allowed me to do so.



## Difficulties I've Faced So Far

What I found to be the hardest part about learning D3 is the lack of relevant information.  A lot of the examples done with D3 are using an older version that contains different syntax and methods that are deprecated.  Also, D3 offers the ability to be fully customizable, but that also leads to a bunch of different implementations to create the same chart so it's confusing to figure out exactly how to implement something when there's no consistency.  Last but not least, I found it a bit difficult to find datasets formatted in a way that's easily usable while also being interesting.  



## Future

I've been working on a project with D3 and React and am excited to finally get it how I want it.  It's been a bit tricky since both D3 and React deals with DOM manipulation, but I've started to learn how to get it to work side by side.  

TLDR - Let React handle all the DOM manipulations and use the powerful functionality of D3 that generates the SVGs and input them directly into the SVG element itself.  This is for a later post though :)