import React from 'react';

import { Doughnut } from 'react-chartjs-2'



function Graph(props) {
  //manipulate data
  return (
    <div>
      <Doughnut
        data={props.data}
        defaultFontColor="black"
        options={{
          title: {
            display: true,
            text: 'WHAT I SPEND ON',
            fontSize: 20
          },
          legend: {
            color: '#000000',
            display: true,
            position: 'right',
            labels: {
              fontColor: '#000000'
            }
          },
          responsive: true
        }}
      />
    </div>
  )
}

export default Graph
