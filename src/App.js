import React from 'react';
// import laundry from './images/laundry.jpeg';

function App() {
  return (
    <React.Fragment>
      <div className="p-10">
        <div className="bg-black h-full w-full p-10 rounded-lg">
          <div className="bg-white rounded-lg shadow-md h-[600px] w-[500px] p-5">
            {/* <img src="laundry" alt="" /> */}
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-xl font-medium">Login</h1>
              <div className="h-3 bg-black w-[50px] rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
