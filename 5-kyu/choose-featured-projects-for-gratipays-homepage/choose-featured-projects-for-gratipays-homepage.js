function getFeaturedProjects(allProjects) {
  var featuredProjects = [];
​
  if (allProjects.length <= 10) {
    return allProjects.slice();
  }
​
  var popular = allProjects.filter(function (project) {
    return project.nreceiving_from > 5;
  });
​
  var unpopular = allProjects.filter(function (project) {
    return project.nreceiving_from <= 5;
  });
​
  function shuffle(arr) {
    var result = arr.slice();
​
    for (var i = result.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
​
    return result;
  }
​
  var popularCount = Math.min(7, popular.length);
  var unpopularCount = Math.min(3, unpopular.length);
​
  if (popularCount < 7) {
    unpopularCount = Math.min(10 - popularCount, unpopular.length);
  } else if (unpopularCount < 3) {
    popularCount = Math.min(10 - unpopularCount, popular.length);
  }
​
  featuredProjects = shuffle(popular).slice(0, popularCount)
    .concat(shuffle(unpopular).slice(0, unpopularCount));
​
  return shuffle(featuredProjects);
}