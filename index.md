# `rootown.io`

Designed to serve as an example for how a minimalistic, maintainable open data portal could look, `rootown.io` provides programmatic access to course scheduling records, facility mapping data, and campus dining info. It uses GitHub Actions workflows to process and validate data and GitHub Pages to host it. OpenAPI definitions are provided for exported JSON files to make them easy to develop against, and a Node.js package was developed to demonstrate its usage. Documentation outlining the design and maintenance of this architecture is spread throughout the repos.

For a general overhead look, `rootown.io` presents an intersection of elegant design and sensible, puposebuilt data collection and processing code. Each different data source requires its own individual work to make the data more presentable and future-proof. The main design goal of this data portal is to provide exactly the right amount of information, no more and no less. Not enough information obviously means limiting the potential use cases of the data and too much means more overhead and making the overall database more difficult to use, maintain, and eventually expand upon. 

A big part of making the University data as accessible as possible was developing the OpenAPI access point, giving sensible and useable definitions to everything so that nothing is left unknown. There is a lot of detritis that needed sorted through, identified, and defined, and the OpenAPI definitions are the best way of letting the end user know what they are looking at and using, and the included JSON schema make that process as easy as possible. Making sure that the data is properly defined and intentionally included was of the utmost importance for this project.

Primarily, the Node.js package is intended as a way to demonstrate and distribute usage to as many users as possible in its most basic and open format. Ideally, the code is presented to as wide an audience as possible, and this felt like the easiest and most open way to get our work into as many hands as we could. 

Ultimately, this project is intended to make a meaningful impact on how the data for the University of Akron is maintained, distributed, and utilized. There is a lot of useful information buried in the University databases, but for a long time it has been made broadly inaccessible and generally obtuse and difficult for even the most dedicated end user to make heads or tails of. rootown.io and its architecture is built to make all of that a reality, that the data that the University has generated is useable, readable, and meaningful.

For more information, please email `{ med112, cmg188 } at uakron dot edu`.

<!-- NOTE: if updating text here remember to update it in the GitHub org profile too -->
