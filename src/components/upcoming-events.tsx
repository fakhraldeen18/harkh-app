"use client";

import EventsCalender from "./evants-calender";
import { motion } from "framer-motion";

const events = [
  {
    startTime: "10:00",
    endTime: "11:00",
    type: "Task",
    title: "Daily Stand Up Progress Report",
    duration: "10:00 AM - 11:00 AM",
  },
  {
    startTime: "12:00",
    endTime: "13:00",
    type: "Task",
    title: "Daily Stand Up Progress Report",
    duration: "12:00 AM - 13:00 AM",
  },
  {
    startTime: "14:00",
    endTime: "15:00",
    type: "Task",
    title: "Daily Stand Up Progress Report",
    duration: "14:00 AM - 15:00 AM",
  },
  {
    startTime: "16:00",
    endTime: "17:00",
    type: "Meeting",
    title: "Daily Stand Up Progress Report",
    duration: "16:00 AM - 17:00 AM",
  },
];

export function UpcomingEvents() {
  return (
    <div className="bg-white border rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900">Calender</h2>
      <EventsCalender />
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Upcoming</h2>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
          View All
        </a>
      </div>

      <div className="relative">
        <div className="space-y-0">
          {events.map((event, index) => (
            <div key={index} className="relative flex group items-center">
              {/* Time marker */}
              <div className="w-[5rem] flex flex-col justify-between h-[90px]">
                {/* Start time */}
                <div className="flex items-center">
                  <span className="text-sm text-gray-400 tabular-nums w-[3.25rem] text-right">
                    {event.startTime}
                  </span>
                  <span className="text-gray-300 ml-1">--</span>
                </div>

                {/* End time */}
                <div className="flex items-center">
                  <span className="text-sm text-gray-400 tabular-nums w-[3.25rem] text-right">
                    {event.endTime}
                  </span>
                  <span className="text-gray-300 ml-1">--</span>
                </div>
              </div>

              {/* Event content */}
              <motion.div
                className="flex-1 pb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="">
                  {/* Event card */}
                  <div className="bg-white relative rounded-lg p-4 shadow-sm border group-hover:border-blue-100 transition-colors pl-8">
                    {/* Timeline bar */}
                    <div className="absolute left-2 top-4 bottom-4 w-1 bg-blue-800 rounded-full" />
                    <div className="space-y-2">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-md font-medium
                          ${
                            event.type === "Meeting"
                              ? "bg-blue-50 text-blue-600"
                              : "bg-gray-50 text-gray-600"
                          }`}
                      >
                        {event.type}
                      </span>

                      <h4 className="font-semibold text-gray-900">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-500">{event.duration}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
