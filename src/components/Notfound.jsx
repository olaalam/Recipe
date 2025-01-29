import React from 'react'
import error from "../assets/404.jpg"
export default function Notfound() {
  return (
    <div className="container flex justify-center items-center">
      <img src={error} alt="NotFound" />
    </div>
  )
}
