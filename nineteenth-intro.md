## Introduction
This project maps extracted mentions of places/cities from the [Corpus of German-Language Fiction](https://figshare.com/articles/Corpus_of_German-Language_Fiction_txt_/4524680) in 19<sup>th</sup> Century German Literature. 

### Why? 
The 19th Century was a time of remarkable change. As the Industrial Revolution marched on, the world started to feel noticeably smaller. This feeling was only intensified by the efforts of colonisation by several nations as well as growing waves of immigration from Europe to the Americas. The map makes visible the remarkable range of places imagined in the literature of the time.

## Disclaimer
Please note that this project is currently in a state of Proof of Concept. The pitfalls of NER Tagging led to a rather brute-force extraction using the Python library [Geotext](https://geotext.readthedocs.io/en/latest/). As expected, the output showed considerable issues with ambigious names and terms and had to be cleaned to filter out (clearly identifiable) false positives. Ambiguities are also a rather annoying problem when it comes to determining which place is meant, e.g. Memphis in the USA or in Egypt. In these cases, samples were taken from the corpus to determine which place might be more likely. Furthermore, the number of mentions might be severely inflated by singular works and should be taken with a grain of salt.