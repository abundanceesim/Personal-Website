
/**
 * Array of course objects.
 */
const levelCourses =[
    {
        code: "<h3>CST8101</h3>",
        title: "<h3>Computer Essentials</h3>",
        image: "<img src='course-images/CST8101.jpg' height='200' alt='CST8101-img'></img>",
        level: 1,
        description: "<p class='description'>The essentials of computer software, hardware, and laptop management form the foundation for building further technical programming skills.</p>"
    },
    {
        code: "<h3>CST8215</h3>",
        title: "<h3>Introduction to Database</h3>",
        image: "<img src='course-images/CST8215.png' height='200' alt='CST8215-img'></img>",
        level: 1,
        description: "<p class='description'>Students learn the fundamentals of Relational Databases design using Entity Relation diagrams, and use SQL to create, modify and query a database.</p>"
    },
    {
        code: "<h3>CST8116</h3>",
        title: "<h3>Introduction to Computer Programming</h3>",
        image: "<img src='course-images/CST8116.png' height='200' alt='CST8116-img'></img>",
        level: 1,
        description: "<p class='description'>Possessing the fundamentals of logic, problem-solving and programming language structure provides a solid foundation for further study in the field.</p>"
    },
    {
        code: "<h3>CST8284</h3>",
        title: "<h3>Object Oriented Programming (Java)</h3>",
        image: "<img src='course-images/CST8284.jpg' height='200' alt='CST8284-img'></img>",
        level: 2,
        description: "<p class='description'>Learn object oriented programming methodology using the Java programming language. Object oriented concepts, such as encapsulation, inheritance, abstraction and polymorphism are covered and reinforced with practical applications. </p>"
    },
    {
        code: "<h3>ENL2019T</h3>",
        title: "<h3>Technical Communication for Engineering Technologies</h3>",
        image: "<img src='course-images/ENL2019T.jpg' height='200' alt='ENL2019T-img'></img>",
        level: 2,
        description: "<p class='description'> Students are exposed to exercises and assignments designed to foster independent and collaborative critical thinking, research, writing, visual communication and presentation skills related to technical topics.</p>"
    },
    {
        code: "<h3>MAT8001C</h3>",
        title: "<h3>Technical Mathematics for Computer Science</h3>",
        image: "<img src='course-images/MAT8001C.jpg' height='200' alt='MAT8001C-img'></img>",
        level: 1,
        description: "<p class='description'>Students investigate computer number systems in addition to Boolean algebra and logic to help solve problems involving computer systems. </p>"
    },
    {
        code: "<h3>CST8102</h3>",
        title: "<h3>Operating System Fundamentals (Gnu/Linux)</h3>",
        image: "<img src='course-images/CST8102.jpg' height='200' alt='CST8102-img'></img>",
        level: 2,
        description: "<p class='description'>Learn the basic concepts and components of Operating Systems (OS), and how they function and interact with hardware and software components</p>"
    },
    {
        code: "<h3>CST8300</h3>",
        title: "<h3>Achieving Success in  Changing Environments</h3>",
        image: "<img src='course-images/CST8300.png' height='200' alt='CST8300-img'></img>",
        level: 1,
        description: "<p class='description'>Students apply critical thinking and decision-making tools to help resolve some of the important issues in our complex society with its competing interests.</p>"
    },
    {
        code: "<h3>CST8285</h3>",
        title: "<h3>Web Programming</h3>",
        image: "<img src='course-images/CST8285.png' height='200' alt='CST8285-img'></img>",
        level: 2,
        description: "<p class='description'>Learn the basics of web programming, website design and implementation. JavaScript, HTML5, and PHP are used to explore web-based solutions to problems of increasing interactivity and complexity. Lectures are reinforced by practical assignments that encourage students to construct and maintain their own websites.</p>"
    },
    {
        code: "<h3>ENL1813T</h3>",
        title: "<h3>Communications I</h3>",
        image: "<img src='course-images/ENL1813T.png' height='200' alt='ENL1813T-img'></img>",
        level: 1,
        description: "<p class='description'>Students develop and strengthen communication skills that contribute to success in both educationaland workplace environments.</p>"
    },
    {
        code: "<h3>CST2355</h3>",
        title: "<h3>Database Systems</h3>",
        image: "<img src='course-images/CST2355.png' height='200' alt='CST2355-img'></img>",
        level: 2,
        description: "<p class='description'>Students obtain hands-on experience with advanced engineering modeling tools along with SQL, SQL scripts and programming with Oracle's PL/SQL blocks. </p>"
    },
    {
        code: "<h3>HOS2228</h3>",
        title: "<h3>Wine, Food and Culture</h3>",
        image: "<img src='course-images/HOS2228.png' height='200' alt='HOS2228-img'></img>",
        level: 2,
        description: "<p class='description'> Students acquire a sense of the customs of their culture and those of others. Through comparison, observation, discussion, and reflection, students discover something found in all cultures: the importance of food and drink.</p>"
    }
    
] 
displayCourses();


function sortDescending(){
    levelCourses.sort(function(a, b){return b.level - a.level});
    displayCourses();
    /* document.getElementById("levelOne").style.display="none";
    document.getElementById("levelTwo").style.display="none"; */
}

function sortAscending(){
    levelCourses.sort(function(a, b){return a.level - b.level});
    displayCourses();
    /* document.getElementById("levelOne").style.display="none";
    document.getElementById("levelTwo").style.display="none"; */
}

function sorted(){
    var getSortValue = document.getElementById("sort");
    if(getSortValue.value === "level1"){
        sortAscending();
    }
    else if(getSortValue.value === "level2"){
        sortDescending();
    }
}

function filterLevelOne(course){  //filters level 1 courses
    return (course.level <= 1);
}

function filterLevelTwo(course){ //filters level 2 courses
    return (course.level >= 2);
}

var levelOneOnly = levelCourses.filter(filterLevelOne); //creates an array of level 1 courses only
var levelTwoOnly = levelCourses.filter(filterLevelTwo); //creates an array of level 2 courses only

function displayLevelOneOnly(){ //display level one courses only
    document.getElementById("levelOne").innerHTML = 
    "<h2>Level: 1</h2>" + levelOneOnly[0].code + levelOneOnly[0].title + levelOneOnly[0].image + levelOneOnly[0].description + "<hr>" +
    levelOneOnly[1].code + levelOneOnly[1].title + levelOneOnly[1].image + levelOneOnly[1].description + "<hr>" +
    levelOneOnly[2].code + levelOneOnly[2].title + levelOneOnly[2].image + levelOneOnly[2].description + "<hr>" +
    levelOneOnly[3].code + levelOneOnly[3].title + levelOneOnly[3].image + levelOneOnly[3].description + "<hr>" +
    levelOneOnly[4].code + levelOneOnly[4].title + levelOneOnly[4].image + levelOneOnly[4].description + "<hr>" +
    levelOneOnly[5].code + levelOneOnly[5].title + levelOneOnly[5].image + levelOneOnly[5].description 
   
}
function displayLevelTwoOnly(){ //display level two courses only
    document.getElementById("levelOne").innerHTML = 
    "<h2>Level: 2</h2>" + levelTwoOnly[0].code + levelTwoOnly[0].title + levelTwoOnly[0].image + levelTwoOnly[0].description + "<hr>" +
    levelTwoOnly[1].code + levelTwoOnly[1].title + levelTwoOnly[1].image + levelTwoOnly[1].description + "<hr>" +
    levelTwoOnly[2].code + levelTwoOnly[2].title + levelTwoOnly[2].image + levelTwoOnly[2].description + "<hr>" +
    levelTwoOnly[3].code + levelTwoOnly[3].title + levelTwoOnly[3].image + levelTwoOnly[3].description + "<hr>" +
    levelTwoOnly[4].code + levelTwoOnly[4].title + levelTwoOnly[4].image + levelTwoOnly[4].description + "<hr>" +
    levelTwoOnly[5].code + levelTwoOnly[5].title + levelTwoOnly[5].image + levelTwoOnly[5].description 
   
}
/* function levelOneFiltered(){ //function referenced on homepage, which does the actual work.
    displayLevelOneOnly();
    
}
function levelTwoFiltered(){ //function referenced on homepage, which does the actual work.
    displayLevelTwoOnly();
    
}
 */
function filtered(){   //filter function referenced on courses page.
    var getFilterValue = document.getElementById("filter");
    if (getFilterValue.value === "Level 1"){
        displayLevelOneOnly();
    }
    else{
        displayLevelTwoOnly();
    }
}

function displayCourses() {   //displays all the courses
    document.getElementById("levelOne").innerHTML = 
    levelCourses[0].code + levelCourses[0].title + levelCourses[0].image + levelCourses[0].description + "<hr>" +
    levelCourses[1].code + levelCourses[1].title + levelCourses[1].image + levelCourses[1].description + "<hr>" +
    levelCourses[2].code + levelCourses[2].title + levelCourses[2].image + levelCourses[2].description + "<hr>" +
    levelCourses[3].code + levelCourses[3].title + levelCourses[3].image + levelCourses[3].description + "<hr>" +
    levelCourses[4].code + levelCourses[4].title + levelCourses[4].image + levelCourses[4].description + "<hr>" +
    levelCourses[5].code + levelCourses[5].title + levelCourses[5].image + levelCourses[5].description + "<hr>" +
    levelCourses[6].code + levelCourses[6].title + levelCourses[6].image + levelCourses[6].description + "<hr>" +
    levelCourses[7].code + levelCourses[7].title + levelCourses[7].image + levelCourses[7].description + "<hr>" +
    levelCourses[8].code + levelCourses[8].title + levelCourses[8].image + levelCourses[8].description + "<hr>" +
    levelCourses[9].code + levelCourses[9].title + levelCourses[9].image + levelCourses[9].description + "<hr>" +
    levelCourses[10].code + levelCourses[10].title + levelCourses[10].image + levelCourses[10].description + "<hr>" +
    levelCourses[11].code + levelCourses[11].title + levelCourses[11].image + levelCourses[0].description;
}

const searchBar = document.getElementById("search-bar");

/*searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const searchedCourses = levelCourses.filter((course) =>{
        return(
            course.title.includes(searchString) //|| course.code.includes(searchString)
        );
    });
    console.log(searchedCourses);
    displayCourses(searchedCourses);
}); */

/*function displaySearchedCourses(){
    var container = document.getElementById("levelOne");
    return container += innerHTML(levelCourses.forEach(function disp(element){code + title + image + description}));
} */


/* function displaySearchedCourses(){
    document.getElementById("levelOne").innerHTML = courses;
    for(i = 0; i < levelCourses.length; i++){
        courses+=levelCourses[i].code + levelCourses[i].title +levelCourses[i].image +levelCourses[i].title + "<hr>";
    }
} */

function displaySearchedCourses(){  
    for(i = 0; i < levelCourses.length; i++){
        document.getElementById("levelOne").innerHTML+=levelCourses[i].code + levelCourses[i].title +levelCourses[i].image +levelCourses[i].description + "<hr>";
    }
}
 

function displaySearch() {

    alert(levelCourses[0].title);
    var input, filter, search, courses, i;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    courses = document.getElementById("levelOne");
    //li = ul.getElementsByTagName("li");
    for (i = 0; i < levelCourses.length; i++) {
      search = courses[i].getElementsByTagName("levelOne")[0];
      if (search.innerHTML.toUpperCase().indexOf(filter) > -1) {
        levelCourses[i].style.display = "";
      } else {
        levelCourses[i].style.display = "none";
      }
    }
  }
/*function search() {

}*/