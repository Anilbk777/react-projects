function Card({userName, profession}) {
    return (
      <>
        <div className="border-2 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ... ">
          <img
            className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
            src="https://images.unsplash.com/photo-1776356682366-18724aa15bec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
                        <p className="text-lg font-semibold text-black">{userName}</p>
                        <p className="font-medium text-gray-500">{profession}</p>
            </div>
            <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
              Message
            </button>
          </div>
        </div>
      </>
    );
}

export default Card