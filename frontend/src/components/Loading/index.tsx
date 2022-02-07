import { Player } from "@lottiefiles/react-lottie-player";
const Loading = () => {
    return (
        <>
            <Player
                src="https://assets4.lottiefiles.com/packages/lf20_YMim6w.json"
                background="transparent"
                speed={1}
                style={{ height: '300px', width: '300px' }}
                loop
                autoplay
            ></Player>
        </>
    );
};

export default Loading;
