import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginRequest } from "redux/action/auth";

interface formDataType {
    email: string;
    password: string | number;
}

const Login = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<formDataType>({
        email: "",
        password: "",
    });
    const onHandleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginRequest(formData));
    };
    const onHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { id, value } = e.currentTarget;
        setFormData((pre) => ({ ...pre, [id]: value }));
    };

    return (
        <div>
            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">
                        Welcome to Task Management
                    </h3>
                    <p className="text-gray-600 pt-2">
                        Sign in to sync with your devices
                    </p>
                </section>

                <section className="mt-10">
                    <form className="flex flex-col" onSubmit={onHandleLogin}>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="VD: devvietnam@gmail.com"
                                value={formData.email}
                                onChange={onHandleChange}
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                            />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                required
                                value={formData.password}
                                onChange={onHandleChange}
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                            />
                        </div>
                        <div className="flex justify-end">
                            <Link
                                to="/register"
                                className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <button
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Login;
