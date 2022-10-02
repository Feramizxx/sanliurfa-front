const MyModal = ({ visible, onClose, children }) => {

    const onShadowClick = () => {
        onClose();
    }

    const onContentClick = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            {visible &&
                <div onClick={onShadowClick} className="fixed w-screen h-screen z-50 top-0 left-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="modal" onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            }
        </>
    );
}

export default MyModal;