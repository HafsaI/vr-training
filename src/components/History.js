import React, { Component } from 'react'

function History(){

  return (
    <div class="wrapper">
      <div class="tabs">
        <div class="tab" id='divTab1'>
          <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch"/>
          <label for="tab-1" class="tab-label">Last Session Report</label>
          <div class="tab-content">

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