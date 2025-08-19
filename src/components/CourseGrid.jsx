import React from "react";

const CourseGrid = () => {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    height: '500px',
    width: '500px',
    textAlign: 'center'
  }

  const item1 = {
    gridColumn: '1/3',
    gridRow: '1/2',
  }
  const item2 = {
    gridColumn: '3/5',
    gridRow: '1/2',
  }
  const item3 = {
    gridColumn: '1/2',
    gridRow: '2/3',
  }
  const item4 = {
    gridColumn: '2/4',
    gridRow: '2/3',
  }
  const item5 = {
    gridColumn: '4/5',
    gridRow: '2/3',
  }
  const item6 = {
    gridColumn: '1/2',
    gridRow: '3/4',
  }
  const item7 = {
    gridColumn: '1/2',
    gridRow: '4/5',
  }
  const item8 = {
    gridColumn: '2/3',
    gridRow: '3/5',
  }
  const item9 = {
    gridColumn: '3/5',
    gridRow: '3/4',
  }
  const item10 = {
    gridColumn: '3/5',
    gridRow: '4/5',
  }

  return (
    <div style={gridContainerStyle} className='text-2xl'>
      <div style={item1} className='flex justify-center items-center hover:shadow-lg hover:bg-yellow-300 transition-transform hover:scale-120 hover:rounded-lg'>Web Technologies</div>
      <div style={item2} className='flex justify-center items-center hover:shadow-lg hover:bg-purple-300 transition-transform hover:scale-120 hover:rounded-lg'>Computer Architeture</div>
      <div style={item3} className='flex justify-center items-center hover:shadow-lg hover:bg-purple-300 transition-transform hover:scale-120 hover:rounded-lg'> Discrete Math</div>
      <div style={item4} className='flex justify-center items-center hover:shadow-lg hover:bg-blue-300 transition-transform hover:scale-120 hover:rounded-lg'>Object-Oriented Programming</div>
      <div style={item5} className='flex justify-center items-center hover:shadow-lg hover:bg-red-300 transition-transform hover:scale-120 hover:rounded-lg'>Calculus</div>
      <div style={item6} className='flex justify-center items-center hover:shadow-lg hover:bg-yellow-300 transition-transform hover:scale-120 hover:rounded-lg'>Linear Algebra</div>
      <div style={item7} className='flex justify-center items-center hover:shadow-lg hover:bg-blue-300 transition-transform hover:scale-120 hover:rounded-lg'>Compiler</div>
      <div style={item8} className='flex justify-center items-center hover:shadow-lg hover:bg-red-300 transition-transform hover:scale-120 hover:rounded-lg'>Data Structures</div>
      <div style={item9} className='flex justify-center items-center hover:shadow-lg hover:bg-purple-300 transition-transform hover:scale-120 hover:rounded-lg'>Design Patterns</div>
      <div style={item10} className='flex justify-center items-center hover:shadow-lg hover:bg-yellow-300 transition-transform hover:scale-120 hover:rounded-lg'>System Design</div>
    </div>
  )
}

export default CourseGrid;