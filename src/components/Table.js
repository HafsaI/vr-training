import React from 'react'

function Table() {
  return (
    <table  cellPadding='10' style={{borderRadius :'20px', margin: '0 auto', boxShadow:'0px 0px 8px 0px rgba(0,0,0,0.2)'}}>
        <thead>
          <tr>
            <th>Score</th>
            <th>Description</th>
            <th>Understandable for which grade level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>90.0-100.0</td>
            <td>Very easy</td>
            <td>5th grade</td>
          </tr>
          <tr>
            <td>80.0-89.9</td>
            <td>Easy</td>
            <td>6th grade</td>
          </tr>
          <tr>
            <td>70.0-79.9</td>
            <td>Fairly easy</td>
            <td>7th grade</td>
          </tr>
          <tr>
            <td>60.0-69.9</td>
            <td>Standard/Plain English</td>
            <td>8th &amp; 9th grade</td>
          </tr>
          <tr>
            <td>50.0-59.9</td>
            <td>Fairly difficult</td>
            <td>10th to 12th grade</td>
          </tr>
          <tr>
            <td>30.0-49.9</td>
            <td>Difficult</td>
            <td>College</td>
          </tr>
          <tr>
            <td>0.0-29.9</td>
            <td>Very difficult</td>
            <td>College graduate</td>
          </tr>
        </tbody>
      </table>
  )
}

export default Table