const Error = () => {
  const handleReturnHome = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <div className="flex h-screen">
        <div className="m-auto text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
          <p className="text-lg text-gray-800 mb-8">
            The page you requested cannot be found.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleReturnHome}
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
