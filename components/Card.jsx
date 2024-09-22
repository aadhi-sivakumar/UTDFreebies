import React from 'react'

function Card() {
  return (
    <div className="p-8 justify-between">
      <div className="h-[400px] w-[400px] rounded-md border border-black bg-white shadow-xl">
        <img
            className="mx-auto my-4 h-[200px] w-4/5 rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1542362567-b07e54358753?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
        />
        <div className="mx-4">
            <h1 className="poppins-bold text-2xl text-primary">Used Car</h1>
            <p className="inter-regular text-1xl text-gray-400">5 Interested | listed 5 days ago</p>
            <br></br>
            <p className="inter-regular text-1xl">Mad at my girlfriend so selling her car lol.</p>
            <div className="py-6 flex gap-6 justify-between pb-5">
                <p className="text-emerald-600 inter-semibold text-1.5xl">AVAILABLE</p>
                <div>
                    <button className="inter-semibold border-4 border-primary h-8 w-24 rounded-lg border text-primary ">BID</button>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Card
