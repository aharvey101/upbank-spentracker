import React from 'react'
import Doughnut from '../Doughnut'

function Dashboard({ data }) {
  // manipulate data 

  function getCategories() {
    const categories = data.map((transaction) => {
      if (!transaction.relationships.category.data || transaction.relationships.category.data === undefined) {
        return
      }
      return transaction.relationships.category.data.id
    })
    const filtered = categories.filter(category => {
      return category !== undefined
    })

    function getWordCount(array) {
      return array.reduce((prev, nxt) => {
        prev[nxt] = (prev[nxt] + 1) || 1;
        return prev;
      }, {});
    }

    const count = getWordCount(filtered)
    const newCount = Object.values(count)
    const labels = Object.keys(count)

    //random colors =
    function generateRandomColor() {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return `#${randomColor}`
    }
    const colors = labels.map((label) => {
      return generateRandomColor()
    })

    const moreColors = labels.map((label) => {
      return generateRandomColor()
    })
    const categoriesState = {
      labels: labels,
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: colors,
          hoverBackgroundColor: moreColors,
          data: newCount
        }
      ]
    }
    return categoriesState
  }




  return (
    <div className=" ml-10 mr-10 mx-auto m-10 rounded shadow-lg bg-black500  ">

      <Doughnut data={getCategories()}></Doughnut>


    </div >
  )
}

export default Dashboard