import Logo from "./ui/Logo";

const PageLoader = () => {
    return (
        <div className="flex items-center z-50 justify-center fixed top-0 left-0 bg-white w-screen h-screen">
            <Logo theme='default' />
        </div>
    );
}

export default PageLoader;