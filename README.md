# UFOs

## Overview
JavaScript provides a high level of customization used to deliver visual data, such as maps or graphs, and can be as simple or complex as needed. In this project we take a JavaScript file filled with UFO sighting information including information such as date of sighting, city, state, country, and shape of UFO. JavaScript’s visual functionality allows us to display the data on a table, and manipulate the data using filters. To display the data in a tidy manner we use HTML. To spruce up the page a bit we added specific CSS components to the stylesheet. To further customize the website, we use the popular web development framework Bootstrap. Bootstrap allows a programmer to quickly design and customize responsive sites.

## Results
This website is simple and easy to navigate. Whoever is interested in the owner’s thoughts on the subject can easily find a short opening statement to the website upon entering the site. The table of data instantly loads upon entering the site as well, making it readily available for any UFO enthusiast. If a visitor wishes to filter the data, they may be able to do so using the Filter Search section of the website. To give users a better idea of the format they should enter their parameters in, each input box within the filter search section contains a placeholder.
Although a Filter button was part of previous versions of the website, a visitor can now type their parameters into the respective input box and press enter to instantly clean the data to suit their interests. D3.js is a JavaScript library used to manipulate documents based on data. D3 helps bring data to life using HTML and CSS. Adding this simple line of code to the end of the app.js file tells D3 to listen for the event that the site visitor hits the Filter button:
```
d3.selectAll("#filter-btn").on("click", handleClick);
```
Considering we removed the filter button in the most recent version of the site, the code for D3 to listen to for any changes in the filter parameters is as follows:
```
d3.selectAll("input").on("change", updateFilters);
```

This code tells the D3.js library to listen for any input changes within the filter input textboxes, and then calls the updateFilters function that is written within the app.js file.

![image](https://user-images.githubusercontent.com/68082808/95022095-087e4300-0643-11eb-8adc-5e3776f68109.png)
 
After filtering the table to include only sightings in the State of Arizona, the site outputs three data points. 

## Summary

This site is informative, and easy to navigate. However, with a few adjustments it can become enlightening and illuminating. By adding a link to a list of influential individuals relevant to the field of ufology, a visitor of the site may become more invested in its rich history. The site may also benefit from by growing and nurturing a community of individuals interested in what lies beyond. By adding a section on the home page regarding upcoming gatherings, and community events, more people may become more invested in the subject. Adding the site owners social media at the bottom of the site may also increase traffic to and from the website. My last recommendation regarding this sites development has to do with the site owners activity on the site itself. Having a blog on the website is considered to be one of the most effective ways to build engagement with a brand and encourages people to visit the site regularly. Updating the blog with informative, entertaining, and engaging content encourages visitors to keep returning to the site.
Happy Star Gazing!

LinkedIn: linkedin.com/in/amir-eltabakh
Email: amireltabakh22@gmail.com
