import React from 'react'

function FeaturedItem() {
  return (
    <div className="mx-auto flex w-screen max-w-screen-lg flex-col items-center py-8">
      <div className="w-1/3">
        <h1 className="text-2xl poppins-bold text-center">Trending Item</h1>
        <hr className= "mx-auto mb-4 mt-2 w-1/2 border-black "></hr>
      </div>
      <div className="mx-auto h-fit w-fit rounded-lg border border-black bg-white flex gap-6 p-6">
        <img
            className="bg-blue h-[250px] w-[400px] rounded-lg bg-blue-500"
            src="https://t3.ftcdn.net/jpg/02/34/95/64/360_F_234956425_JFdJ1zSitfgwvJx5TD9xbXlOBOTgeqKn.jpg"
            alt=""
        />
        <div>
            <h1 className="poppins-bold text-2xl text-primary">Used Bike</h1>
            <p className="inter-regular text-1xl text-gray-400">3 Interested | listed 10 days ago</p>
            <br></br>
            <p className="inter-regular text-1xl">Tbh I never knew how to ride a bike so this was kinda a decoration piece. Really just tryna get rid of it. There's a stain on the seat, so I might deep clean it if I were you.</p>
            <div className="py-6 flex gap-6 justify-between">
                <p className="text-emerald-600 inter-semibold text-1.5xl">AVAILABLE</p>
                <div>
                    <button className="inter-semibold border-4 border-primary h-10 w-24 rounded-lg border text-primary">BID</button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default FeaturedItem
