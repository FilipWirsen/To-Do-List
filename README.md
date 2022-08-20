# To Do List

The main goal with this site is to help people organize their day to day life. 
This site will target people that have alot of things to get done on a daily basis and need a way to keep track of their tasks.
The site will help users to set up daily tasks/goals and keep track of whats been done and what needs to get done.

![Responsive Img](assets/images/responsive-img.png)

## Features

-  __The Add Task Feature__

    - Featured on the top of the page, this feature allows users to input their tasks that they need to get done and then add it to a list by either pressing the "Add" button or the enter key.
    The container also shows users what they can do and how the diffrent buttons on each item works.

    ![Add Task](assets/images/addtask.png)


# Tasklist

Each item in the tasklist has 3 diffrent buttons witch are all diffrent functions

![Task List](assets/images/tasklist.png)

- __The Edit Task Feature__
    The first button on each item is the edit task button.
    When a user clicks this they get a modal on their screen where they can edit the task name. Once the text is changed and the "Save changes" button is clicked the task updates to the new task.

    ![Edit Task](assets/images/edit-task.png)

- __The Check Task Feature__

    - Next to the edit task button there is a checkmark witch users can press to check a task off. This looks like this:

    ![Edit Task](assets/images/check-task.png)

    - The button can be clicked again to remove the lind going through the task text.

- __The Remove Task Feature__
    - The last button on each task is showing as an X This buttons deletes the tasks

## Web storage

- __Local Storage__

    - I used local storage to prevent the task list being removed when the browser is refreshed.
    - This allows users to keep their task list saved even if they refresh the website or accidently close it.

## Color Scheme

Since the goal is to have users use the site during the morning hours i wanted to have clean and relaxing colors witch is why i used alot of green colors for most of the project.

## Testing

I've checked so the site works on diffrent browsers like Google Chrome, Firefox and Safari. I've also checked so the site works on diffrent screen sizes like an Iphone or Ipad.

To make sure the site works and that i didnt have any unkown bugs i asked three of my friends to use it. I told them to enter atlest five tasks each and to use all the functions (edit, check, delete). They used the site for a whole day and the results i got was that everything was working as excepted.

### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - When passing the JavaScript code through the official site [Jshint validator](https://jshint.com/) i found one warning witch was the following : Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (closeTask, i). I fixed this by
      - The following metrics were returned: 
      - There are 7 functions in this file.
      - Function with the largest signature take 1 arguments, while the median is 0.
      - Largest function has 12 statements in it, while the median is 4.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 2.



# Bugs

### When working on this project i ran into a few bugs but nothing that was too hard to fix.

- When creating the function to toggle the class “checked” for tasks that have been completed I couldn’t get it to work when using event.target.tagName(‘li’). After some research I found out that the older versions of HTML back when JavaScript was created used all caps for tag names. With this new information I could easily go back to my code and change the ‘li’ to ‘LI’ witch made it work.

- When not typing anything in the input-field and trying to add the task anyways the array witch kept all user inputs still got updated with an empty string. I fixed this by moving the .push() method so it only ran if the input field wasn't empty.


# Deployment 

This site was deployed to GitHub pages. To deploy the page I followed the steps bellow:

1. Visit your repositories page on Github and select the one you want to deploy
2. Navigate to the “settings” menu and click on “Pages”
3.  Under the “source” menu you can click on the dropdown menu that has the text “None” in it. 
4. Select the main branch and click “Save”
5. Once the branch has been selected, the page will be automatically refreshed with a ribbon to display if it was a successful deployment.

The live link can be found here - https://filipwirsen.github.io/To-Do-List/


# Credits

- For the color scheme i took alot of help from this article that helped me learn about what diffrent colors stand for in webdesign [Article](https://99designs.com/blog/creative-inspiration/psychology-color-web-design/)

- As always [Stack Overflow](https://stackoverflow.com/) helped me to understand diffrent concepts like localStorage for example
- My mentor Akshat also helped me with understanding how to use and implement diffrent concepts such as localstorage.