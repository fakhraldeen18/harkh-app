import React from 'react'

const Features = () => {
  return (
    <section className="py-12 bg-white">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">Turn your idea into a startup</h2>
      <p className="text-gray-500 mt-4">
        We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      <div className="flex flex-col items-center">
        <div className="p-4 bg-gray-200 rounded-full mb-4">
          {/* Icon for "Check our team" */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-800"
          >
            {/* Replace this with the actual SVG path */}
            <path
              d="M12 2L12 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Check our team</h3>
        <p className="text-gray-600 mt-2">
          People in this world shun people for being great. For being a bright color. For standing out.
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-sm font-medium text-gray-800 hover:text-gray-900"
        >
          READ MORE →
        </a>
      </div>

      <div className="flex flex-col items-center">
        <div className="p-4 bg-gray-200 rounded-full mb-4">
          {/* Icon for "Support 24/7" */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-800"
          >
            {/* Replace this with the actual SVG path */}
            <path
              d="M12 2L12 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Support 24/7</h3>
        <p className="text-gray-600 mt-2">
          We get insulted by others, lose trust for those others. We get back here to follow my dreams.
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-sm font-medium text-gray-800 hover:text-gray-900"
        >
          READ MORE →
        </a>
      </div>

      <div className="flex flex-col items-center">
        <div className="p-4 bg-gray-200 rounded-full mb-4">
          {/* Icon for "Unlimited revisions" */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-800"
          >
            {/* Replace this with the actual SVG path */}
            <path
              d="M12 2L12 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Unlimited revisions</h3>
        <p className="text-gray-600 mt-2">
          The time is now to be okay to be the greatest you. Would you believe in what you believe in?
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-sm font-medium text-gray-800 hover:text-gray-900"
        >
          READ MORE →
        </a>
      </div>
    </div>
  </section>
  )
}

export default Features