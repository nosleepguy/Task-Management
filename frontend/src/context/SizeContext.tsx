import { createContext, useState } from "react";

const SizeContextProvider = createContext<number>(1000);

const SizeContext = ({ children }: any) => {
    const [size, setSize] = useState<number>(1000);
    window.addEventListener("resize", () => {
        var width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        setSize(width);
    });
    return (
        <SizeContextProvider.Provider value={size}>
            {children}
        </SizeContextProvider.Provider>
    );
};

export { SizeContext, SizeContextProvider };
