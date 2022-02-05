import React, { useState, Fragment } from "react";
import { AddCircle, Calendar1, Add, Flash, Coffee,Alarm } from "iconsax-react";
import { Menu, Transition } from "@headlessui/react";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import TodoLogo from "./../../assets/todo.svg";

import "react-datetime-picker/dist/DateTimePicker.css";
// import "react-date-picker/dist/DatePicker.css";
// import "react-time-picker/dist/TimePicker.css";

const AddTaskContainer = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="rounded-md morphin p-5 basis-1/2 m-5 z-30">
            <div className="flex justify-center items-center mb-5 h-16">
                <img className="w-14" src={TodoLogo} alt="" />
                <h1 className="text-4xl font-bold h-fit ml-5">Add Task</h1>
            </div>
            <span className="text-xs inline-block py-1 px-1.5 mb-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                Add Todo
            </span>
            <textarea
                className="p-3 mb-2 rounded-lg outline-none w-full h-fit border-2 border-gray-300 morphin"
                placeholder="📝 Add todo..."
            ></textarea>
            <div className="dealine flex">
                <div className="datetime">
                    <p className="w-fit text-xs inline-block py-1 px-1.5 mb-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-orange-600 text-white rounded">
                        Deadline
                    </p>
                    <div className="wrap flex">
                        <div className="time flex flex-col">
                            <DateTimePicker
                                className="border-gray-300 border-2 outline-none bg-white p-2 rounded-md"
                                amPmAriaLabel="Select AM/PM"
                                required
                                disableClock={true}
                                calendarIcon={
                                    <Calendar1
                                        className="mr-2"
                                        size="20"
                                        color="currentColor"
                                        variant="Outline"
                                    />
                                }
                                clearIcon={
                                    <Add
                                        className="mr-2 ml-0"
                                        size="20"
                                        color="currentColor"
                                        variant="Outline"
                                        style={{ transform: "rotate(45deg)" }}
                                    />
                                }
                                minDate={new Date()}
                                onChange={onChange}
                                value={value}
                            />
                        </div>
                    </div>
                </div>
                <div className="status ml-5">
                    <span className="w-fit text-xs inline-block py-1 px-1.5 mb-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                        Status
                    </span>
                    <div className="wrap flex">
                        <div className="time flex flex-col">
                            <div className="">
                                <Menu
                                    as="div"
                                    className="relative inline-block text-left"
                                >
                                    <div>
                                        <Menu.Button
                                            className="inline-flex justify-center w-full px-4 py-2 
                                bg-white rounded-md border-gray-300 border-2
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-white 
                                focus-visible:ring-opacity-75"
                                        >
                                            Todo Status
                                            <Flash
                                                className="ml-2"
                                                size="20"
                                                color="currentColor"
                                                variant="Outline"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 w-36 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${
                                                                active
                                                                    ? "bg-red-500 text-white"
                                                                    : "text-gray-900"
                                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                        >
                                                            {active ? (
                                                                <Alarm
                                                                    className="mr-2"
                                                                    size="20"
                                                                    color="currentColor"
                                                                    variant="Outline"
                                                                />
                                                            ) : (
                                                                <Alarm
                                                                    className="mr-2"
                                                                    size="20"
                                                                    color="currentColor"
                                                                    variant="Outline"
                                                                />
                                                            )}
                                                            Hot Water
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${
                                                                active
                                                                    ? "bg-orange-500 text-white"
                                                                    : "text-gray-900"
                                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                        >
                                                            {active ? (
                                                                <Flash
                                                                    className="mr-2"
                                                                    size="20"
                                                                    color="currentColor"
                                                                    variant="Outline"
                                                                />
                                                            ) : (
                                                                <Flash
                                                                    className="mr-2"
                                                                    size="20"
                                                                    color="currentColor"
                                                                    variant="Outline"
                                                                />
                                                            )}
                                                            Working
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${
                                                                active
                                                                    ? "bg-blue-500 text-white"
                                                                    : "text-gray-900"
                                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                        >
                                                            {active ? (
                                                                <Coffee
                                                                    className="mr-2"
                                                                    size="20"
                                                                    color="currentColor"
                                                                    variant="Outline"
                                                                />
                                                            ) : (
                                                                <Coffee
                                                                    className="mr-2"
                                                                    size="20"
                                                                    color="currentColor"
                                                                    variant="Outline"
                                                                />
                                                            )}
                                                            Hand free
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="flex jusify-center mt-3 px-3 py-2 bg-sky-500 rounded text-white">
                <AddCircle
                    className="mr-2"
                    size="20"
                    color="currentColor"
                    variant="Outline"
                />
                Add
            </button>
        </div>
    );
};

export default AddTaskContainer;
