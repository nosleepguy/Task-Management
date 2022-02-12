import { useState, Fragment, useEffect } from "react";
import {
    AddCircle,
    Calendar1,
    Add,
    Flash,
    Coffee,
    Alarm,
    ColorSwatch,
} from "iconsax-react";
import { Menu, Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";

import "react-datetime-picker/dist/DateTimePicker.css";
import { colorList } from "constant";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { addLabelAction, getLabelAction } from "redux/action";
import { notify } from "utils/notify";
import { addTaskAction } from "redux/action/task";

const StatusList = [
    {
        content: "Hot Water",
        icon: (selected: any, active: any) => (
            <Alarm
                className="mr-2"
                size="20"
                color={active | selected ? "#dc2626" : "currentColor"}
                variant={active | selected ? "Bold" : "Outline"}
            />
        ),
        id: 3,
    },
    {
        content: "Working",
        icon: (selected: any, active: any) => (
            <Flash
                className="mr-2"
                size="20"
                color={active | selected ? "#f59e0b" : "currentColor"}
                variant={active | selected ? "Bold" : "Outline"}
            />
        ),
        id: 2,
    },
    {
        content: "Hand Free",
        icon: (selected: any, active: any) => (
            <Coffee
                className="mr-2"
                size="20"
                color={active | selected ? "#2563eb" : "currentColor"}
                variant={active | selected ? "Bold" : "Outline"}
            />
        ),
        id: 1,
    },
];

const AddTaskContainer = () => {
    const dispatch = useDispatch();
    const dataAuthRedux = useSelector(
        (state: RootStateOrAny) => state.AuthReducer
    );
    const dataLabelRedux = useSelector(
        (state: RootStateOrAny) => state.LabelReducer
    );

    const [content, setContent] = useState<string>("");
    const [deadline, setDeadline] = useState<Date>(new Date());
    const [status, setStatus] = useState<any>(StatusList[0]);
    const [LabelList, setLabelList] = useState([]);
    const [labelSelected, setLabelSelected] = useState({
        _id: "randomnumber",
        name: "Loading...",
    });

    const [newLabel, setNewLabel] = useState("");
    const [colorLabelSelected, setColorLabelSelected] =
        useState<string>("#10b981");

    //create task
    const handleUpTask = () => {
        const payload = {
            owner_id: dataAuthRedux._id,
            content,
            deadline: deadline.toISOString(),
            status: status.id,
            label_id: labelSelected._id,
        };
        if (payload.content.length === 0 || payload.status == undefined) {
            notify("error", "Please fill all field");
        } else {
            // console.log(payload);
            dispatch(addTaskAction(payload));
        }
    };

    //create label
    const handleUpLabel = () => {
        if (newLabel.length > 0) {
            newLabel.trim();
            dispatch(
                addLabelAction({
                    owner_id: dataAuthRedux._id,
                    name: newLabel,
                    hashColor: colorLabelSelected,
                })
            );
            setNewLabel("");
        }
    };
    // callback for date when open
    const customDate = () => {
        let listDateDisable = document.querySelectorAll(
            ".react-calendar__month-view__days__day"
        );
        listDateDisable.forEach((item) => {
            if (item.getAttribute("disabled") != null) {
                item.classList.add("disabled-date");
            }
        });
    };

    // lấy label về
    useEffect(() => {
        dispatch(getLabelAction({ owner_id: dataAuthRedux._id }));
    }, [dataAuthRedux]);

    //setlabel khi lấy được list label về
    useEffect(() => {
        setLabelList(dataLabelRedux);
        dataLabelRedux.length > 0 && setLabelSelected(dataLabelRedux[0]);
    }, [dataLabelRedux]);

    useEffect(() => {
        console.log(labelSelected);
    }, [labelSelected]);
    return (
        <div
            className="rounded-md p-10 pt-0 basis-1/2 text-regal-blue"
            style={{ height: "max-content" }}
        >
            <div className="flex justify-center items-center mb-5 h-16">
                <h1 className="text-4xl font-bold h-fit ml-5">Add Task</h1>
            </div>
            <span className="text-xs inline-block py-1 px-1.5 mb-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                Add Todo
            </span>
            <textarea
                className="p-3 mb-2 rounded-lg outline-none w-full h-fit border-2 border-gray-300"
                placeholder="📝 Add todo..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <div className="dealine flex flex-wrap">
                {/* deadline */}
                <div className="datetime mr-5 relative z-50">
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
                                onChange={setDeadline}
                                value={deadline}
                                onCalendarOpen={customDate}
                            />
                        </div>
                    </div>
                </div>

                {/* status */}
                <div className="label mr-5 z-50">
                    <span className="w-fit text-xs inline-block py-1 px-1.5 mb-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                        Status
                    </span>
                    <div className="w-72">
                        <Listbox value={status} onChange={setStatus}>
                            <div className="relative">
                                <Listbox.Button
                                    className="relative w-full py-2.5 pl-3 pr-10 text-left 
                                bg-white rounded-lg border-gray-300 border-2 cursor-default 
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 
                                focus-visible:ring-white focus-visible:ring-offset-orange-300 
                                focus-visible:ring-offset-2 focus-visible:border-indigo-500 
                                sm:text-sm"
                                >
                                    <div className="flex">
                                        {status.icon(true, false)}
                                        <span className="block truncate ml-2">
                                            {status.content}
                                        </span>
                                    </div>
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
                                        {StatusList.map(
                                            (item: any, itemIndex) => (
                                                <Listbox.Option
                                                    key={itemIndex}
                                                    className={({ active }) =>
                                                        `${
                                                            active
                                                                ? "text-amber-900 bg-amber-100"
                                                                : "text-gray-900"
                                                        }
                          cursor-default select-none relative z-30 py-2 pl-10 pr-4 rounded-md mx-1`
                                                    }
                                                    value={item}
                                                >
                                                    {({ selected, active }) => (
                                                        <div className="flex">
                                                            <span>
                                                                {item.icon(
                                                                    selected,
                                                                    active
                                                                )}
                                                            </span>
                                                            <span
                                                                className={`${
                                                                    selected
                                                                        ? "font-medium"
                                                                        : "font-normal"
                                                                } block truncate`}
                                                            >
                                                                {item.content}
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
                                                        </div>
                                                    )}
                                                </Listbox.Option>
                                            )
                                        )}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                </div>

                {/* label */}
                <div className="label mr-5 z-40">
                    <span className="w-fit text-xs inline-block py-1 px-1.5 mb-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                        Label
                    </span>
                    <div className="w-72">
                        <Listbox
                            value={labelSelected}
                            onChange={setLabelSelected}
                        >
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
                                        {labelSelected.name}
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
                                        {LabelList.length > 0 &&
                                            LabelList.map(
                                                (item: any, itemIndex) => (
                                                    <Listbox.Option
                                                        key={itemIndex}
                                                        className={({
                                                            active,
                                                        }) =>
                                                            `${
                                                                active
                                                                    ? "text-amber-900 bg-amber-100"
                                                                    : "text-gray-900"
                                                            }
                          cursor-default select-none relative z-30 py-2 pl-10 pr-4 rounded-md mx-1`
                                                        }
                                                        value={item}
                                                    >
                                                        {({
                                                            selected,
                                                            active,
                                                        }) => (
                                                            <>
                                                                <span
                                                                    className={`${
                                                                        selected
                                                                            ? "font-medium"
                                                                            : "font-normal"
                                                                    } block truncate`}
                                                                >
                                                                    {item.name}
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
                                                )
                                            )}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                </div>
                {/* add label */}
                <div className="add-label z-0">
                    <p className="w-fit text-xs inline-block py-1 px-1.5 mb-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-orange-600 text-white rounded">
                        Add label
                    </p>
                    <div className="wrap border-gray-300 border-2 rounded-md flex justify-center items-center">
                        <Menu
                            as="div"
                            className="relative z-10 inline-block h-10 text-left p-0 m-0"
                        >
                            <Menu.Button
                                as="div"
                                className="relative inline-flex justify-center w-full p-0 m-0 bg-white 
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-white 
                                focus-visible:ring-opacity-75"
                            >
                                <ColorSwatch
                                    className="z-10 box-content bg-sky-100 text-sky-600 m-0 p-[7.5px] px-[12px] hover:text-blue-600"
                                    size="25"
                                    variant="Outline"
                                />
                            </Menu.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute z-0 left-0 w-fit origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <div className="">
                                                    <div
                                                        className="grip grid-rows-5 max-h-[300px] overflow-y-scroll"
                                                        style={{
                                                            width: "180px",
                                                        }}
                                                    >
                                                        {colorList.map(
                                                            (item, index) => (
                                                                <button
                                                                    onClick={() =>
                                                                        setColorLabelSelected(
                                                                            item
                                                                        )
                                                                    }
                                                                    key={index}
                                                                    className={`border-2 hover:border-gray-500 rounded items-center w-8 h-8 m-px`}
                                                                    style={{
                                                                        backgroundColor:
                                                                            item,
                                                                    }}
                                                                ></button>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <input
                            type="text"
                            className="h-10 px-3 outline-none"
                            style={{ color: colorLabelSelected }}
                            value={newLabel}
                            onChange={(e) => setNewLabel(e.target.value)}
                        />
                        <CheckIcon
                            className="w-7 h-7 box-content text-sky-600 px-[10px]"
                            onClick={handleUpLabel}
                        />
                    </div>
                </div>
            </div>
            <button
                className="flex jusify-center mt-3 px-3 py-2 bg-sky-500 rounded text-white"
                onClick={handleUpTask}
            >
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
