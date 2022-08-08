export const convertLinkToNumber = () => {
    const url = window.location.href;
    const urlPartition = url.split('/');
    const page = urlPartition[urlPartition.length - 1];

    switch (page) {
        case '': return 1
        case 'about': return 2
        case 'menu': return 3
        case 'campaigns': return 4
        case 'news': return 5
        case 'career': return 6
        case 'contact': return 7
        default: return 0
    }
}

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