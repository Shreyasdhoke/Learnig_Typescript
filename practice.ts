// S - Single Responsibility Principle 
// A CLASS SHOULD HAVE ONLY ONE REASON TO CHANGE
// MEANING A CLASS SHOULD HAVE ONLY ONE JOB at a time. 
// EX - For software development we have multiple people doing different thing like designer do designing, tester do testing and developer do development.
// The single responsibility principle declares that a class should only be responsible for a single functionality.


export{}
class School {
    public Student_info() {
      // ...
    }
    public find_result() {
      // ...
    } 
  }


//  to overcome this problem i will create another class


class School {
    public Student_info() {
      // ...
    }
  }
class ResultFinder {
    public find_result() {
      // ...
    }
  }