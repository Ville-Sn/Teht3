import React from 'react'
import AthleteCardList from '../AthleteCardList'

function AthleteList() {
  return (
    <>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <h1>This is athlete list</h1>
        <button className="btn btn-primary ms-5" onClick={() => window.location.href = '/AthleteAdd'}>
          Add Athlete
        </button>
      </div>
      <div className="container">
        <AthleteCardList />
      </div>
    </>
  )
}

export default AthleteList
