import React, { useState } from 'react';
import clsx from 'clsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";


const bookedA = [
  {
    name: 'Block A',
    occupied: [],
  },
]

const bookedB = [
  {
    name: 'Block B',
    occupied: [],
  },
]

const seatsA = ['1A','1B','1C','1D','1E','1F','2A','2B','2C','2D','2E','2F','3A','3B','3C','3D','3E','3F','4A','4B','4C','4D','4E','4F','5A','5B','5C','5D','5E','5F','6A','6B','6C','6D','6E','6F','7A','7B','7C','7D','7E','7F','8A','8B','8C','8D','8E','8F','9A','9B','9C','9D','9E','9F','10A','10B','10C','10D','10E','10F',]

const seatsB = ['1A','1B','1C','1D','1E','1F','1G','1H','1I','2A','2B','2C','2D','2E','2F','2G','2H','2I','3A','3B','3C','3D','3E','3F','3G','3H','3I','4A','4B','4C','4D','4E','4F','4G','4H','4I','5A','5B','5C','5D','5E','5F','5G','5H','5I','6A','6B','6C','6D','6E','6F','6G','6H','6I','7A','7B','7C','7D','7E','7F','7G','7H','7I','8A','8B','8C','8D','8E','8F','8G','8H','8I','9A','9B','9C','9D','9E','9F','9G','9H','9I','10A','10B','10C','10D','10E','10F','10G','10H','10I',]

export default function Booking2() {
  const [selectedMovie, setSelectedMovie] = useState(bookedA[0])
  const [selectedSeats, setSelectedSeats] = useState([])
  const [selectedMovieB, setSelectedMovieB] = useState(bookedB[0])
  const [selectedSeatsB, setSelectedSeatsB] = useState([])

  return (
    <div className="booking2">
      <ListA />
      <ShowCase />
      <CinemaA
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />
      <ListB /> 
      <ShowCase />
      <CinemaB 
      movie={selectedMovieB}
      selectedSeats={selectedSeatsB}
      onSelectedSeatsChange={selectedSeatsB => setSelectedSeatsB(selectedSeatsB)}/>
    </div>
  )
}

function ListA() {
  return (
    <div className="Movies">
      <h1>Block A</h1>
    </div>
  )
}

function ListB() {
  return (
    <div className="Movies">
      <h1>Block B</h1>
    </div>
  )
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat selected" /> <medium>Selected</medium>
      </li>
      <li>
        <span className="seat occupied" /> <medium>Occupied</medium>
      </li>
    </ul>
  )
}

function CinemaA({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }
  return (
    <div className="Cinema">

      <div className="seatsA">
        {seatsA.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          const block = 'A'
          return (
            <><a className="rr" href={block+seat}>
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        
                      }
                    }
              }
            ><h6>{seat}</h6></span></a><style>{"\
            .rr{\
              color:black;\
              text-decoration:none;\
            }\
          "}</style></>
          )
        })}
      </div>
    </div>
  )
}

function CinemaB({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }
  return (
    <div className="Cinema">

      <div className="seatsB">
        {seatsB.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          const blockB ='B'
          return (
            <><a className="rr" href={blockB+seat}>
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seatB',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            ><h6>{seat}</h6></span>
            </a><style>{"\
            .rr{\
              color:black;\
              text-decoration:none;\
            }\
          "}</style></>
          )
        })}
      </div>
    </div>
  )
}
