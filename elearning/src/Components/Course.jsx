import React from "react";
export const Course=({courseName,instituteName,contact,city})=>{
    return(
        <table border="4px">
            <tr>
                <td>course</td>
                <td>:</td>
                <td>{courseName}</td>
            </tr>

            <tr>
                <td>institute</td>
                <td>:</td>
                <td>{instituteName}</td>
            </tr>

            <tr>
                <td>contact</td>
                <td>:</td>
                <td>{contact}</td>
            </tr>

        </table>
    )
}