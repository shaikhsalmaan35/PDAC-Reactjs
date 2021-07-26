import { CoursesReducer } from "../Reducers/CoursesReducer";
import { course } from "./Course";
export const courses=()=>{
    console.log(CoursesReducer);
  return(
      <div className="App">
          <table>
              <tr>
                  {CoursesReducer.Data.map((item) =>
                  <td>
                      <Course
                      courseName={item.courseName}
                      instituteName={item.courseName}
                      contact={item.contact}
                      city={item.city}
                      />

                  </td>
                  )}           
              </tr>
          </table>
      </div>
  );
}