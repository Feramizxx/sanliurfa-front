const useFileUpload = (inputRef, allowedExtensions, setError, setFile = null, onSuccess = null) => {

    const validateExtension = (extension, e) => {
        if (!Array.isArray(allowedExtensions)) {
            return false;
        }

        if (!allowedExtensions.includes(extension)) {
            const extensions = allowedExtensions.join(' ');
            setError(`Uploaded file has wrong extension allowed extensions are: ${extensions}`);
            e.target.value = null;
            return false;
        }

        return true;
    }

    const onButtonClick = () => {
        inputRef.current.click();
    }

    const onInputChange = (e) => {
        const uploadedFile = e.target.files[0];
        const extension = uploadedFile.name.split('.').pop();
        if (validateExtension(extension, e)) {
            if (setFile) setFile(uploadedFile);
            setError('');
            if (onSuccess) onSuccess(uploadedFile);
        }
    }

    return [onButtonClick, onInputChange];
}

export default useFileUpload;