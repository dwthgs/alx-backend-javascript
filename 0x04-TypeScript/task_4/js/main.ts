/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Teacher.ts" />

export const cpp = new Subjects.Cpp()
export const java = new Subjects.Java()
export const react = new Subjects.React()
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
}

cpp.setTeacher(cTeacher)
java.setTeacher(cTeacher)
react.setTeacher(cTeacher)

console.log(`C++ \n${cpp.getRequirements()}\n${cpp.getAvailableTeacher()}`)
console.log(`Java \n${java.getRequirements()}\n${java.getAvailableTeacher()}`)
console.log(
  `React \n${react.getRequirements()}\n${react.getAvailableTeacher()}`
)
