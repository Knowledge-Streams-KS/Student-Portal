module.exports = {

  //users
  createUser: require("./users/createUser"),
  getUser: require("./users/getUser"),
  getUserById: require("./users/getUserById"),
  updateUser: require("./users/updateUser"),
  removeUser: require("./users/removeUser"),

  //Students
  createStudent: require("./student/createStudent"),
  getStudent: require("./student/getStudent"),
  getStudentById: require("./student/getStudentById"),
  updateStudent: require("./student/updateStudent"),
  removeStudent: require("./student/removeStudent"),

  //teacher
  createTeacher: require("./teacher/createTeacher"),
  getTeacher: require("./teacher/getTeacher"),
  getTeacherById: require("./teacher/getTeacherById"),
  updateTeacher: require("./teacher/updateTeacher"),
  removeTeacher: require("./teacher/removeTeacher"),

  //Courses
  createCourse: require("./course/createCourse"),
  getCourse: require("./course/getCourse"),
  getCourseById: require("./course/getCourseById"),
  updateCourse: require("./course/updateCourse"),
  removeCourse: require("./course/removeCourse"),

 

};
