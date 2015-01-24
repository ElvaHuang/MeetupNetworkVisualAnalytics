Exploring-the-Online-and-Offline-Social-World
=============================================

We live in the era of "big data" where rapid digitalization and advances in information extraction greatly deepen our understanding of this world. Google search engine services, Dropbox cloud storage, Spotify music recommendation, while we are enjoying the numerous data driven products, some people have to concern themselves with the choice and implementation of data models.
 
The long existed relational data model is proved efficient in handling a single representation of an aggregate entity. But when the relationships between entities get increasingly complicated, or when multiple views of the domain are desired, this data model becomes inadequate.
 
However, the very nature of the human society is a large network, characterized by rich connections between individuals. With the popularization of Facebook and Twitter, social network analysis comes into the spotlight. People have developed various theories and models for studying the relationships among interacting units. This calls for a better data model that can efficiently implement the analysis and even builds them into data products. And the answer is: graph data model.
 
Motivated by this idea, this project attempts to power social network analysis with graph database. We selects the Meetup.com as our targeted social network because it has several desirable attributes: 1) it is organized around interest groups which reflect trends in industry, academia and people’s recreational life; 2) it is both online and offline, which adds value to the analysis; 3) it has an excellent API which eases the data collection. And we are trying to answer two questions: 1) what’s the Meetup.com social world look like? 2) Can we achieve real time network visual analytics with the help of graph database?



## Prerequisite

* An instanse of Neo4j database(2.1.5)
* A machine with node.js installed




## Simple User Manual

* Extract Neo4j data stored in `/Neo4j/data.zip` to where your Neo4j folder located in you own machine.
Start Neo4j server at  `http://localhost:7474 `

* From the terminal, go to the  `/api ` directory and run  `npm install ` and then excecute  `node app `. The REST API platform can be listened at  `http://localhost:3000 `


* From the terminal, go to the /dashboard directory and run  `npm install ` and then  excecute  `node app `. The meetup dashboard will start at  `http://localhost:5000 `


## Acknowledgement 
* This project is a fork of [kbastiain](https://github.com/kbastani/meetup-analytics/edit/master/README.md) . We would like to thank him for developing and open sourcing the Meetup Analytics platform that inspired our work.

