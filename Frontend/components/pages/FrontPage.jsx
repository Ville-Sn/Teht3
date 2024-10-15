import {useNavigate} from 'react-router-dom'
import React from 'react'
import AthleteCardList from '../AthleteCardList'


function FrontPage() {

  const navigate = useNavigate();

  return (
    <>
      <section className="bg-dark text-light p-5 text-start">
        <div className="container d-sm-flex">
            <div>
                <h1>Welcome to Athlete lister</h1>
                <p className="lead">The best place to find information about athletes.
                    below you can see the most recent added athletes.
                </p>
            </div>
            <img className="img-fluid w-50 h-50" alt="" src="https://via.placeholder.com/400" />
        </div>
      </section>
    </>
  )
}

export default FrontPage
