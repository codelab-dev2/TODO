const users = [
  {
    id: 1,
    name: 'Meet',
    email: 'meet@example.com',
    enrolledCourses: [
      { courseId: 101, title: 'React', progress: 80 },
      { courseId: 102, title: 'Node.js', progress: 45 }
    ]
  },
  {
    id: 2,
    name: 'Riya',
    email: 'riya@example.com',
    enrolledCourses: [
      { courseId: 101, title: 'React', progress: 100 },
      { courseId: 103, title: 'MongoDB', progress: 30 }
    ]
  },
  {
    id: 3,
    name: 'Karan',
    email: 'karan@example.com',
    enrolledCourses: []
  }
]

// Task-1

// users.forEach((user) => {
//   console.log('🚀🚀🚀 users name => name :: ', user.name, user.enrolledCourses.length)
// })

//Task-2

const nestedEnrolledCourses = users.map(user => user.enrolledCourses)
const enrolledCourses = nestedEnrolledCourses.flat()
const courseNames = enrolledCourses.map(enrolledCourse => enrolledCourse.title)
console.log('🚀🚀🚀 courseName => courseName :: ', courseNames)

const finalCourseNames = []

courseNames.forEach((courseName) => {

  const item = finalCourseNames.find((finalCourseName) => finalCourseName === courseName)
  // if (item) {
  //
  // } else {
  //   finalCourseNames.push(courseName)
  // }


  // if (item !== courseName) {
  //   finalCourseNames.push(courseName)
  // }

  if (!item) {
    finalCourseNames.push(courseName)
  }

})

console.log('🚀🚀🚀 finalCourseNames => finalCourseNames :: ', finalCourseNames)



//Task-3

// const user = users.filter((user) => user.enrolledCourses.find(a => a.progress > 50))
// console.log('🚀🚀🚀 user => user :: ', JSON.stringify(user,null,1))

//Task-4

// const user1 = users.find(( user ) =>  user.enrolledCourses.find(enrolledCourse => enrolledCourse.title==='React' && enrolledCourse.progress === 100))
// console.log('🚀🚀🚀 user => user :: ', user1)

//Task-5

// const user3 = users.findIndex((user) => user.name === 'Karan')
// console.log('🚀🚀🚀 findIndex => user3 :: ', user3)

//Task-6

// const count = users.unshift({id: 0, name: 'nevil', email: 'nevil@example.com', enrolledCourses: []})
// console.log('🚀🚀🚀 add users => users :: ', users)
// console.log('🚀🚀🚀 count => count :: ', count)

//Task-7

// const count1 = users.pop();
// console.log('🚀🚀🚀 last user delete account => users :: ', users)
// console.log('🚀🚀🚀 count1 => count1 :: ', count1)

//Task-8

// const user3 = users.find((user) => user.id === 3)
//
// if (user3) {
//   user3.enrolledCourses.push(
//       { courseId: 201, title: 'css', progress: 60 },
//       { courseId: 2005, title: 'HTML', progress: 100 }
//   )
// }
//
// console.log('🚀🚀🚀  =>  :: ', JSON.stringify(users))

//Task-9

// const user1 = users.find((user) => user.id === 1)
// if(user1){
//   user1.enrolledCourses.shift();
// }
// console.log('🚀🚀🚀 remove enrolledCourses => users :: ', users)

//Task-10

// for (let user of users) {
//   const courses = user.enrolledCourses.map(enrolledCourse => enrolledCourse.title)
//   console.log('🚀🚀🚀 course title => en :: ', courses)
// }

//Task-10

// for (let user of users) {
//   for (let enrolledCourse of user.enrolledCourses) {
//     console.log('🚀🚀🚀 enrolledCourse title name => enrolledCourse :: ', enrolledCourse.title)
//   }
// }