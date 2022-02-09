import { useState, Fragment } from "react";
import { AddCircle, Calendar1, Add, Flash, Coffee, Alarm } from "iconsax-react";
import { Menu, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";

import "react-datetime-picker/dist/DateTimePicker.css";

const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
];

const AddTaskContainer = () => {
    const [value, onChange] = useState(new Date());
    const [selected, setSelected] = useState(people[0]);

    return (
        <div className="rounded-md p-10 h-full pt-0 basis-1/2">
            <div className="flex justify-center items-center mb-5 h-16">
                <h1 className="text-4xl font-bold h-fit ml-5">Add Task</h1>
            </div>
            <span className="text-xs inline-block py-1 px-1.5 mb-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                Add Todo
            </span>
            <textarea
                className="p-3 mb-2 rounded-lg outline-none w-full h-fit border-2 border-gray-300"
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
                                className="border-gray-300 border-2 outline-none bg-white p-1.5 rounded-md"
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
                <div className="label ml-5">
                    <span className="w-fit text-xs inline-block py-1 px-1.5 mb-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                        Label
                    </span>
                    <div className="w-72">
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative">
                                <Listbox.Button
                                    className="relative w-full py-2.5 pl-3 pr-10 text-left 
                                bg-white rounded-lg border-gray-300 border-2 cursor-default 
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 
                                focus-visible:ring-white focus-visible:ring-offset-orange-300 
                                focus-visible:ring-offset-2 focus-visible:border-indigo-500 
                                sm:text-sm"
                                >
                                    <span className="block truncate">
                                        {selected.name}
                                    </span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon
                                            className="w-5 h-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `${
                                                        active
                                                            ? "text-amber-900 bg-amber-100"
                                                            : "text-gray-900"
                                                    }
                          cursor-default select-none relative py-2 pl-10 pr-4 rounded-md mx-1`
                                                }
                                                value={person}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <span
                                                            className={`${
                                                                selected
                                                                    ? "font-medium"
                                                                    : "font-normal"
                                                            } block truncate`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span
                                                                className={`${
                                                                    active
                                                                        ? "text-amber-600"
                                                                        : "text-amber-600"
                                                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                            >
                                                                <CheckIcon
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                </div>
            </div>
            <button className="flex jusify-center mt-3 px-3 py-2 bg-sky-500 rounded text-white">
                <AddCircle
                    className="mr-2"
                    size="25"
                    color="currentColor"
                    variant="Outline"
                />
                Add
            </button>
        </div>
    );
};

export default AddTaskContainer;
