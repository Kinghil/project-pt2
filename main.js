name_of_the_studunt_array =[];

function Submit()
{

var display_student_array = [];
for (var j = 1; j<= 4; j++)
{
var name_of_the_student = document.getElementById("name_of_the_student"+j).value
console.log(name_of_the_student);
var lengeth_of_name_of_stundents_array.length_of_name_of_students_array;
name_of_the_student_array.push(name_of_the_student);
}
console.log(name_of_the_student_array);
for(var k = 0;k<length_of_name_of_students_array; k++)
{
    display_student_array.push("<h4>Name -"+ name_of_the_student_array[k] + </h4>)
    console.log (display_student_array);

}

console.log(display_student_array);
document.getElementById("display_name_with_commas") .innerHTML = display_student_array;
var remove_commas = display_student_array.join(" ");
document.getelementbyid("display_name_without_commas"). innerHTML = remove_commas;
document.getelementbyid("submit_button").style.display ="none";
document.getelementbyid("sort_button").style.display = "inine-block";

}
function sorting()

{
name_of_the_student_array.sorting();
console.log(name_of_the_student_array);

var display_student_array = name_of_the_student_array.length_of_name_of_students_array;
console.log(length_of_naem_of_studetn_array);

}