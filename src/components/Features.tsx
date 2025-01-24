import React from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaXmarksLines } from "react-icons/fa6";
import { MdOutlineTimeline } from "react-icons/md";
const Features = () => {
  return (
    <section className="bg-gray-50">
      <div className="py-12 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold px-2">
            Master Every Project with Precision
          </h2>
          <p className="text-gray-500 mt-4 px-5">
            Harkh empowers teams to overcome project challenges by using AI to
            manage resources, prevent scope creep, and meet deadlines—ensuring
            every idea turns into a successful project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-200 rounded-full mb-4">
              {/* Icon for "Check our team" */}
              <BsRocketTakeoff className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-lg font-semibold">
              AI-Powered Resource Management
            </h3>
            <p className="text-gray-600 mt-2 px-3">
              Optimize your team’s productivity by assigning the right tasks to
              the right members at the right time using AI-driven insights.
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
              <FaXmarksLines className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-lg font-semibold">
              Intelligent Scope Tracking
            </h3>
            <p className="text-gray-600 mt-2 px-3">
              Stay within budget and avoid project scope creep with real-time
              tracking and early warnings powered by advanced algorithms.
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
              <MdOutlineTimeline className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-lg font-semibold">Deadline Optimization</h3>
            <p className="text-gray-600 mt-2 px-3">
              Meet deadlines efficiently with AI that sets realistic timelines,
              dynamically adapting to your resources and team experience.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-sm font-medium text-gray-800 hover:text-gray-900"
            >
              READ MORE →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
