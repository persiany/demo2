import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white shadow">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold">Expert Finder</div>
          <div>
            <button className="bg-gray-900 hover:bg-gray-700 text-white rounded-md px-4 py-2 text-sm mr-2">
              Login
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md px-4 py-2 text-sm">
              Signup
            </button>
          </div>
        </div>
        <div className="px-6 pb-12">
          <form className="max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden flex">
            <input
              type="text"
              placeholder="Search experts"
              className="appearance-none rounded-l-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-r-lg">
              Search
            </button>
          </form>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8">Featured Experts</h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-white rounded-md shadow hover:shadow-md">
              <img src="https://source.unsplash.com/random/300x300" alt="Expert" className="w-full h-48 object-cover rounded-t-md" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Expert Name</h3>
                <p className="text-gray-700 text-base">Expert Description</p>
                <div className="flex items-baseline justify-between mt-4">
                  <div className="text-xl font-bold">$150/hr</div>
                  <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md px-4 py-2 text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow hover:shadow-md">
              <img src="https://source.unsplash.com/random/300x300" alt="Expert" className="w-full h-48 object-cover rounded-t-md" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Expert Name</h3>
                <p className="text-gray-700 text-base">Expert Description</p>
                <div className="flex items-baseline justify-between mt-4">
                  <div className="text-xl font-bold">$150/hr</div>
                  <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md px-4 py-2 text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow hover:shadow-md">
              <img src="https://source.unsplash.com/random/300x300" alt="Expert" className="w-full h-48 object-cover rounded-t-md" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Expert Name</h3>
                <p className="text-gray-700 text-base">Expert Description</p>
                <div className="flex items-baseline justify-between mt-4">
                  <div className="text-xl font-bold">$150/hr</div>
                  <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md px-4 py-2 text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow hover:shadow-md">
              <img src="https://source.unsplash.com/random/300x300" alt="Expert" className="w-full h-48 object-cover rounded-t-md" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Expert Name</h3>
                <p className="text-gray-700 text-base">Expert Description</p>
                <div className="flex items-baseline justify-between mt-4">
                  <div className="text-xl font-bold">$150/hr</div>
                  <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md px-4 py-2 text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold mb-8">Expert Name</h2>
              <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md px-4 py-2 text-sm">
                Schedule an Appointment
              </button>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img src="https://source.unsplash.com/random/300x300" alt="Expert" className="w-full h-80 object-cover rounded-md shadow-lg" />
                <div className="flex items-center mt-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="https://source.unsplash.com/random/50x50" alt="Expert" className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Expert Name</h4>
                    <div className="text-gray-700">Expert Title</div>
                  </div>
                </div>
                <div className="flex items-center mt-4 space-x-4">
                  <div className="text-gray-700 font-bold text-lg">4.5</div>
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1l2.928 5.672 6.218.904-4.5 4.154 1.058 6.167L10 15.347l-5.704 3.224 1.058-6.167-4.5-4.154 6.218-.904z" />
                    </svg>
                    <div className="text-gray-700">28 Reviews</div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 md:ml-8 flex-1">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">About Expert</div>
                </div>
                <div className="text-gray-700 text-lg mt-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                  ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                  vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Availability</h3>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th></th>
                        <th className="py-2 px-4">Monday</th>
                        <th className="py-2 px-4">Tuesday</th>
                        <th className="py-2 px-4">Wednesday</th>
                        <th className="py-2 px-4">Thursday</th>
                        <th className="py-2 px-4">Friday</th>
                        <th className="py-2 px-4">Saturday</th>
                        <th className="py-2 px-4">Sunday</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-200">
                        <th className="py-2 px-4">Morning</th>
                        <td className="py-2 px-4">Available</td>
                        <td className="py-2 px-4">Unavailable</td>
                        <td className="py-2 px-4">Available</td>
                        <td className="py-2 px-4">Available</td>
                        <td className="py-2 px-4">Available</td>
                        <td className="py-2 px-4">Unavailable</td>
                        <td className="py-2 px-4">Unavailable</td>
                      </tr>
                      <tr>
                        <th className="py-2 px-4">Afternoon</th>
                        <td className="py-2 px-4">Unavailable</td>
                        <td className="py-2 px-4">Available</td>
                        <td className="py-2 px-4">Available</td>
                        <td className="py-2 px-4">Unavailable</td>
                        <td className="py-2 px-4">Available</td>
                        <td className="py-2 px-4">Unavailable</td>
                        <td className="py-2 px-4">Unavailable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Rate and Reviews</h3>
                  <div className="flex items-center space-x-4">
                    <div className="text-gray-700 font-bold text-lg">4.5</div>
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1l2.928 5.672 6.218.904-4.5 4.154 1.058 6.167L10 15.347l-5.704 3.224 1.058-6.167-4.5-4.154 6.218-.904z" />
                      </svg>
                      <div className="text-gray-700">28 Reviews</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src="https://source.unsplash.com/random/50x50" alt="Expert" className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold">Reviewer Name</h4>
                        <div className="text-gray-700">Reviewed on 01 Jan 2022</div>
                      </div>
                    </div>
                    <div className="text-gray-700">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Expert Finder</div>
          <div>
            © 2022 All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;