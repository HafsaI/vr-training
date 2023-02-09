import React, { Component } from 'react'

function History(){

  return (
    <div class="wrapper">
      <div class="tabs">
        <div class="tab" id='divTab1'>
          <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch"/>
          <label for="tab-1" class="tab-label">Last Session Report</label>
          <div class="tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis orci sed dui placerat efficitur a at lorem. Suspendisse feugiat, massa in placerat tincidunt, augue urna tempor urna, vitae congue sapien massa in leo. Nunc id molestie tellus, ac volutpat enim. Nam at pulvinar purus. Vestibulum cursus tempus turpis sit amet porta. Aenean mattis felis eget dui porttitor placerat. Sed facilisis feugiat nunc ut aliquam. Nunc cursus mattis rutrum. Etiam condimentum a ex vel cursus.
          </div>
        </div>
        <div class="tab">
          <input type="radio" name="css-tabs" id="tab-2" class="tab-switch"/>
          <label for="tab-2" class="tab-label">Overall Progress Report</label>
          <div class="tab-content">
            <h4>Listenability</h4>
          </div>
        </div>
      </div>
    </div>
    )
}


export default History