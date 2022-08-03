export const getFooterTheme = (num) => {
    switch (num) {
        case 3: return 'white'
        case 4: return 'white'
        case 5: return 'white'
        default: return 'default'
    }
}

export const scrollTop = () => {
    window.scrollTo({top: 0, left: 0});
}