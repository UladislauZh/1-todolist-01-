import React from "react";

// type NewComponentType = {
//   students: StudentType[];
// };

// type StudentType = {
//   id: number;
//   name: string;
//   age: number;
// };

// export const NewComponent = (props: NewComponentType) => {
//   return (
//     <ul>
//       {props.students.map((objectFromStudentArray, index) => {
//         return (
//           <li key={objectFromStudentArray.id}>
//             <span>{objectFromStudentArray.name}</span>
//             <span>age: {objectFromStudentArray.age}</span>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

type TopCarsPropsType = {
  topCars: { manufacturer: string; model: string }[];
};

export const NewCars = (props: TopCarsPropsType) => {
  return (
    <table>
      {props.topCars.map((TopCarsDeutschland, index) => {
        return (
          <>
            <tr key={index}>
              <th>
                <span>manufactured: {TopCarsDeutschland.manufacturer}</span>
              </th>
            </tr>

            <tr key={index}>
              <th>
                <span>model: {TopCarsDeutschland.model}</span>
              </th>
            </tr>
          </>
        );
      })}
    </table>
  );
};
